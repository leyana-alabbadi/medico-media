(() => {
  'use strict';

  const qs = (s, el=document) => el.querySelector(s);
  const qsa = (s, el=document) => [...el.querySelectorAll(s)];
  const html = document.documentElement;

  const translations = {
    ar:{
      skip:'تجاوز إلى المحتوى',
      'nav.home':'الرئيسية','nav.services':'خدماتنا','nav.work':'أعمالنا','nav.pricing':'الباقات والأسعار','nav.feedback':'آراء العملاء','nav.about':'من نحن','nav.contact':'تواصل معنا',
      'hero.eyebrow':'محتوى طبي بصري يصنع الفرق','hero.title':'نحوّل خبرتك الطبية<br>إلى <em>قصة بصرية مؤثرة</em>','hero.lead':'في ميديكو ميديا نصنع محتوى بصريًا وتسويقيًا للعيادات والمختصين في المجال الطبي؛ من التصوير والريلز إلى الإعلانات والموشن جرافيك، بأسلوب راقٍ يرفع حضور العيادة ويبني الثقة.','hero.start':'ابدأ الآن','hero.work':'شاهد أعمالنا','hero.trust1':'جودة احترافية','hero.trust2':'متخصصون بالمحتوى الطبي','hero.trust3':'محتوى قابل للتسويق','hero.card1':'تصوير احترافي','hero.card1s':'صور واضحة ومقنعة','hero.card2':'فيديو وموشن','hero.card2s':'محتوى قصير سريع','hero.stats':'فكرة محتوى قابلة للتنفيذ',
      'services.kicker':'خدماتنا','services.title':'كل ما تحتاجه عيادتك في مكان واحد','services.subtitle':'من جلسة التصوير إلى الريلز والموشن جرافيك — باقات واضحة وناتج بصري متناسق.',
      'work.kicker':'أعمالنا','work.title':'محتوى حقيقي بطابع طبي راقٍ','work.item1':'قبل / بعد','work.item2':'تصوير العيادة','work.item3':'إجراء طبي','work.item4':'مراجعة الحالة','work.item5':'نتيجة نهائية','work.item6':'موشن جرافيك طبي',
      'pricing.kicker':'الباقات والأسعار','pricing.title':'خيارات واضحة بدون تعقيد','pricing.subtitle':'الأسعار أدناه مأخوذة من عروض ميديكو ميديا المرفقة.','pricing.offer1':'العرض الأول','pricing.offer2':'العرض الثاني',
      'about.kicker':'من نحن','about.tagline':'عقول مبدعة • أثر صحي','about.title':'نحوّل الخبرة الطبية إلى <em>حضور يُرى ويُذكر</em>','about.p1':'في Medico Media، لا نصنع محتوى فقط؛ نبني حضورًا بصريًا يجعل العيادة تبدو بقدر جودة الخدمة التي تقدمها. نعمل كشريك إبداعي للعيادات والعلامات الصحية، ونحوّل الخبرة الطبية إلى قصة واضحة، راقية ومقنعة — من أول فكرة حتى آخر لقطة.','about.p2':'نجمع بين الاستراتيجية والإنتاج والهوية البصرية في تجربة واحدة متكاملة: تصوير احترافي، فيديو، موشن جرافيك، محتوى للحملات وتوجيه إبداعي يحافظ على ثقة الجمهور ويحترم طبيعة القطاع الصحي.','about.ctaServices':'استكشف خدماتنا','about.ctaTalk':'تحدث معنا عن عيادتك','about.badgeTitle':'شريكك الإبداعي','about.badgeText':'استراتيجية • إنتاج • هوية','about.card1Title':'تصوير وإنتاج احترافي','about.card1Text':'من التخطيط والتصوير إلى المونتاج، نصنع محتوى طبيًا واضحًا وراقيًا وجاهزًا للاستخدام التسويقي.','about.card2Title':'استراتيجية محتوى','about.card2Text':'نرتب الرسالة والأفكار وصيغة المحتوى لتخدم هدف العيادة وتبني تواصلًا أوضح مع جمهورها.','about.card3Title':'هوية بصرية وتسويق','about.card3Text':'نحافظ على حضور بصري متناسق عبر الصور والريلز والحملات ليظهر اسم العيادة بصورة احترافية يمكن تذكرها.',
      'feedback.kicker':'آراء العملاء','feedback.title':'شارك تجربتك مع ميديكو ميديا','feedback.subtitle':'هذا القسم تفاعلي — التقييمات تُضاف من المستخدمين بدل عرض آراء وهمية جاهزة.','feedback.name':'الاسم','feedback.clinic':'اسم العيادة (اختياري)','feedback.rating':'التقييم','feedback.review':'رأيك','feedback.submit':'نشر التقييم','feedback.count':'تقييم','feedback.namePh':'اسمك','feedback.clinicPh':'اسم العيادة','feedback.reviewPh':'اكتب تجربتك...',
      'cta.kicker':'جاهز للخطوة التالية؟','cta.title':'خلّ حضور عيادتك يترك انطباعًا من أول ثانية','cta.text':'احكِ لنا عن الخدمة التي تريد تسويقها وسنقترح نوع المحتوى الأنسب.','cta.button':'تواصل معنا الآن',
      'footer.tag':'محتوى بصري وتسويق للعيادات والمجال الطبي.','footer.links':'روابط','footer.contact':'تواصل','footer.rights':'جميع الحقوق محفوظة.','footer.privacy':'سياسة الخصوصية','footer.terms':'الشروط والأحكام','footer.cookies':'ملفات الارتباط','contact.kicker':'تواصل رسمي','contact.title':'احكِ لنا عن عيادتك والهدف الذي تريد الوصول له','contact.text':'أرسل التفاصيل، وسنراجعها ونرجع لك بالاتجاه الأنسب للمحتوى والخدمة المناسبة.','contact.name':'الاسم','contact.clinic':'اسم العيادة','contact.contact':'رقم الهاتف أو البريد','contact.specialty':'التخصص','contact.message':'كيف نقدر نساعدك؟','contact.consent':'أوافق على استخدام معلوماتي للرد على هذا الطلب وفق سياسة الخصوصية.','contact.submit':'إرسال الطلب',
      'ai.title':'مستشار ميديكو الذكي','ai.online':'متاح لمساعدتك','ai.q1':'الخدمات','ai.q2':'الأسعار','ai.q3':'الحجز','ai.placeholder':'اكتب سؤالك...',
      'review.none':'لا توجد تقييمات بعد','review.beFirst':'كن أول شخص يشارك تجربته.','review.saved':'تم إرسال تقييمك للمراجعة ✓','review.ratingRequired':'اختاري التقييم بالنجوم أولًا.','review.invalid':'تأكدي من الاسم والتعليق ثم حاولي مرة أخرى.',
      'ai.welcome':'مرحبًا 👋 أنا مساعد ميديكو. أقدر أساعدك بالخدمات، الأسعار أو طريقة طلب عرض سعر.','ai.services':'خدماتنا تشمل تصوير العيادة، إعلان الحالة قبل/بعد، إعلان الإجراء، مراجعة الحالة، الموشن جرافيك والباقات الاقتصادية.','ai.prices':'الأسعار تبدأ من 25,000 لإعلان الحالة، 50,000 للموشن جرافيك، و125,000 لإعلان الإجراء. العرض الاقتصادي 450,000.','ai.booking':'لطلب الخدمة بسرعة، استخدم زر تواصل معنا وسيفتح واتساب مباشرة.','ai.fallback':'أقدر أساعدك أكثر إذا سألت عن: التصوير، إعلان الحالة، الموشن، الأسعار أو الحجز.'
    },
    en:{
      skip:'Skip to content',
      'nav.home':'Home','nav.services':'Services','nav.work':'Work','nav.pricing':'Packages & Pricing','nav.feedback':'Client Feedback','nav.about':'About','nav.contact':'Contact us',
      'hero.eyebrow':'Medical visual content that makes a difference','hero.title':'We turn your medical expertise<br>into an <em>impactful visual story</em>','hero.lead':'At Medico Media, we create visual and marketing content for clinics and medical professionals — from photography and reels to procedure ads and motion graphics — built to strengthen presence and trust.','hero.start':'Start now','hero.work':'View our work','hero.trust1':'Professional quality','hero.trust2':'Medical-content focused','hero.trust3':'Marketing-ready content','hero.card1':'Professional photography','hero.card1s':'Clear, persuasive visuals','hero.card2':'Video & motion','hero.card2s':'Short-form content','hero.stats':'actionable content ideas',
      'services.kicker':'Our services','services.title':'Everything your clinic needs in one place','services.subtitle':'From photography sessions to reels and motion graphics — clear packages and a consistent visual result.',
      'work.kicker':'Our work','work.title':'Real content with a premium medical feel','work.item1':'Before / After','work.item2':'Clinic photography','work.item3':'Procedure ad','work.item4':'Case Review','work.item5':'Final result','work.item6':'Medical motion graphic',
      'pricing.kicker':'Packages & Pricing','pricing.title':'Clear options without the complexity','pricing.subtitle':'The prices below are taken from the Medico Media offer sheets you provided.','pricing.offer1':'Offer one','pricing.offer2':'Offer two',
      'about.kicker':'About us','about.tagline':'Creative minds • Healthy impact','about.title':'We turn medical expertise into a <em>presence people notice and remember</em>','about.p1':'At Medico Media, we do more than create content; we build a visual presence that helps clinics look as professional as the care they provide. We partner with clinics and healthcare brands to turn medical expertise into clear, refined and compelling stories — from the first idea to the final frame.','about.p2':'We bring strategy, production and visual identity together in one coherent experience: professional photography, video, motion graphics, campaign content and creative direction built for trusted healthcare communication.','about.ctaServices':'Explore our services','about.ctaTalk':'Talk to us about your clinic','about.badgeTitle':'Your creative partner','about.badgeText':'Strategy • Production • Identity','about.card1Title':'Professional Production','about.card1Text':'From planning and shooting to the final edit, we create polished medical content ready for real marketing use.','about.card2Title':'Content Strategy','about.card2Text':'We shape the message, ideas and format around your clinic’s goals so the content communicates clearly with the right audience.','about.card3Title':'Visual Branding & Marketing','about.card3Text':'We keep your visual presence consistent across photography, reels and campaigns so your clinic feels professional and memorable.',
      'feedback.kicker':'Client feedback','feedback.title':'Share your experience with Medico Media','feedback.subtitle':'This section is interactive — reviews are added by users instead of showing pre-written fake testimonials.','feedback.name':'Name','feedback.clinic':'Clinic name (optional)','feedback.rating':'Rating','feedback.review':'Your review','feedback.submit':'Publish review','feedback.count':'reviews','feedback.namePh':'Your name','feedback.clinicPh':'Clinic name','feedback.reviewPh':'Write about your experience...',
      'cta.kicker':'Ready for the next step?','cta.title':'Make your clinic leave an impression from the first second','cta.text':'Tell us what you want to promote and we’ll help you choose the right content format.','cta.button':'Contact us now',
      'footer.tag':'Visual content and marketing for clinics and medical professionals.','footer.links':'Links','footer.contact':'Contact','footer.rights':'All rights reserved.','footer.privacy':'Privacy Policy','footer.terms':'Terms & Conditions','footer.cookies':'Cookies','contact.kicker':'Official contact','contact.title':'Tell us about your clinic and what you want to achieve','contact.text':'Send the details and we’ll review them and recommend the most suitable content direction and service.','contact.name':'Name','contact.clinic':'Clinic name','contact.contact':'Phone or email','contact.specialty':'Specialty','contact.message':'How can we help?','contact.consent':'I agree to the use of my information to respond to this request under the Privacy Policy.','contact.submit':'Send request',
      'ai.title':'Medico Smart Consultant','ai.online':'Here to help','ai.q1':'Services','ai.q2':'Pricing','ai.q3':'Booking','ai.placeholder':'Type your question...',
      'review.none':'No reviews yet','review.beFirst':'Be the first to share your experience.','review.saved':'Your review was submitted for moderation ✓','review.ratingRequired':'Please select a star rating first.','review.invalid':'Check your name and review, then try again.',
      'ai.welcome':'Hi 👋 I’m the Medico assistant. I can help with services, pricing or requesting a quote.','ai.services':'Our services include clinic photography, before/after case ads, procedure ads, case review, motion graphics and economic packages.','ai.prices':'Pricing starts at 25,000 for a case ad, 50,000 for motion graphics, and 125,000 for a procedure ad. The economic package is 450,000.','ai.booking':'For the fastest booking flow, use the Contact us button and WhatsApp will open directly.','ai.fallback':'I can help more if you ask about photography, case ads, motion graphics, pricing or booking.'
    }
  };

const services = [
  {slug:'dental-photography',img:'assets/media/hero-smile.webp', ar:['تصوير احترافي للعيادة','مكتبة بصرية للعيادة والفريق والخدمات والنتائج','200,000'], en:['Clinic Photography','A visual library for the clinic, team, services and results','200,000'], old:'250,000', badgeAr:'الأكثر طلبًا',badgeEn:'Popular'},
  {slug:'case-ad',img:'assets/media/user-before-after.JPG', ar:['توثيق الحالة قبل / بعد','عرض النتيجة بشكل واضح واحترافي','25,000'], en:['Before & After Documentation','Clear, professional case-result presentation','25,000'], old:'35,000'},
  {slug:'procedure-ad',img:'assets/media/procedure-poster.webp', ar:['إعلان إجراء طبي','فكرة + تصوير + مونتاج لإجراء أو خدمة محددة','125,000'], en:['Medical Procedure Ad','Concept, filming and edit for one procedure or service','125,000'], old:'150,000'},
  {slug:'case-review',img:'assets/media/case-review-poster.webp', ar:['مراجعة الحالة','شرح الطبيب أو المختص بأسلوب يبني الثقة','100,000'], en:['Case Review','Doctor-led content designed to build trust','100,000'], old:'150,000'},
  {slug:'motion-graphic',img:'assets/media/medical-motion-poster.webp', ar:['موشن جرافيك طبي','شرح بصري متحرك للخدمات والمعلومات الطبية','50,000'], en:['Medical Motion Graphic','Animated visual explanation for medical services and information','50,000'], old:'75,000'},
  {slug:'economic-offer',img:'assets/media/economic-offer.webp', ar:['العرض الاقتصادي','12 يوم ستوري + 4 ريلز + 4 حالات تصوير / توثيق','450,000'], en:['Economic Offer','12 story days + 4 reels + 4 case documentation sets','450,000'], old:'600,000', badgeAr:'باقة شهرية',badgeEn:'Monthly'}
];

const prices = [
  {ar:['توثيق الحالة — قبل أو بعد فقط','نسخة واحدة للحالة','25,000'],en:['Case documentation — before or after','One case version','25,000'],old:'35,000'},
  {ar:['توثيق الحالة — قبل + بعد','مقارنة كاملة وواضحة','35,000'],en:['Case documentation — before + after','Complete comparison version','35,000'],old:'50,000'},
  {ar:['موشن جرافيك — بدون تصوير','شرح بصري متحرك','50,000'],en:['Motion graphic — without photography','Animated visual explanation','50,000'],old:'75,000'},
  {ar:['موشن جرافيك — مع تصوير','موشن مع تصوير الحالة أو الخدمة','75,000'],en:['Motion graphic — with photography','Motion plus service/case photography','75,000'],old:'100,000'},
  {ar:['مراجعة الحالة','الباقة الاحترافية','100,000'],en:['Case Review','Professional package','100,000'],old:'150,000'},
  {ar:['إعلان إجراء طبي','فكرة + تصوير + مونتاج','125,000'],en:['Medical procedure ad','Concept + filming + edit','125,000'],old:'150,000'},
  {ar:['تصوير احترافي للعيادة','جلسة تصوير وهوية بصرية','200,000'],en:['Clinic photography','Photography & visual identity session','200,000'],old:'250,000'},
  {ar:['العرض الاقتصادي','12 يوم + 4 ريلز + 4 حالات توثيق','450,000'],en:['Economic offer','12 story days + 4 reels + 4 case sets','450,000'],old:'600,000'}
];

  let lang = localStorage.getItem('medicoLang') || 'ar';
  let selectedRating = 0;

  function t(key){ return translations[lang][key] ?? key; }

  function applyLanguage(next){
    lang = next;
    localStorage.setItem('medicoLang', lang);
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    qsa('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
    qsa('[data-i18n-html]').forEach(el => el.innerHTML = t(el.dataset.i18nHtml));
    qsa('[data-i18n-placeholder]').forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
    qsa('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    renderServices(); renderPrices(); renderReviews(); refreshAiLabels();
  }

  qsa('.lang-btn').forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));

  const savedTheme = localStorage.getItem('medicoTheme');
  if(savedTheme) html.dataset.theme = savedTheme;
  const themeBtn = qs('.theme-toggle');
  if(themeBtn) themeBtn.setAttribute('aria-pressed', html.dataset.theme === 'light');
  themeBtn?.addEventListener('click', () => {
    html.dataset.theme = html.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('medicoTheme', html.dataset.theme);
    themeBtn.setAttribute('aria-pressed', html.dataset.theme === 'light');
  });

  const menuBtn = qs('.menu-btn'), mobileNav = qs('#mobileNav');
  menuBtn?.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  if(mobileNav) qsa('a', mobileNav).forEach(a => a.addEventListener('click', () => { mobileNav.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); }));
  document.addEventListener('keydown', e => { if(e.key === 'Escape'){ mobileNav.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); window.medicoAgent?.close?.(); }});

  function renderServices(){
    const grid = qs('#serviceGrid');
    grid.innerHTML = services.map((s,i) => {
      const c = lang === 'ar' ? s.ar : s.en;
      const badge = lang === 'ar' ? s.badgeAr : s.badgeEn;
      return `<a class="service-card reveal visible" href="${s.slug}.html" aria-label="${c[0]}">
        <div class="service-card-media"><img loading="lazy" decoding="async" src="${s.img}" alt="${c[0]}"><span class="service-number">0${i+1}</span>${badge?`<span class="service-badge">${badge}</span>`:''}</div>
        <div class="service-card-body"><h3>${c[0]}</h3><p>${c[1]}</p><div class="price-row"><div><small>${lang==='ar'?'السعر الحالي':'Current price'}</small><strong>${c[2]}</strong>${s.old?` <span class="price-old">${s.old}</span>`:''}</div><span class="mini-arrow" aria-hidden="true">→</span></div></div>
      </a>`;
    }).join('');
  }

  function renderPrices(){
    const list = qs('#priceList');
    list.innerHTML = prices.map((p,i) => {
      const c = lang === 'ar' ? p.ar : p.en;
      return `<article class="price-item"><span class="price-index">${String(i+1).padStart(2,'0')}</span><div class="price-copy"><h3>${c[0]}</h3><p>${c[1]}</p></div><div class="price-values"><span class="price-old">${p.old}</span><span class="price-new">${c[2]}</span></div></article>`;
    }).join('');
  }

  qsa('.offer-tab').forEach(btn => btn.addEventListener('click', () => {
    qsa('.offer-tab').forEach(b => b.classList.remove('active')); btn.classList.add('active');
    qs('#offerImage').src = btn.dataset.offer === '0' ? 'assets/offers-01.webp' : 'assets/offers-02.webp';
  }));

  const strip = qs('#filmStrip');
  qs('[data-gallery-prev]')?.addEventListener('click', () => strip?.scrollBy({left: lang==='ar'?360:-360, behavior:'smooth'}));
  qs('[data-gallery-next]')?.addEventListener('click', () => strip?.scrollBy({left: lang==='ar'?-360:360, behavior:'smooth'}));

  // 3D hero / service interaction — pointer devices only.
  const heroVisual = qs('#heroVisual');
  if(heroVisual && matchMedia('(hover:hover) and (pointer:fine)').matches){
    heroVisual.addEventListener('pointermove', e => {
      const r = heroVisual.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-.5; const y=(e.clientY-r.top)/r.height-.5;
      heroVisual.style.transform = `rotateY(${x*5}deg) rotateX(${-y*4}deg)`;
    });
    heroVisual.addEventListener('pointerleave', () => heroVisual.style.transform='');
  }


// Reviews: shared backend when configured, local preview fallback when running as a plain file.
const STORE = 'medicoRealReviewsV2';
const stars = qsa('#reviewStars button');
let reviewsCache=[];
stars.forEach(btn => btn.addEventListener('click', () => { selectedRating = Number(btn.dataset.rating); stars.forEach(b => b.classList.toggle('active', Number(b.dataset.rating) <= selectedRating)); }));
const getLocalReviews = () => { try{ return JSON.parse(localStorage.getItem(STORE) || '[]'); } catch { return []; } };
const setLocalReviews = v => localStorage.setItem(STORE, JSON.stringify(v.slice(0,40)));
const escapeHtml = s => String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
function initials(name){ return name.trim().split(/\s+/).slice(0,2).map(x=>x[0]||'').join('').toUpperCase(); }
function renderReviews(reviews=reviewsCache){
  const list = qs('#reviewsList'); reviewsCache=reviews||[]; qs('#reviewCount').textContent = reviewsCache.length;
  if(!reviewsCache.length){ qs('#reviewAverage').textContent='—'; qs('#summaryStars').textContent='☆☆☆☆☆'; list.innerHTML=`<div class="empty-reviews"><div><div class="empty-symbol">✦</div><strong>${t('review.none')}</strong><span>${t('review.beFirst')}</span></div></div>`; return; }
  const avg = reviewsCache.reduce((sum,r)=>sum+Number(r.rating||0),0)/reviewsCache.length; qs('#reviewAverage').textContent=avg.toFixed(1); qs('#summaryStars').textContent='★★★★★'.slice(0,Math.round(avg))+'☆☆☆☆☆'.slice(Math.round(avg));
  list.innerHTML = reviewsCache.map(r => `<article class="review-card"><div class="review-top"><div class="review-person"><span class="review-avatar">${escapeHtml(initials(r.name||'M'))}</span><div><strong>${escapeHtml(r.name||'')}</strong><small>${escapeHtml(r.clinic || '')}${r.clinic?' • ':''}${new Date(r.date||r.created_at||Date.now()).toLocaleDateString(lang==='ar'?'ar-JO':'en-US')}</small></div></div><span class="review-stars">${'★★★★★'.slice(0,Number(r.rating||0))}${'☆☆☆☆☆'.slice(Number(r.rating||0))}</span></div><p>${escapeHtml(r.text||r.review||'')}</p></article>`).join('');
}
async function loadReviews(){
  if(location.protocol==='file:'){ reviewsCache=getLocalReviews(); renderReviews(); return; }
  try{
    const res=await fetch('/api/reviews',{headers:{'Accept':'application/json'}});
    if(!res.ok) throw new Error('reviews unavailable');
    const data=await res.json(); reviewsCache=Array.isArray(data.reviews)?data.reviews:[]; renderReviews();
  }catch{ reviewsCache=getLocalReviews(); renderReviews(); }
}
qs('#feedbackForm')?.addEventListener('submit', async e => {
  e.preventDefault(); const name=qs('#reviewName').value.trim(), clinic=qs('#reviewClinic').value.trim(), text=qs('#reviewText').value.trim(), status=qs('#reviewStatus');
  if(!selectedRating){ status.textContent=t('review.ratingRequired'); return; }
  if(name.length<2 || text.length<10){ status.textContent=t('review.invalid'); return; }
  const payload={name:name.slice(0,40),clinic:clinic.slice(0,60),text:text.slice(0,500),rating:selectedRating};
  try{
    if(location.protocol==='file:') throw new Error('local preview');
    const res=await fetch('/api/reviews',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(!res.ok) throw new Error('review submit failed');
    e.target.reset(); selectedRating=0; stars.forEach(b=>b.classList.remove('active')); status.textContent=t('review.saved');
  }catch{
    const local=getLocalReviews(); local.unshift({...payload,date:new Date().toISOString()}); setLocalReviews(local); reviewsCache=local; renderReviews(); e.target.reset(); selectedRating=0; stars.forEach(b=>b.classList.remove('active')); status.textContent=lang==='ar'?'وضع المعاينة: تم حفظ التقييم على هذا الجهاز فقط.':'Preview mode: review saved on this device only.';
  }
  setTimeout(()=>status.textContent='',4500);
});
loadReviews();

  // AI assistant is handled by shared ai-agent.js.
  function refreshAiLabels(){
    document.dispatchEvent(new CustomEvent('medico:language',{detail:{lang}}));
  }

  // Reveal observer.
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobilePerformance = matchMedia('(max-width:1024px), (hover:none), (pointer:coarse)').matches;
  if(reduced || mobilePerformance) qsa('.reveal').forEach(x=>x.classList.add('visible')); else {
    const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } }), {threshold:.12});
    qsa('.reveal').forEach(x=>io.observe(x));
  }

  document.addEventListener('error', e => {
    const img=e.target;
    if(img?.tagName==='IMG' && !img.dataset.fallbackApplied){
      img.dataset.fallbackApplied='1';
      img.src='assets/mm-badge.webp';
      img.classList.add('image-fallback');
    }
  }, true);

  if(qs('#year')) qs('#year').textContent = new Date().getFullYear();
  applyLanguage(lang);
})();
