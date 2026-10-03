
const buckets=new Map();
export function rateLimit(req,limit=12,windowMs=60000){
  const key=(req.headers['x-forwarded-for']||req.socket?.remoteAddress||'anon').toString().split(',')[0].trim();
  const now=Date.now(); const old=buckets.get(key)||[]; const fresh=old.filter(t=>now-t<windowMs);
  if(fresh.length>=limit) return false; fresh.push(now); buckets.set(key,fresh); return true;
}
export function clean(value,max=500){ return String(value??'').trim().slice(0,max); }
export function json(res,status,payload){ res.status(status).setHeader('Content-Type','application/json; charset=utf-8'); res.setHeader('Cache-Control','no-store'); return res.end(JSON.stringify(payload)); }
