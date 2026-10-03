
import {rateLimit,clean,json} from '../lib/server-utils.js';
async function saveLead(lead){
  const url=(process.env.SUPABASE_URL||'').replace(/\/$/,''); const key=process.env.SUPABASE_SERVICE_ROLE_KEY||'';
  if(!url||!key) return false;
  const r=await fetch(`${url}/rest/v1/contact_requests`,{method:'POST',headers:{apikey:key,Authorization:`Bearer ${key}`,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(lead)}); return r.ok;
}
async function sendEmail(lead){
  const key=process.env.RESEND_API_KEY, to=process.env.CONTACT_EMAIL, from=process.env.FROM_EMAIL;
  if(!key||!to||!from) return false;
  const body=`Name: ${lead.name}
Clinic: ${lead.clinic||'-'}
Contact: ${lead.contact}
Specialty: ${lead.specialty||'-'}

${lead.message}`;
  const r=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[to],subject:`Medico Media inquiry — ${lead.name}`,text:body})}); return r.ok;
}
export default async function handler(req,res){
  if(req.method!=='POST') return json(res,405,{error:'Method not allowed'});
  if(!rateLimit(req,5,60000)) return json(res,429,{error:'Too many requests'});
  if(clean(req.body?.company_website,200)) return json(res,200,{ok:true});
  const lead={name:clean(req.body?.name,80),clinic:clean(req.body?.clinic,100),contact:clean(req.body?.contact,120),specialty:clean(req.body?.specialty,100),message:clean(req.body?.message,1200),consent:Boolean(req.body?.consent)};
  if(lead.name.length<2||lead.contact.length<3||lead.message.length<10||!lead.consent) return json(res,400,{error:'Invalid contact request'});
  try{const results=await Promise.allSettled([saveLead(lead),sendEmail(lead)]); const ok=results.some(x=>x.status==='fulfilled'&&x.value===true); if(!ok) return json(res,503,{error:'Contact backend is not configured'}); return json(res,201,{ok:true});}
  catch{return json(res,500,{error:'Unable to submit request'});}
}
