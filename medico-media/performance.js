(() => {
  'use strict';
  const root=document.documentElement;
  const coarse=matchMedia('(max-width:1024px), (hover:none), (pointer:coarse)');
  const apply=()=>root.classList.toggle('mobile-performance',coarse.matches);
  apply();
  coarse.addEventListener?.('change',apply);

  // Never leave document interaction blocked by accidental inline state.
  window.addEventListener('pageshow',()=>{
    document.body?.classList.remove('loading','no-scroll');
    document.body && (document.body.style.pointerEvents='');
  },{passive:true});

  // Release mobile nav state after orientation / viewport changes.
  let timer;
  window.addEventListener('resize',()=>{
    clearTimeout(timer);
    timer=setTimeout(()=>{
      if(innerWidth>1100){
        document.getElementById('mobileNav')?.classList.remove('open');
        document.querySelector('.menu-btn')?.setAttribute('aria-expanded','false');
      }
    },120);
  },{passive:true});
})();
