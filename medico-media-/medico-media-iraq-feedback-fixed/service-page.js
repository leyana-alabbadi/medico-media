
(() => {
  'use strict';
  const qs=(s,e=document)=>e.querySelector(s), qsa=(s,e=document)=>[...e.querySelectorAll(s)];
  const html=document.documentElement;

const DATA={
  'dental-photography':{
    image:'assets/media/hero-smile.webp',
    ar:{title:'تصوير احترافي للعيادة',eyebrow:'Clinic Photography',lead:'جلسة تصوير متكاملة تبني مكتبة بصرية قوية للعيادة: المكان، الفريق، التفاصيل، الخدمات والنتائج — بأسلوب طبي نظيف ومناسب للموقع والسوشال ميديا والحملات.',desc:'نخطط للجلسة حسب تخصص العيادة وهويتها، ثم ننتج صورًا ولقطات قصيرة متناسقة ترفع مستوى حضورها الرقمي. الأمثلة المعروضة من قطاع الأسنان، والخدمة متاحة لمختلف التخصصات الطبية.',badge:'Photo + Short Reels',prices:[['جلسة تصوير وهوية بصرية للعيادة','250,000','200,000']],includes:['تصوير احترافي داخل العيادة','توثيق الفريق والخدمات والتفاصيل','لقطات نتائج عند توفرها','معالجة وتصحيح ألوان احترافي','مخرجات للموقع والسوشال ميديا','جولة تعديل واحدة مشمولة']},
    en:{title:'Professional Clinic Photography',eyebrow:'Clinic Photography',lead:'A complete visual session for your clinic — space, team, details, services and results — built for websites, social media and campaigns.',desc:'We plan the shoot around your clinic specialty and brand, then create a consistent photo and short-form visual library. The samples shown are dental, while the service is available across medical specialties.',badge:'Photo + Short Reels',prices:[['Clinic photography & visual identity session','250,000','200,000']],includes:['Professional on-site clinic photography','Team, service and detail documentation','Result photography where applicable','Professional retouching and color correction','Web and social-ready exports','One revision round included']}
  },
  'case-ad':{
    image:'assets/media/user-before-after.JPG',
    ar:{title:'توثيق الحالة قبل / بعد',eyebrow:'Before & After Documentation',lead:'توثيق بصري واضح للحالة يبرز الفرق قبل وبعد العلاج بطريقة مرتبة ومقنعة، مع الحفاظ على الطابع الطبي والهوية البصرية للعيادة.',desc:'نرتب صور الحالة ونضبطها بصريًا لتكون النتيجة سهلة الفهم ومناسبة للنشر أو للإعلان. هذا النوع ممتاز لإثبات النتائج وبناء الثقة، ويمكن تطبيقه على تخصصات طبية مختلفة حسب طبيعة الحالة.',badge:'Before / After',prices:[['نسخة قبل أو بعد فقط','35,000','25,000'],['نسخة قبل + بعد معًا','50,000','35,000']],includes:['تنسيق احترافي للقطات الحالة','توحيد القص والإضاءة والألوان','إظهار الفرق قبل / بعد بوضوح','تسليم بصيغة جاهزة للنشر','مقاسات مناسبة للسوشال ميديا','جولة تعديل واحدة مشمولة']},
    en:{title:'Before & After Documentation',eyebrow:'Before & After Documentation',lead:'Clear visual case documentation that highlights the change before and after treatment while keeping a clean medical look and consistent clinic identity.',desc:'We organize and polish case visuals so the result is easy to understand and ready for publishing or advertising. It works across medical specialties whenever before/after documentation is appropriate.',badge:'Before / After',prices:[['Before or after version only','35,000','25,000'],['Before + after together','50,000','35,000']],includes:['Professional case composition','Consistent crop, lighting and color','Clear before/after presentation','Ready-to-publish delivery','Social media-friendly formats','One revision round included']}
  },
  'procedure-ad':{
    image:'assets/media/procedure-poster.webp',
    heroVideo:{src:'assets/media/procedure.mp4',poster:'assets/media/procedure-poster.webp'},
    ar:{title:'إعلان لإجراء طبي',eyebrow:'Procedure Ad',lead:'إعلان متكامل لإجراء أو خدمة طبية محددة: فكرة، سيناريو، تصوير ومونتاج، مبني ليشرح القيمة للمريض ويقوده بوضوح نحو التواصل والحجز.',desc:'نحوّل الإجراء الطبي إلى قصة قصيرة سهلة الفهم، ونبني الفيديو حول نقطة واضحة: ما الخدمة؟ لمن تناسب؟ ولماذا يتواصل المريض مع العيادة؟ الخدمة مناسبة لمختلف التخصصات الطبية.',badge:'Concept + Shoot + Edit',prices:[['الباقة الاحترافية','150,000','125,000']],includes:['فكرة وسيناريو لإجراء واحد','تصوير احترافي داخل العيادة','مونتاج وتصحيح ألوان وصوت','دعوة واضحة لاتخاذ إجراء','نسخة مناسبة للإعلانات والسوشال ميديا','جولة تعديل واحدة مشمولة']},
    en:{title:'Medical Procedure Ad',eyebrow:'Procedure Ad',lead:'A complete ad for one medical procedure or service — concept, script, filming and editing — designed to explain value clearly and move viewers toward inquiry or booking.',desc:'We turn a procedure into a short, easy-to-follow visual story: what it is, who it helps and why the patient should contact the clinic. The format works across medical specialties.',badge:'Concept + Shoot + Edit',prices:[['Professional package','150,000','125,000']],includes:['Concept and script for one procedure','Professional on-site filming','Editing, color and audio polish','Clear call to action','Ad and social-ready version','One revision round included']}
  },
  'case-review':{
    image:'assets/media/case-review-poster.webp',
    heroVideo:{src:'assets/media/case-review.mp4',poster:'assets/media/case-review-poster.webp'},
    ar:{title:'مراجعة الحالة',eyebrow:'مراجعة الحالة',lead:'محتوى يقدّم الطبيب أو المختص وهو يشرح حالة، فكرة أو تجربة بطريقة إنسانية وواضحة؛ لبناء الثقة وتحويل المعلومة الطبية إلى قصة يفهمها الجمهور.',desc:'نرتب الرسالة، نساعد على صياغة الكلام أمام الكاميرا، ثم ندمج الشرح مع اللقطات أو النتائج في فيديو قصير ومقنع. هذا الأسلوب مناسب للأطباء والعيادات بمختلف تخصصاتها.',badge:'محتوى يقوده الطبيب',prices:[['الباقة الاحترافية','150,000','100,000']],includes:['توجيه مسبق للحديث أمام الكاميرا','دعم في كتابة وترتيب السيناريو','تصوير احترافي في الموقع','مونتاج كامل للقصة أو الحالة','ترجمة نصية داخل الفيديو','جولة تعديل واحدة مشمولة']},
    en:{title:'Case Review',eyebrow:'Case Review',lead:'Doctor- or specialist-led content that explains a case, idea or experience in a clear human way — designed to build trust and make medical information easier to understand.',desc:'We structure the message, guide on-camera delivery, then combine the explanation with supporting visuals or results into a concise persuasive video. Suitable across medical specialties.',badge:'Doctor-led Content',prices:[['Professional package','150,000','100,000']],includes:['Pre-shoot camera guidance','Script and message structure support','Professional on-location filming','Full story/case edit','On-screen subtitles included','One revision round included']}
  },
  'motion-graphic':{
    image:'assets/media/medical-motion-poster.webp',
    heroVideo:{src:'assets/media/medical-motion.mp4',poster:'assets/media/medical-motion-poster.webp'},
    ar:{title:'موشن جرافيك طبي',eyebrow:'Medical Motion Graphic',lead:'مرئيات متحركة تشرح الخدمات والإجراءات والمعلومات الطبية بطريقة أسرع وأوضح وأكثر جاذبية من النص وحده.',desc:'نستخدم الحركة، النصوص، العناصر البصرية والـ2D/3D لتبسيط المعلومة مع الحفاظ على هوية العيادة. النموذج المرسل من مجال الأسنان، والخدمة قابلة للتطبيق على مختلف التخصصات الطبية.',badge:'2D / 3D Visual',prices:[['بدون تصوير الحالة','75,000','50,000'],['مع تصوير الحالة','100,000','75,000']],includes:['تحريك بصري مخصص للخدمة','إمكانية دمج عناصر 2D/3D','ألوان متوافقة مع هوية العيادة','نسخ مناسبة لمنصات التواصل','شرح بصري سريع وواضح','جولة تعديل واحدة مشمولة']},
    en:{title:'Medical Motion Graphics',eyebrow:'Medical Motion Graphic',lead:'Animated visuals that make medical services, procedures and information faster to understand and more engaging than static text alone.',desc:'We combine motion, typography, visual elements and 2D/3D-style graphics while staying aligned with the clinic identity. The supplied sample is dental, while the service applies across medical specialties.',badge:'2D / 3D Visual',prices:[['Without case photography','75,000','50,000'],['With case photography','100,000','75,000']],includes:['Custom animation for the service','Optional 2D/3D visual elements','Brand-aligned colors','Social-ready exports','Clear visual explanation','One revision round included']}
  },
  'economic-offer':{
    image:'assets/media/economic-offer.webp',
    ar:{title:'العرض الاقتصادي',eyebrow:'Economic Offer',lead:'باقة شهرية عملية للعيادات التي تريد حضورًا مستمرًا ومنظمًا: ستوري، ريلز وتوثيق حالات ضمن خطة محتوى واحدة واضحة.',desc:'بدل إنتاج قطعة منفصلة كل مرة، نجمع المحتوى الشهري في مسار واحد متناسق يوازن بين التثقيف، بناء الثقة، عرض الخدمات وإظهار النتائج. مناسبة لمختلف أنواع العيادات.',badge:'Monthly Content',prices:[['12 يوم ستوري + 4 ريلز + 4 حالات تصوير','600,000','450,000']],includes:['12 يوم محتوى ستوري','4 ريلز قصيرة','4 حالات تصوير / توثيق طبي','اتجاه بصري موحد للشهر','مخرجات جاهزة للنشر','تنظيم المحتوى حسب أهداف العيادة']},
    en:{title:'Economic Content Offer',eyebrow:'Economic Offer',lead:'A practical monthly package for clinics that want a consistent presence: stories, reels and case documentation inside one clear content plan.',desc:'Instead of producing every piece separately, we organize the month into one coherent system balancing education, trust, services and results. Suitable across clinic specialties.',badge:'Monthly Content',prices:[['12 story days + 4 reels + 4 case shoots','600,000','450,000']],includes:['12 story-content days','4 short-form reels','4 medical case/photo documentation sets','Consistent monthly visual direction','Ready-to-publish deliverables','Content organized around clinic goals']}
  }
};

  const key=document.body.dataset.service;
  const service=DATA[key] || DATA['dental-photography'];
  let lang=localStorage.getItem('medicoLang') || 'ar';
  const savedTheme=localStorage.getItem('medicoTheme') || 'dark';
  html.dataset.theme=savedTheme;

const common={
  ar:{skip:'تجاوز إلى المحتوى',home:'الرئيسية',services:'الخدمات',work:'أعمالنا',about:'من نحن',contact:'تواصل معنا',back:'العودة لكل الخدمات',details:'تفاصيل الخدمة',pricing:'الأسعار',included:'ماذا تشمل الخدمة؟',process:'طريقة العمل',processTitle:'من الفكرة إلى التسليم',processText:'مسار واضح يحافظ على جودة النتيجة ويجعل التنفيذ منظمًا وسلسًا.',p1:'نفهم الهدف',p1t:'نحدد تخصص العيادة والجمهور والرسالة والنتيجة التي نريد أن يفهمها المريض.',p2:'نصنع المحتوى',p2t:'ننفيذ التصوير أو التصميم أو الموشن ضمن أسلوب ميديكو ميديا وهوية العيادة.',p3:'نراجع ونسلّم',p3t:'نرتب النسخة النهائية ونراجع التفاصيل ثم نسلّم المحتوى جاهزًا للنشر.',ctaK:'جاهز نبدأ؟',ctaT:'خلّ محتوى عيادتك يشتغل لصالحك',ctaP:'احكِ لنا عن تخصص عيادتك والهدف الذي تريد تحقيقه وسنساعدك باختيار الخدمة الأنسب.',ctaB:'تواصل عبر واتساب',footerTag:'محتوى بصري وتسويق للعيادات والمجال الطبي.',rights:'جميع الحقوق محفوظة.'},
  en:{skip:'Skip to content',home:'Home',services:'Services',work:'Work',about:'About',contact:'Contact us',back:'Back to all services',details:'Service details',pricing:'Pricing',included:'What is included?',process:'How it works',processTitle:'From idea to delivery',processText:'A clear workflow that keeps production organized, fast and consistent.',p1:'Understand the goal',p1t:'We define the clinic specialty, audience, message and outcome patients should understand.',p2:'Create the content',p2t:'We execute photography, video, design or motion using the Medico Media visual direction and clinic identity.',p3:'Review & deliver',p3t:'We refine the final version, review the details and deliver it ready to publish.',ctaK:'Ready to start?',ctaT:'Put your clinic content to work',ctaP:'Tell us your clinic specialty and goal and we will help you choose the right service.',ctaB:'Contact on WhatsApp',footerTag:'Visual content and marketing for clinics and medical professionals.',rights:'All rights reserved.'}
};

  function wireVideoFallbacks(){
    qsa('video').forEach(video=>{
      if(video.dataset.wired==='1') return;
      video.dataset.wired='1';
      video.addEventListener('error',()=>{
        const src=video.getAttribute('src');
        if(src && !video.dataset.retry){
          video.dataset.retry='1';
          video.load();
        }
      });
    });
  }

  function render(){
    const c=service[lang], u=common[lang];
    html.lang=lang; html.dir=lang==='ar'?'rtl':'ltr';
    document.title=`${c.title} — Medico Media`; qs('.skip-link').textContent=u.skip;
    qs('#crumbHome').textContent=u.home; qs('#crumbServices').textContent=u.services; qs('#serviceEyebrow').textContent=c.eyebrow; qs('#serviceTitle').textContent=c.title; qs('#serviceLead').textContent=c.lead;
    const serviceImg=qs('#serviceImage');
    const serviceVideo=qs('#serviceVideo');
    if(service.heroVideo && serviceVideo){
      serviceImg.hidden=true;
      serviceVideo.hidden=false;
      serviceVideo.src=service.heroVideo.src;
      serviceVideo.poster=service.heroVideo.poster || service.image;
      serviceVideo.setAttribute('aria-label',c.title);
      serviceVideo.load();
    }else{
      if(serviceVideo){ serviceVideo.pause(); serviceVideo.removeAttribute('src'); serviceVideo.hidden=true; }
      serviceImg.hidden=false; serviceImg.src=service.image; serviceImg.alt=c.title; serviceImg.decoding='async'; serviceImg.fetchPriority='high'; serviceImg.loading='eager';
    }
    qs('#mediaBadge').textContent=c.badge;
    qs('#detailHeading').textContent=u.details; qs('#serviceDescription').textContent=c.desc; qs('#pricingHeading').textContent=u.pricing; qs('#includedHeading').textContent=u.included; qs('#backText').textContent=u.back; qs('#backText2').textContent=u.back;
    qs('#priceStack').innerHTML=c.prices.map(p=>`<div class="detail-price"><div><strong>${p[0]}</strong><small>${lang==='ar'?'السعر بعد الخصم':'Discounted price'}</small></div><div class="detail-price-values"><span class="detail-price-old">${p[1]}</span><span class="detail-price-new">${p[2]}</span></div></div>`).join('');
    qs('#includeGrid').innerHTML=c.includes.map(x=>`<div class="include-item"><span class="include-check">✓</span><span>${x}</span></div>`).join('');
    qs('#processKicker').textContent=u.process; qs('#processTitle').textContent=u.processTitle; qs('#processText').textContent=u.processText;
    [[u.p1,u.p1t],[u.p2,u.p2t],[u.p3,u.p3t]].forEach((p,i)=>{qs(`#processTitle${i+1}`).textContent=p[0];qs(`#processText${i+1}`).textContent=p[1]});
    qs('#ctaKicker').textContent=u.ctaK; qs('#ctaTitle').textContent=u.ctaT; qs('#ctaText').textContent=u.ctaP; qs('#ctaButtonText').textContent=u.ctaB; qs('#ctaButtonText2').textContent=u.ctaB;
    qs('#footerTag').textContent=u.footerTag; qs('#rightsText').textContent=u.rights;
    qsa('[data-nav]').forEach(el=>el.textContent=u[el.dataset.nav]);
    qsa('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang)); document.dispatchEvent(new CustomEvent('medico:language',{detail:{lang}}));
    wireVideoFallbacks();
  }

  qsa('.lang-btn').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;localStorage.setItem('medicoLang',lang);render()}));
  const themeBtn=qs('.theme-toggle'); if(themeBtn) themeBtn.setAttribute('aria-pressed',html.dataset.theme==='light'); themeBtn?.addEventListener('click',()=>{html.dataset.theme=html.dataset.theme==='light'?'dark':'light';localStorage.setItem('medicoTheme',html.dataset.theme);themeBtn.setAttribute('aria-pressed',html.dataset.theme==='light')});
  const menuBtn=qs('.menu-btn'), mobileNav=qs('#mobileNav'); menuBtn?.addEventListener('click',()=>{if(!mobileNav)return;const open=mobileNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)}); if(mobileNav) qsa('a',mobileNav).forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false')})); document.addEventListener('keydown',e=>{if(e.key==='Escape'){mobileNav?.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');window.medicoAgent?.close?.();}});
  {const media=qs('.detail-media');if(media && !service.heroVideo && matchMedia('(hover:hover) and (pointer:fine)').matches){media.addEventListener('pointermove',e=>{const r=media.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;media.style.transform=`perspective(900px) rotateY(${x*4}deg) rotateX(${-y*3}deg)`});media.addEventListener('pointerleave',()=>media.style.transform='')}}
  document.addEventListener('error',e=>{const img=e.target;if(img?.tagName==='IMG'&&!img.dataset.fallbackApplied){img.dataset.fallbackApplied='1';img.src='assets/mm-badge.webp';img.classList.add('image-fallback');}},true); if(qs('#year')) qs('#year').textContent=new Date().getFullYear(); render();
})();
