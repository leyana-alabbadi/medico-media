
(() => {
  'use strict';
  const form=document.querySelector('#contactForm');
  if(!form) return;
  const status=document.querySelector('#contactStatus');
  const lang=()=>document.documentElement.lang==='en'?'en':'ar';
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    if(!form.reportValidity()) return;
    const data=Object.fromEntries(new FormData(form).entries());
    if(data.company_website) return;
    const button=form.querySelector('button[type="submit"]');
    button.disabled=true;
    status.textContent=lang()==='ar'?'جاري إرسال الطلب...':'Sending your request...';
    try{
      if(location.protocol==='file:') throw new Error('local preview');
      const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
      const out=await res.json().catch(()=>({}));
      if(!res.ok) throw new Error(out.error||'send failed');
      form.reset();
      status.textContent=lang()==='ar'?'تم استلام طلبك ✓ سنتواصل معك بأقرب وقت.':'Request received ✓ We’ll get back to you soon.';
    }catch{
      status.innerHTML=lang()==='ar'?'الإرسال المباشر يحتاج تفعيل إعدادات السيرفر. يمكنك التواصل الآن عبر <a href="https://wa.me/9647710186661" target="_blank" rel="noopener">واتساب</a>.':'Direct submission needs the production server settings. You can contact us now on <a href="https://wa.me/9647710186661" target="_blank" rel="noopener">WhatsApp</a>.';
    }finally{
      button.disabled=false;
    }
  });
})();
