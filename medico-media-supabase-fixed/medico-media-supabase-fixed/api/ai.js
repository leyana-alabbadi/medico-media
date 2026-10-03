
import {rateLimit,clean,json} from '../lib/server-utils.js';

const SERVICES=`Medico Media services and current displayed prices (currency is NOT stated on the website, so never invent one):
- Clinic Photography: 200,000 (previously 250,000).
- Before & After Documentation: 25,000 for one version; 35,000 for before+after (previously 35,000 / 50,000).
- Medical Procedure Ad: 125,000 (previously 150,000).
- Case Review / مراجعة الحالة: 100,000 (previously 150,000).
- Medical Motion Graphics: 50,000 without case photography; 75,000 with photography (previously 75,000 / 100,000).
- Economic Monthly Offer: 450,000 (previously 600,000), includes 12 story-content days, 4 reels and 4 medical case/photo documentation sets.`;

const SYSTEM=`You are Medico Media's official AI content consultant for clinics and medical professionals. Be warm, concise, polished and highly helpful. Reply in the user's language (Arabic or English), and greet naturally when appropriate.
Your job is ONLY to help with Medico Media: services, prices, content strategy, choosing packages, clinic specialty, goals, content ideas, how to contact the team, and clarifying what each service includes.
Ask smart questions when useful: clinic specialty, goal (bookings/trust/education/results/branding/monthly consistency), preferred format and budget.
Never diagnose, prescribe, assess symptoms, or provide patient-specific medical advice. If asked for medical advice, explain that you can help with content/marketing but medical questions should go to a qualified clinician.
Never invent currency, delivery times, guarantees, discounts, client results, policies or features not in the provided information. Prices are informational and final scope is confirmed by Medico Media.
Do not request or encourage sharing patient names, medical records or identifiable health information. Remind users to obtain appropriate patient consent before publishing clinical images or videos.
When relevant, suggest contacting Medico Media through the site's contact form or WhatsApp.
${SERVICES}`;

export default async function handler(req,res){
  if(req.method!=='POST') return json(res,405,{error:'Method not allowed'});
  if(!rateLimit(req,16,60000)) return json(res,429,{error:'Too many requests'});
  const key=process.env.OPENAI_API_KEY;
  if(!key) return json(res,503,{error:'AI backend is not configured'});
  const message=clean(req.body?.message,1200); const lang=clean(req.body?.lang,5)||'ar'; const page=clean(req.body?.page,80)||'home';
  if(!message) return json(res,400,{error:'Message is required'});
  const history=Array.isArray(req.body?.history)?req.body.history.slice(-8).map(x=>({role:x?.role==='assistant'?'assistant':'user',content:clean(x?.content,1200)})).filter(x=>x.content):[];
  const input=[{role:'system',content:SYSTEM+`
Current site language: ${lang}. Current page: ${page}.`},...history,{role:'user',content:message}];
  try{
    const r=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{'Authorization':`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({model:process.env.OPENAI_MODEL||'chat-latest',input,max_output_tokens:500})});
    const data=await r.json();
    if(!r.ok) return json(res,502,{error:'AI provider error'});
    const reply=data.output_text || (data.output||[]).flatMap(item=>item.content||[]).filter(c=>c.type==='output_text').map(c=>c.text).join('\n');
    if(!reply) return json(res,502,{error:'Empty AI response'});
    return json(res,200,{reply});
  }catch{return json(res,502,{error:'AI service unavailable'});}
}
