
import {rateLimit,clean,json} from '../lib/server-utils.js';
function cfg(){return {url:(process.env.SUPABASE_URL||'').replace(/\/$/,''),key:process.env.SUPABASE_SERVICE_ROLE_KEY||''};}
async function sb(path,options={}){const c=cfg(); if(!c.url||!c.key) throw new Error('not-configured'); return fetch(`${c.url}/rest/v1/${path}`,{...options,headers:{apikey:c.key,Authorization:`Bearer ${c.key}`,'Content-Type':'application/json',...(options.headers||{})}});}
export default async function handler(req,res){
  if(req.method==='GET'){
    try{const r=await sb('reviews?status=eq.approved&select=id,name,clinic,text,rating,created_at&order=created_at.desc&limit=30'); if(!r.ok) throw new Error('db'); return json(res,200,{reviews:await r.json()});}
    catch{return json(res,503,{error:'Reviews backend is not configured',reviews:[]});}
  }
  if(req.method!=='POST') return json(res,405,{error:'Method not allowed'});
  if(!rateLimit(req,5,60000)) return json(res,429,{error:'Too many requests'});
  const name=clean(req.body?.name,40),clinic=clean(req.body?.clinic,60),text=clean(req.body?.text,500),rating=Number(req.body?.rating);
  if(name.length<2||text.length<10||!Number.isInteger(rating)||rating<1||rating>5) return json(res,400,{error:'Invalid review'});
  try{const r=await sb('reviews',{method:'POST',headers:{Prefer:'return=minimal'},body:JSON.stringify({name,clinic,text,rating,status:'pending'})}); if(!r.ok) throw new Error('db'); return json(res,201,{ok:true,status:'pending'});}
  catch{return json(res,503,{error:'Reviews backend is not configured'});}
}
