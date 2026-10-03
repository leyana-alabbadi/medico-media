(() => {
  'use strict';

  const qs = (s, el=document) => el.querySelector(s);
  const html = document.documentElement;
  const WA = 'https://wa.me/9627710186661';

  const SERVICES = [
    {
      slug:'dental-photography', min:200000, max:200000, oldMin:250000,
      goals:['brand','visual','library','website'], frequency:'oneoff',
      ar:{name:'تصوير احترافي للعيادة',desc:'تصوير بصري متكامل للعيادة والفريق والخدمات والنتائج.',price:'200,000',badge:'Drone + Interior',includes:['لقطات درون لواجهة العيادة','تصوير داخلي كامل مع إضاءة احترافية','معالجة وتصحيح ألوان','معرض صور نهائي بدقة عالية','تسليم مناسب للويب والسوشال ميديا','جولة تعديل واحدة'],keywords:['تصوير العيادة','تصوير','صور','درون','داخلي','خارجي','هوية','موقع','clinic','photo','photography','drone','interior','exterior','branding']},
      en:{name:'Professional Clinic Photography',desc:'A polished visual library for the clinic, team, services and results.',price:'200,000',badge:'Drone + Interior',includes:['Drone exterior shots','Full interior photography','Professional retouching and color correction','High-resolution final gallery','Web and social-ready exports','One revision round'],keywords:['clinic photography','photo','photography','drone','interior','exterior','brand','website']}
    },
    {
      slug:'case-ad', min:25000, max:35000, oldMin:35000,
      goals:['proof','results','beforeafter'], frequency:'oneoff',
      ar:{name:'توثيق الحالة قبل / بعد',desc:'عرض واضح لنتيجة الحالة قبل وبعد، مناسب للنشر والإعلانات عند ملاءمته طبيًا.',price:'25,000–35,000',badge:'Before / After',includes:['تصوير مباشر داخل العيادة','تنسيق قبل / بعد','تحرير وتصحيح ألوان','جاهز للنشر','مقاسات مناسبة للسوشال ميديا','جولة تعديل واحدة'],keywords:['قبل وبعد','قبل','بعد','حالة','نتيجة','تحول','case','before','after','before after','result','transformation']},
      en:{name:'Before & After Documentation',desc:'Clear before-and-after case-result documentation for social media and ads when appropriate.',price:'25,000–35,000',badge:'Before / After',includes:['On-site shooting','Clean before/after composition','Professional edit and color correction','Ready-to-publish delivery','Social-friendly formats','One revision round'],keywords:['case','before','after','before after','result','transformation']}
    },
    {
      slug:'procedure-ad', min:125000, max:125000, oldMin:150000,
      goals:['bookings','leads','sales','procedure'], frequency:'campaign',
      ar:{name:'إعلان لإجراء طبي',desc:'فيديو تسويقي لإجراء محدد مع فكرة وسيناريو وتصوير ومونتاج.',price:'125,000',badge:'Professional',includes:['سيناريو لإجراء واحد','تصوير احترافي داخل العيادة','مونتاج وتصحيح ألوان وصوت','دعوة واضحة للتواصل','نسخة مناسبة للإعلانات والسوشال','جولة تعديل واحدة'],keywords:['إجراء','عملية','اعلان اجراء','إعلان إجراء','حجوزات','استفسارات','مرضى','procedure','procedure ad','treatment ad','treatment','booking','leads']},
      en:{name:'Medical Procedure Ad',desc:'A focused medical-service ad with concept, script, filming and editing.',price:'125,000',badge:'Professional',includes:['Focused script for one treatment','Professional on-site filming','Editing, color and audio polish','Clear call to action','Ad and social-ready version','One revision round'],keywords:['procedure','procedure ad','treatment','treatment ad','bookings','leads','inquiries']}
    },
    {
      slug:'case-review', min:100000, max:100000, oldMin:150000,
      goals:['trust','authority','education','doctor'], frequency:'campaign',
      ar:{name:'مراجعة الحالة',desc:'الطبيب أو المختص يشرح حالة أو فكرة طبية بأسلوب إنساني يبني الثقة.',price:'100,000',badge:'محتوى يقوده الطبيب',includes:['توجيه أمام الكاميرا','دعم في كتابة السيناريو','تصوير احترافي','مونتاج كامل للحالة والنتيجة','ترجمة نصية داخل الفيديو','جولة تعديل واحدة'],keywords:['سرد','قصة','شرح الطبيب','عرض الحالة','ثقة','طبيب','story','storytelling','case presentation','doctor','trust']},
      en:{name:'Case Review',desc:'Doctor- or specialist-led case or educational content designed to build trust.',price:'100,000',badge:'Case Presentation',includes:['Camera guidance','Script support','Professional filming','Full case/result edit','On-screen subtitles','One revision round'],keywords:['story','storytelling','case presentation','doctor explains','trust','authority']}
    },
    {
      slug:'motion-graphic', min:50000, max:75000, oldMin:75000,
      goals:['education','explain','3d','complex'], frequency:'oneoff',
      ar:{name:'موشن جرافيك طبي',desc:'شرح بصري متحرك 2D/3D للإجراءات والحالات الطبية.',price:'50,000–75,000',badge:'2D / 3D Visual',includes:['تحريك مخصص للحالة أو الخدمة','إمكانية عناصر ثلاثية الأبعاد','ألوان متوافقة مع الهوية','مخرجات للسوشال ميديا','شرح بصري سريع وواضح','جولة تعديل واحدة'],keywords:['موشن','موشن جرافيك','ثري دي','3d','شرح','تعليمي','motion','motion graphic','animation','animated','explainer']},
      en:{name:'Medical Motion Graphics',desc:'2D/3D animated visuals that simplify medical services, procedures and information.',price:'50,000–75,000',badge:'2D / 3D Visual',includes:['Custom animation','Optional 3D-style elements','Brand-aligned colors','Social-ready exports','Clear visual explanation','One revision round'],keywords:['motion','motion graphic','3d','animation','animated','explainer','education']}
    },
    {
      slug:'economic-offer', min:450000, max:450000, oldMin:600000,
      goals:['monthly','consistency','content','social'], frequency:'monthly',
      ar:{name:'العرض الاقتصادي',desc:'باقة شهرية: 12 يوم ستوري + 4 ريلز + 4 حالات تصوير / توثيق.',price:'450,000',badge:'Monthly Content',includes:['12 يوم محتوى ستوري','4 ريلز قصيرة','4 حالات تصوير / توثيق طبي','أسلوب بصري موحد','مخرجات جاهزة للنشر','تنظيم شهري للمحتوى'],keywords:['اقتصادي','باقة','شهري','ستوري','ريلز','ميزانية','محتوى مستمر','economic','package','monthly','stories','reels','budget','content']},
      en:{name:'Economic Content Offer',desc:'Monthly package: 12 story days + 4 reels + 4 case documentation sets.',price:'450,000',badge:'Monthly Content',includes:['12 story-content days','4 short reels','4 medical case documentation sets','Consistent visual direction','Ready-to-publish assets','Monthly organization'],keywords:['economic','package','monthly','stories','reels','budget','content','consistent']}
    }
  ];


const SPECIALTIES = [
  {id:'dental',ar:'أسنان',en:'Dental',keywords:['اسنان','أسنان','dentist','dental','orthodont','implant']},
  {id:'dermatology',ar:'جلدية وتجميل',en:'Dermatology / Aesthetics',keywords:['جلديه','جلدية','بشره','بشرة','تجميل','ليزر','dermatology','skin','aesthetic','laser','cosmetic']},
  {id:'ophthalmology',ar:'عيون',en:'Ophthalmology',keywords:['عيون','نظر','ليزك','ophthalm','eye','lasik']},
  {id:'gynecology',ar:'نسائية',en:'Gynecology',keywords:['نسائيه','نسائية','نسوان','حمل','gynecology','women clinic','obgyn']},
  {id:'pediatrics',ar:'أطفال',en:'Pediatrics',keywords:['اطفال','أطفال','pediatric','children clinic']},
  {id:'physio',ar:'علاج طبيعي',en:'Physiotherapy',keywords:['علاج طبيعي','فيزيو','physio','physiotherapy','rehab','rehabilitation']},
  {id:'nutrition',ar:'تغذية',en:'Nutrition',keywords:['تغذيه','تغذية','دايت','nutrition','dietitian','diet']},
  {id:'general',ar:'عيادة طبية',en:'Medical clinic',keywords:['عياده','عيادة','طبي','medical clinic','clinic']}
];

  const COPY = {
    ar:{
      title:'مستشار ميديكو الذكي',online:'يفهم تخصصك • هدفك • ميزانيتك',placeholder:'احكيلي عن عيادتك أو اسألني عن الخدمات والأسعار...',
      welcome:'أهلًا وسهلًا 👋 أنا مستشار ميديكو الذكي. أساعدك تفهم خدمات Medico Media، تختار المحتوى الأنسب لتخصص عيادتك وهدفك، تعرف الأسعار والتفاصيل، وتبني خطة محتوى واضحة بدون تعقيد.',
      quick:['ساعدني أختار','أفكار محتوى','الأسعار','شو الأرخص؟','بدي زيادة حجوزات'],
      allServices:'عنا 6 خدمات رئيسية للعيادات والمجال الطبي: تصوير العيادة، توثيق قبل/بعد، إعلان إجراء طبي، مراجعة الحالة، موشن جرافيك طبي، وباقة محتوى شهرية. احكيلي تخصص عيادتك وهدفك وأنا أرتب لك الأنسب.',
      askGoal:'خليني أعمل لك ترشيح أدق. شو هدفك الأساسي الآن؟',
      askBudget:'ممتاز. تقريبًا شو الميزانية اللي حاب تخصصها لهالقطعة أو الباقة؟',
      askFrequency:'هل بدك محتوى لمرة واحدة ولا حضور شهري مستمر؟',
      prices:'الأسعار الحالية بالموقع: إعلان الحالة 25,000–35,000، موشن جرافيك 50,000–75,000، سرد الحالة 100,000، إعلان الإجراء 125,000، تصوير العيادة 200,000، والعرض الاقتصادي 450,000.',
      booking:'أكيد. زر التواصل يفتح واتساب مباشرة. وإذا بدك، أعطيك قبلها توصية دقيقة حسب هدفك.',
      unknown:'أنا متخصص فقط بخدمات Medico Media والمحتوى التسويقي للعيادات. احكيلي تخصص العيادة وهدفك — مثل زيادة الحجوزات، بناء الثقة، شرح خدمة، إبراز النتائج أو محتوى شهري — وأنا أساعدك خطوة بخطوة.',
      recommendation:'حسب هدفك، هذا أقوى ترشيح عندي:',
      compare:'المقارنة الأقرب لطلبك:',
      open:'عرض التفاصيل',contact:'تواصل واتساب',all:'كل الخدمات',pricing:'الأسعار',
      consultant:'كمستشار محتوى، أنصحك تبدأ بالخدمة اللي تحل الهدف الحالي أولًا بدل اختيار الخدمة حسب الشكل فقط.',
      cheaper:'أقل سعر حاليًا هو إعلان الحالة قبل/بعد ويبدأ من 25,000.',
      expensive:'أعلى باقة حالية هي العرض الاقتصادي بسعر 450,000 لأنها باقة شهرية متعددة المخرجات.',
      noTiming:'مدة التسليم غير محددة بدقة في بيانات الموقع الحالية. الأفضل تأكيدها عبر واتساب قبل الحجز.',
      noCurrency:'العملة غير موضحة في بيانات الموقع الحالية، لذلك أعرض الأرقام كما هي بدون افتراض عملة.',
      askSpecialty:'حتى أعطيك اقتراح أذكى، شو تخصص العيادة؟',
      whatWeDo:'Medico Media وكالة محتوى بصري وتسويقي للعيادات والمختصين: نصوّر، ننتج ريلز وإعلانات إجراءات، نوثّق الحالات، ننتج محتوى مراجعة الحالة، نصمم Motion Graphics ونرتب باقات شهرية.',
      medicalBoundary:'أنا مستشار محتوى وتسويق داخل Medico Media، مش جهة تشخيص طبي. ما بقدر أشخّص أعراض أو أوصي بأدوية، لكن أقدر أساعدك كيف تشرح خدمتك أو معلومة طبية بشكل مسؤول وواضح للجمهور.',
      thanks:'على الرحب والسعة 🤍 إذا بدك، احكيلي تخصص عيادتك وهدفك وأنا أكمل معك من هون.',
      bye:'يسعدنا تواصلك 🤍 لما تحتاج أي مساعدة بالمحتوى أو اختيار الخدمة، أنا موجود.'
    },
    en:{
      title:'Medico Smart Consultant',online:'Specialty • goal • budget aware',placeholder:'Tell me about your clinic or ask about services and pricing...',
      welcome:'Hi 👋 I’m the Medico smart consultant. I can explain Medico Media services, match content to your clinic specialty and goal, clarify pricing and details, and help you build a clear content direction.',
      quick:['Help me choose','Content ideas','Prices','Cheapest option','I want more bookings'],
      allServices:'We have 6 core services for clinics and medical professionals: clinic photography, before/after documentation, procedure ads, Case Review, medical motion graphics and a monthly content package. Tell me your specialty and goal and I’ll narrow it down.',
      askGoal:'Let’s make the recommendation more accurate. What is your main goal right now?',
      askBudget:'Great. Roughly what budget do you want to allocate for this piece or package?',
      askFrequency:'Do you need a one-off piece of content or an ongoing monthly presence?',
      prices:'Current website prices: Case Ad 25,000–35,000; Motion Graphics 50,000–75,000; Case Review 100,000; Procedure Ad 125,000; Clinic Photography 200,000; Economic Offer 450,000.',
      booking:'Sure. The contact button opens WhatsApp directly. I can also recommend the right service before you book.',
      unknown:'I stay focused on Medico Media and clinic marketing. Tell me your clinic specialty and goal — more bookings, trust, education, result documentation or monthly content — and I’ll guide you step by step.',
      recommendation:'Based on your goal, my strongest recommendation is:',
      compare:'The closest comparison for your request:',
      open:'View details',contact:'WhatsApp',all:'All services',pricing:'Prices',
      consultant:'As a content consultant, I’d start with the service that solves your current business goal rather than choosing by visuals alone.',
      cheaper:'The lowest current price is the Before & After Case Ad, starting at 25,000.',
      expensive:'The highest current package is the Economic Offer at 450,000 because it includes multiple monthly deliverables.',
      noTiming:'The website does not specify an exact delivery timeline. Confirm timing on WhatsApp before booking.',
      noCurrency:'The website does not state the currency, so I show the numbers exactly as listed without assuming one.',
      askSpecialty:'To make the recommendation smarter, what is your clinic specialty?',
      whatWeDo:'Medico Media is a visual-content and marketing studio for clinics and medical professionals: photography, reels, procedure ads, case documentation, Case Review, Motion Graphics and monthly content packages.',
      medicalBoundary:'I’m a Medico Media content and marketing consultant, not a medical diagnosis service. I can’t diagnose symptoms or recommend medication, but I can help you communicate medical services or educational information responsibly.',
      thanks:'You’re very welcome 🤍 Tell me your clinic specialty and goal if you want me to keep narrowing the best content direction.',
      bye:'Glad to help 🤍 Whenever you need support choosing or planning Medico Media content, I’m here.'
    }
  };

  const state = {
    lastService:null,
    lastIntent:null,
    advisor:false,
    goal:null,
    budget:null,
    frequency:null,
    shortlist:[],
    specialty:null
  };

  let lang = localStorage.getItem('medicoLang') || html.lang || 'ar';
  let panel, fab, messages, input, form, quick, closeBtn, titleEl, onlineEl;

  function c(){ return COPY[lang] || COPY.ar; }
  function d(service){ return service?.[lang] || service?.ar; }
  function normalize(s){
    return String(s||'').toLowerCase()
      .normalize('NFKD')
      .replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').replace(/ؤ/g,'و').replace(/ئ/g,'ي')
      .replace(/[ًٌٍَُِّْـ]/g,'')
      .replace(/[^a-z0-9\u0600-\u06ff\s+.-]/g,' ')
      .replace(/\s+/g,' ').trim();
  }
  function tokens(s){ return normalize(s).split(' ').filter(x=>x.length>1); }
  function uniq(arr){ return [...new Set(arr)]; }

  function levenshtein(a,b){
    a=normalize(a); b=normalize(b);
    if(!a) return b.length; if(!b) return a.length;
    const row=Array.from({length:b.length+1},(_,i)=>i);
    for(let i=1;i<=a.length;i++){
      let prev=row[0]; row[0]=i;
      for(let j=1;j<=b.length;j++){
        const tmp=row[j];
        row[j]=Math.min(row[j]+1,row[j-1]+1,prev+(a[i-1]===b[j-1]?0:1));
        prev=tmp;
      }
    }
    return row[b.length];
  }

  function similar(a,b){
    a=normalize(a); b=normalize(b);
    if(a===b) return 1;
    if(a.includes(b)||b.includes(a)) return .9;
    const max=Math.max(a.length,b.length)||1;
    return 1-(levenshtein(a,b)/max);
  }

  function ensureUI(){
    fab = qs('#aiFab'); panel = qs('#aiPanel');
    if(!fab){
      fab=document.createElement('button'); fab.className='ai-fab'; fab.id='aiFab'; fab.type='button';
      fab.setAttribute('aria-expanded','false'); fab.setAttribute('aria-label','Open Medico consultant');
      fab.innerHTML='<span class="bot-face">✦</span><span class="ai-ping"></span>'; document.body.appendChild(fab);
    }
    if(!panel){
      panel=document.createElement('section'); panel.className='ai-panel'; panel.id='aiPanel'; panel.setAttribute('aria-hidden','true');
      panel.innerHTML=`<header><div class="ai-title"><img src="assets/mm-badge.webp" alt=""><div><strong data-ai-title></strong><small><span class="online-dot"></span><span data-ai-online></span></small></div></div><button type="button" id="aiClose" aria-label="Close">×</button></header><div class="ai-messages" id="aiMessages" aria-live="polite"></div><div class="ai-quick" id="aiQuick"></div><form class="ai-form" id="aiForm"><input id="aiInput" autocomplete="off"><button type="submit" aria-label="Send">➤</button></form>`;
      document.body.appendChild(panel);
    }
    messages=qs('#aiMessages'); input=qs('#aiInput'); form=qs('#aiForm'); quick=qs('#aiQuick'); closeBtn=qs('#aiClose'); titleEl=qs('[data-ai-title]',panel)||qs('.ai-title strong',panel); onlineEl=qs('[data-ai-online]',panel)||qs('.ai-title small span:last-child',panel);
  }

  function setLabels(){
    lang = localStorage.getItem('medicoLang') || html.lang || lang || 'ar';
    if(titleEl) titleEl.textContent=c().title;
    if(onlineEl) onlineEl.textContent=c().online;
    if(input) input.placeholder=c().placeholder;
    if(quick){
      quick.innerHTML='';
      c().quick.forEach(label=>{
        const b=document.createElement('button'); b.type='button'; b.textContent=label;
        b.addEventListener('click',()=>handleQuestion(label,true)); quick.appendChild(b);
      });
    }
  }

  function addMessage(text, who='bot', actions=[]){
    const wrap=document.createElement('div'); wrap.className=`ai-msg ${who}`;
    const txt=document.createElement('div'); txt.textContent=text; wrap.appendChild(txt);
    if(actions.length){
      const row=document.createElement('div'); row.className='ai-actions';
      actions.forEach(a=>{
        const el=document.createElement(a.href?'a':'button'); el.className='ai-action'; el.textContent=a.label;
        if(a.href){ el.href=a.href; if(a.external){el.target='_blank';el.rel='noopener';} }
        else { el.type='button'; el.addEventListener('click',a.onClick); }
        row.appendChild(el);
      });
      wrap.appendChild(row);
    }
    messages.appendChild(wrap); messages.scrollTop=messages.scrollHeight;
  }

  function serviceActions(service, includeContact=true){
    if(!service) return [];
    state.lastService=service.slug;
    const actions=[{label:c().open, href:`${service.slug}.html`}];
    if(includeContact) actions.push({label:c().contact, href:WA, external:true});
    return actions;
  }

  function scoreServices(q){
    const n=normalize(q); const qTokens=tokens(q);
    return SERVICES.map(service=>{
      const data=d(service); let score=0;
      for(const kw of uniq([...(data.keywords||[]),data.name,data.badge])){
        const nk=normalize(kw); if(!nk) continue;
        if(n.includes(nk)) score += nk.includes(' ')?8:4;
        else {
          for(const t of qTokens){
            const sim=similar(t,nk);
            if(sim>=.82) score += sim*2.5;
          }
        }
      }
      return {service,score};
    }).filter(x=>x.score>1.2).sort((a,b)=>b.score-a.score);
  }

  function currentService(){
    const key=document.body?.dataset?.service;
    return SERVICES.find(s=>s.slug===key) || null;
  }
  function contextualService(){
    return currentService() || SERVICES.find(s=>s.slug===state.lastService) || null;
  }
  function currentIncludes(){
    const values=[...document.querySelectorAll('#includeGrid .include-item')].map(x=>x.textContent.trim()).filter(Boolean);
    return values;
  }

  function parseBudget(q){
    const n=normalize(q).replace(/,/g,'');
    const match=n.match(/(\d+(?:\.\d+)?)(?:\s*)(k|الف|ألف|مليون|m)?/i);
    if(!match) return null;
    let value=Number(match[1]); const unit=(match[2]||'').toLowerCase();
    if(unit==='k'||unit==='الف'||unit==='ألف') value*=1000;
    if(unit==='مليون'||unit==='m') value*=1000000;
    return Number.isFinite(value)?value:null;
  }

  function inferGoal(q){
    const n=normalize(q);
    if(/حجز|حجوزات|مرضى|استفسار|بيع|book|booking|lead|inquir|patient/.test(n)) return 'bookings';
    if(/ثقه|مصداق|طبيب يشرح|authority|trust|credib/.test(n)) return 'trust';
    if(/قبل وبعد|نتيج|تحول|before|after|result|proof/.test(n)) return 'proof';
    if(/شرح|تعليم|معقد|3d|ثري دي|motion|explain|educat/.test(n)) return 'education';
    if(/شكل العياد|هوية|موقع|صور احتراف|brand|visual|website/.test(n)) return 'brand';
    if(/شهري|مستمر|ريلز|ستوري|monthly|consistent|reels|stories/.test(n)) return 'monthly';
    return null;
  }


function inferSpecialty(q){
  const n=normalize(q);
  let best=null, bestScore=0;
  for(const sp of SPECIALTIES){
    let score=0;
    for(const kw of sp.keywords){ if(n.includes(normalize(kw))) score += normalize(kw).includes(' ')?3:2; }
    if(score>bestScore){best=sp;bestScore=score;}
  }
  return bestScore?best:null;
}
function specialtyData(){ return SPECIALTIES.find(x=>x.id===state.specialty) || null; }
function specialtyName(){ const sp=specialtyData(); return sp ? (lang==='ar'?sp.ar:sp.en) : ''; }
function specialtySuggestions(id){
  const ar=lang==='ar';
  const map={
    dental: ar?['توثيق قبل/بعد للحالات مع موافقة المريض','إعلان إجراء لخدمة محددة','مراجعة الحالة يشرح فيها الطبيب الحالة']:['Before/after case documentation with patient consent','A focused procedure ad','Doctor-led Case Review'],
    dermatology: ar?['توثيق نتائج قبل/بعد عندما يكون مناسبًا وبموافقة المريض','ريل إجراء أو خدمة مثل الليزر أو العناية','شرح الطبيب للأسئلة الشائعة وبناء الثقة']:['Before/after result documentation when appropriate and consented','A service/procedure reel such as laser or skincare','Doctor-led FAQs that build trust'],
    ophthalmology: ar?['إعلان يشرح إجراء أو فحص محدد','Motion Graphic لتبسيط الفكرة الطبية','مراجعة الحالة / FAQ مع الطبيب']:['A focused procedure or examination ad','Motion Graphics to simplify medical information','Doctor-led Case Review / FAQ'],
    gynecology: ar?['محتوى تثقيفي يقوده الطبيب','Motion Graphic لموضوع يحتاج تبسيط','تصوير احترافي للعيادة والفريق']:['Doctor-led educational content','Motion Graphics for topics that need simplification','Professional clinic and team photography'],
    pediatrics: ar?['محتوى تثقيفي بسيط للأهل','فيديو الطبيب يجاوب أسئلة متكررة','باقة شهرية لمحتوى مستمر']:['Simple educational content for parents','Doctor-led common-question videos','A monthly package for consistent content'],
    physio: ar?['فيديو يوضح الخدمة أو جلسة العلاج','مراجعة الحالة لرحلة المريض بدون ادعاءات مبالغ فيها','محتوى شهري من تمارين وتوعية وخدمات']:['A service/session demonstration video','Patient-journey case review without exaggerated claims','Monthly education, service and exercise content'],
    nutrition: ar?['مراجعة الحالة للمختص','Motion Graphic لمفاهيم التغذية','باقة شهرية للنصائح والخدمات']:['Specialist-led Case Review','Motion Graphics for nutrition concepts','Monthly tips and service content'],
    general: ar?['تصوير احترافي للعيادة والفريق','فيديوهات خدمات أو إجراءات واضحة','محتوى تثقيفي يقوده الطبيب']:['Professional clinic and team photography','Clear service/procedure videos','Doctor-led educational content']
  };
  return map[id] || map.general;
}
function contentIdeasResponse(){
  const sp=specialtyData() || {id:'general',ar:'العيادة',en:'your clinic'};
  const ideas=specialtySuggestions(sp.id);
  const head=lang==='ar'?`لـ ${sp.ar}، هاي 3 أفكار محتوى أبدأ فيها:`:`For ${sp.en}, I’d start with these 3 content ideas:`;
  return `${head}\n• ${ideas.join('\n• ')}`;
}

  function recommendationScore(service, profile){
    let score=0;
    if(profile.goal){
      const goalMap={bookings:'bookings',trust:'trust',proof:'proof',education:'education',brand:'brand',monthly:'monthly'};
      if(service.goals.includes(goalMap[profile.goal])) score+=10;
      if(profile.goal==='bookings' && service.slug==='case-review') score+=4;
      if(profile.goal==='trust' && service.slug==='case-ad') score+=3;
      if(profile.goal==='monthly' && service.frequency==='monthly') score+=10;
    }
    if(profile.frequency==='monthly') score += service.frequency==='monthly'?8:-2;
    if(profile.frequency==='oneoff') score += service.frequency!=='monthly'?2:-3;
    if(profile.specialty){
      const specialtyBoost={
        dental:{'case-ad':4,'procedure-ad':4,'case-review':3,'motion-graphic':2},
        dermatology:{'case-ad':4,'procedure-ad':4,'case-review':3,'economic-offer':2},
        ophthalmology:{'procedure-ad':4,'motion-graphic':4,'case-review':3},
        gynecology:{'case-review':4,'motion-graphic':3,'dental-photography':2,'economic-offer':2},
        pediatrics:{'case-review':4,'motion-graphic':3,'economic-offer':3},
        physio:{'procedure-ad':4,'case-review':3,'economic-offer':3},
        nutrition:{'case-review':4,'motion-graphic':3,'economic-offer':3},
        general:{'dental-photography':2,'case-review':2,'procedure-ad':2}
      };
      score += specialtyBoost[profile.specialty]?.[service.slug] || 0;
    }
    if(profile.budget){
      if(service.min<=profile.budget) score+=4;
      else score-=Math.min(8,(service.min-profile.budget)/50000);
    }
    return score;
  }

  function bestRecommendations(profile, limit=3){
    return SERVICES.map(s=>({service:s,score:recommendationScore(s,profile)})).sort((a,b)=>b.score-a.score).slice(0,limit);
  }

  function whyText(service, profile){
    const ar=lang==='ar';
    const reason={
      bookings: ar?'لأنه يركز على إجراء واحد ويقود المشاهد مباشرة للتواصل والحجز.':'because it focuses on one treatment and drives viewers toward inquiry and booking.',
      trust: ar?'لأنه يبني ثقة من خلال شرح الطبيب لحالة حقيقية ونتيجتها.':'because it builds trust through a doctor-led real case and result.',
      proof: ar?'لأنه يحول النتيجة إلى دليل بصري سريع وواضح قبل/بعد.':'because it turns the result into fast, clear visual proof.',
      education: ar?'لأنه يشرح الإجراء بصريًا ويبسّط التفاصيل المعقدة.':'because it visually explains the procedure and simplifies complex details.',
      brand: ar?'لأنه يعطيك مكتبة صور احترافية تستخدمها بكل قنوات العيادة.':'because it gives you a reusable premium image library across all clinic channels.',
      monthly: ar?'لأنه يجمع عدة أنواع محتوى ضمن خطة شهرية واحدة.':'because it bundles multiple content types into one monthly plan.'
    };
    return reason[profile.goal] || (ar?'لأنه الأقرب للهدف والميزانية اللي وصفتها.':'because it best matches the goal and budget you described.');
  }

  function recommendFromState(){
    const ranked=bestRecommendations(state,3); const top=ranked[0]?.service;
    if(!top) return {text:c().unknown,actions:[]};
    state.shortlist=ranked.map(x=>x.service.slug); state.lastService=top.slug;
    const budgetLine=state.budget ? (lang==='ar'?` ميزانيتك المذكورة: ${state.budget.toLocaleString('en-US')}.`:` Your stated budget: ${state.budget.toLocaleString('en-US')}.`) : '';
    return {
      text:`${c().recommendation}\n${d(top).name} — ${d(top).price}\n${whyText(top,state)}${budgetLine}`,
      actions:[...serviceActions(top), ...ranked.slice(1).map(x=>({label:d(x.service).name,href:`${x.service.slug}.html`}))]
    };
  }

  function advisorActions(stage){
    if(stage==='goal'){
      const opts=lang==='ar'?
        [['زيادة الحجوزات','bookings'],['بناء الثقة','trust'],['إبراز النتائج','proof'],['شرح علاج','education'],['تحسين شكل العيادة','brand'],['محتوى شهري','monthly']]:
        [['More bookings','bookings'],['Build trust','trust'],['Show results','proof'],['Explain treatment','education'],['Improve clinic visuals','brand'],['Monthly content','monthly']];
      return opts.map(([label,goal])=>({label,onClick:()=>{state.goal=goal;state.advisor=true;addMessage(label,'user');askAdvisorNext();}}));
    }
    if(stage==='frequency'){
      const opts=lang==='ar'?[['مرة واحدة','oneoff'],['شهري ومستمر','monthly']]:[['One-off','oneoff'],['Monthly / ongoing','monthly']];
      return opts.map(([label,val])=>({label,onClick:()=>{state.frequency=val;addMessage(label,'user');addMessage(recommendFromState().text,'bot',recommendFromState().actions);state.advisor=false;}}));
    }
    if(stage==='budget'){
      const opts=lang==='ar'?[['أقل من 75,000',75000],['75,000–150,000',150000],['150,000–250,000',250000],['أكثر من 250,000',500000]]:[['Under 75,000',75000],['75,000–150,000',150000],['150,000–250,000',250000],['Over 250,000',500000]];
      return opts.map(([label,val])=>({label,onClick:()=>{state.budget=val;addMessage(label,'user');state.frequency=state.goal==='monthly'?'monthly':state.frequency; if(state.goal==='monthly'){const r=recommendFromState();addMessage(r.text,'bot',r.actions);state.advisor=false;}else addMessage(c().askFrequency,'bot',advisorActions('frequency'));}}));
    }
    return [];
  }

  function askAdvisorNext(){
    if(!state.goal){ addMessage(c().askGoal,'bot',advisorActions('goal')); return; }
    if(!state.budget){ addMessage(c().askBudget,'bot',advisorActions('budget')); return; }
    if(!state.frequency && state.goal!=='monthly'){ addMessage(c().askFrequency,'bot',advisorActions('frequency')); return; }
    const r=recommendFromState(); addMessage(r.text,'bot',r.actions); state.advisor=false;
  }

  function compareServices(list){
    const pair=list.slice(0,2).map(x=>x.service);
    if(pair.length<2) return null;
    const [a,b]=pair; const ar=lang==='ar';
    state.lastService=a.slug;
    const text=ar?
      `${c().compare}\n\n${d(a).name} — ${d(a).price}\n${d(a).desc}\n\n${d(b).name} — ${d(b).price}\n${d(b).desc}\n\nإذا هدفك ${a.goals.includes('bookings')?'الحجوزات':'المطابق للخدمة الأولى'} فالأولى أقرب، وإذا هدفك مختلف اختار حسب نوع النتيجة اللي تحتاجها.`:
      `${c().compare}\n\n${d(a).name} — ${d(a).price}\n${d(a).desc}\n\n${d(b).name} — ${d(b).price}\n${d(b).desc}\n\nChoose based on the outcome you need, not only the format.`;
    return {text,actions:pair.map(s=>({label:d(s).name,href:`${s.slug}.html`}))};
  }

  function responseFor(q){
    const n=normalize(q); const matched=scoreServices(q); const current=contextualService();
    const explicitGoal=inferGoal(q); const parsedBudget=parseBudget(q);
    if(explicitGoal) state.goal=explicitGoal;
    if(parsedBudget && parsedBudget>=1000) state.budget=parsedBudget;
    const detectedSpecialty=inferSpecialty(q);
    if(detectedSpecialty) state.specialty=detectedSpecialty.id;

    if(/شكرا|شكرًا|يسلمو|مشكور|thank you|thanks|thx/.test(n)) return {text:c().thanks,actions:[{label:lang==='ar'?'ساعدني أختار':'Help me choose',onClick:()=>{state.advisor=true;addMessage(c().askGoal,'bot',advisorActions('goal'));}}]};
    if(/مع السلامه|باي|اشوفك|bye|goodbye|see you/.test(n)) return {text:c().bye,actions:[]};
    if(/مين انت|شو بتسو|ماذا تفعل|عن ميديكو|what do you do|who are you|about medico/.test(n)) return {text:c().whatWeDo,actions:[{label:c().all,href:'index.html#services'},{label:c().pricing,href:'index.html#pricing'}]};
    if(/الم|ألم|دواء|جرعه|جرعة|تشخيص|اعراض|أعراض|مرض|medicine|medication|dose|diagnos|symptom/.test(n) && !/محتوى|اعلان|إعلان|تسويق|content|marketing|ad/.test(n)) return {text:c().medicalBoundary,actions:[{label:c().all,href:'index.html#services'}]};
    if(/فكره محتوى|أفكار محتوى|افكار محتوى|شو انشر|شو اصور|content idea|content ideas|what should i post|what to post/.test(n)){
      return {text:contentIdeasResponse(),actions:[{label:lang==='ar'?'بدي خطة أدق':'Make it more specific',onClick:()=>{state.advisor=true;addMessage(c().askGoal,'bot',advisorActions('goal'));}},{label:c().all,href:'index.html#services'}]};
    }
    if(detectedSpecialty && /عندي|عياد|clinic|specialty|تخصص|انا طبيب|أنا طبيب|doctor/.test(n) && !explicitGoal){
      const nm=lang==='ar'?detectedSpecialty.ar:detectedSpecialty.en;
      const ideas=specialtySuggestions(detectedSpecialty.id);
      const ideaList=ideas.join('\n• ');
      const text=lang==='ar'
        ? `ممتاز، فهمت إن تخصصك ${nm}. ميديكو ميديا تقدر تبني المحتوى حسب تخصصك، وأقوى 3 اتجاهات مبدئية عندي:
• ${ideaList}

احكيلي الآن شو هدفك الأساسي حتى أحدد لك الخدمة الأقرب.`
        : `Great — I understand your specialty is ${nm}. Medico Media can tailor the content to your field. Three strong starting directions are:
• ${ideaList}

Now tell me your main goal and I’ll narrow the best service.`;
      return {text,actions:advisorActions('goal')};
    }

    if(/ساعدني اختار|ساعدني أختار|شو انسب|شو الأنسب|ماذا اختار|help me choose|what fits|recommend/.test(n)){
      state.advisor=true; state.goal=explicitGoal || null; state.budget=null; state.frequency=null;
      return {text:c().askGoal,actions:advisorActions('goal')};
    }

    if(state.advisor && !/سعر|price|خدم|service/.test(n)){
      if(!state.goal && explicitGoal){ state.goal=explicitGoal; return {text:c().askBudget,actions:advisorActions('budget')}; }
      if(!state.budget && parsedBudget){ state.budget=parsedBudget; return {text:c().askFrequency,actions:advisorActions('frequency')}; }
    }

    if(/الفرق|قارن|مقارنه|compare|difference|vs|versus/.test(n)){
      if(matched.length>=2) return compareServices(matched);
      return {text:lang==='ar'?'اكتب اسم خدمتين، مثل: «قارن إعلان الإجراء مع مراجعة الحالة».':'Name two services, for example: “Compare Procedure Ad with Case Review.”',actions:SERVICES.slice(0,4).map(s=>({label:d(s).name,href:`${s.slug}.html`}))};
    }

    if(/تفاصيل|اشرحلي|احكيلي عنها|شو هي|details|tell me more|explain this service/.test(n) && current){
      state.lastService=current.slug;
      const inc=currentService()?.slug===current.slug ? currentIncludes() : d(current).includes;
      const list=(inc.length?inc:d(current).includes).slice(0,6);
      return {text:`${d(current).name}
${d(current).desc}

${lang==='ar'?'تشمل:':'Includes:'}
• ${list.join('\n• ')}

${lang==='ar'?'السعر الحالي:':'Current price:'} ${d(current).price}`,actions:serviceActions(current)};
    }

    if(/شو شامل|ما يشمل|ماذا يشمل|شو بتشمل|what is included|what does it include|included/.test(n) && current){
      const inc=currentService()?.slug===current.slug ? currentIncludes() : d(current).includes;
      state.lastService=current.slug;
      return {text:`${d(current).name}:\n• ${(inc.length?inc:d(current).includes).join('\n• ')}`,actions:serviceActions(current)};
    }

    if(/خصم|قبل الخصم|كم وفرت|discount|old price|save/.test(n) && current){
      const saving=Math.max(0,current.oldMin-current.min);
      return {text:lang==='ar'?`${d(current).name}: السعر الحالي ${d(current).price}. السعر السابق يبدأ من ${current.oldMin.toLocaleString('en-US')}، والتوفير يبدأ من ${saving.toLocaleString('en-US')}.`:`${d(current).name}: current price ${d(current).price}. Previous price started at ${current.oldMin.toLocaleString('en-US')}, so savings start at ${saving.toLocaleString('en-US')}.`,actions:serviceActions(current)};
    }

    if(/مده|مدة|كم يوم|وقت التسليم|تسليم|timeline|delivery time|how long/.test(n)) return {text:c().noTiming,actions:[{label:c().contact,href:WA,external:true}]};
    if(/عمله|عملة|دينار|دولار|currency|jod|usd/.test(n)) return {text:c().noCurrency,actions:[{label:c().pricing,href:'index.html#pricing'}]};

    if(/ارخص|الأرخص|اقل سعر|cheapest|lowest price/.test(n)){
      const s=SERVICES.reduce((a,b)=>a.min<b.min?a:b); return {text:c().cheaper,actions:serviceActions(s)};
    }
    if(/اغلى|الأغلى|اعلى سعر|most expensive|highest price/.test(n)){
      const s=SERVICES.reduce((a,b)=>a.max>b.max?a:b); return {text:c().expensive,actions:serviceActions(s)};
    }

    if(/هاي الخدم|هذه الخدم|هالخدم|this service|this package|كم سعرها|كم سعره|price of this/.test(n) && current){
      state.lastService=current.slug;
      return {text:`${d(current).name}\n${d(current).desc}\n${lang==='ar'?'السعر':'Price'}: ${d(current).price}`,actions:serviceActions(current)};
    }

    if(/كل الخدمات|الخدمات|services|all services/.test(n)){
      return {text:c().allServices,actions:SERVICES.map(s=>({label:d(s).name,href:`${s.slug}.html`}))};
    }

    if(/سعر|اسعار|تكلف|كم|price|prices|cost|budget/.test(n)){
      if(matched[0]){ const s=matched[0].service; state.lastService=s.slug; return {text:`${d(s).name}: ${d(s).price}. ${d(s).desc}`,actions:serviceActions(s)}; }
      if(current){ state.lastService=current.slug; return {text:`${d(current).name}: ${d(current).price}.`,actions:serviceActions(current)}; }
      if(parsedBudget){
        state.budget=parsedBudget; const ranked=bestRecommendations(state,3).filter(x=>x.service.min<=parsedBudget);
        if(ranked.length){ const s=ranked[0].service; return {text:lang==='ar'?`ضمن ميزانية ${parsedBudget.toLocaleString('en-US')}، أقرب خيار هو ${d(s).name} بسعر ${d(s).price}.`:`Within a budget of ${parsedBudget.toLocaleString('en-US')}, the closest fit is ${d(s).name} at ${d(s).price}.`,actions:serviceActions(s)}; }
      }
      return {text:c().prices,actions:[{label:c().pricing,href:'index.html#pricing'},{label:c().contact,href:WA,external:true}]};
    }

    if(/حجز|واتساب|تواصل|اريد احجز|book|booking|contact|whatsapp|quote/.test(n)) return {text:c().booking,actions:[{label:c().contact,href:WA,external:true},{label:c().all,href:'index.html#services'}]};

    if(explicitGoal){
      state.advisor=true;
      if(parsedBudget) state.budget=parsedBudget;
      if(state.budget){ const r=recommendFromState(); state.advisor=false; return r; }
      return {text:`${c().consultant}\n${c().askBudget}`,actions:advisorActions('budget')};
    }

    if(matched.length){
      const top=matched.slice(0,2);
      if(top.length===1){ const s=top[0].service; state.lastService=s.slug; return {text:`${d(s).name}\n${d(s).desc}\n${lang==='ar'?'السعر':'Price'}: ${d(s).price}`,actions:serviceActions(s)}; }
      return compareServices(top);
    }

    if(/مرحبا|اهلا|أهلا|هلا|السلام|صباح الخير|مساء الخير|hello|hi|hey|good morning|good evening/.test(n)) return {text:c().welcome,actions:[{label:lang==='ar'?'ساعدني أختار':'Help me choose',onClick:()=>{state.advisor=true;addMessage(c().askGoal,'bot',advisorActions('goal'));}},{label:lang==='ar'?'أفكار محتوى':'Content ideas',onClick:()=>addMessage(contentIdeasResponse(),'bot',[{label:c().all,href:'index.html#services'}])},{label:c().all,href:'index.html#services'}]};

    return {text:c().unknown,actions:advisorActions('goal')};
  }


function addTyping(){
  const wrap=document.createElement('div'); wrap.className='ai-msg bot typing';
  wrap.setAttribute('aria-label',lang==='ar'?'يكتب...':'Typing...');
  wrap.innerHTML='<span></span><span></span><span></span>';
  messages.appendChild(wrap); messages.scrollTop=messages.scrollHeight; return wrap;
}

  async function askRemoteAI(text){
    if(location.protocol==='file:') return null;
    const history=[...messages.querySelectorAll('.ai-msg:not(.typing)')].slice(0,-1).slice(-8).map(el=>({role:el.classList.contains('user')?'user':'assistant',content:el.textContent.trim()}));
    const controller=new AbortController(); const timer=setTimeout(()=>controller.abort(),12000);
    try{
      const res=await fetch('/api/ai',{method:'POST',headers:{'Content-Type':'application/json'},signal:controller.signal,body:JSON.stringify({message:text,lang,page:document.body?.dataset?.service||'home',history})});
      if(!res.ok) return null;
      const data=await res.json();
      return typeof data.reply==='string'&&data.reply.trim()?data.reply.trim():null;
    }catch{return null;} finally{clearTimeout(timer);}
  }

  async function handleQuestion(q, fromQuick=false){
    const text=String(q||'').trim(); if(!text) return;
    addMessage(text,'user'); if(input) input.value='';
    const local=responseFor(text);
    const typing=addTyping();
    const remote=await askRemoteAI(text);
    typing.remove();
    addMessage(remote||local.text,'bot',local.actions||[]);
  }

  function open(){
    panel.classList.add('open'); panel.setAttribute('aria-hidden','false'); fab.setAttribute('aria-expanded','true');
    if(!messages.children.length){
      const cur=currentService();
      const intro=cur ? `${c().welcome}\n\n${lang==='ar'?'أنت الآن داخل صفحة':'You are currently viewing'} ${d(cur).name}.` : c().welcome;
      addMessage(intro,'bot',[{label:lang==='ar'?'ساعدني أختار':'Help me choose',onClick:()=>{state.advisor=true;addMessage(c().askGoal,'bot',advisorActions('goal'));}},{label:c().all,href:'index.html#services'}]);
    }
    if(matchMedia('(hover:hover) and (pointer:fine)').matches) setTimeout(()=>input?.focus(),50);
  }
  function close(){ panel.classList.remove('open'); panel.setAttribute('aria-hidden','true'); fab.setAttribute('aria-expanded','false'); }

  function init(){
    ensureUI(); setLabels();
    fab.addEventListener('click',()=>panel.classList.contains('open')?close():open());
    closeBtn.addEventListener('click',close);
    form.addEventListener('submit',e=>{e.preventDefault();handleQuestion(input.value);});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
    document.addEventListener('medico:language',e=>{
      if(e.detail?.lang) lang=e.detail.lang; setLabels();
      if(messages.children.length){messages.innerHTML='';state.lastService=currentService()?.slug||state.lastService;addMessage(c().welcome,'bot',[{label:lang==='ar'?'ساعدني أختار':'Help me choose',onClick:()=>{state.advisor=true;addMessage(c().askGoal,'bot',advisorActions('goal'));}},{label:c().all,href:'index.html#services'}]);}
    });
    document.addEventListener('click',e=>{ const trigger=e.target.closest?.('[data-ai]'); if(!trigger) return; e.preventDefault(); open(); handleQuestion(trigger.textContent,true); });
    window.medicoAgent={open,close,refreshLanguage:setLabels,ask:handleQuestion,recommend:(goal,budget)=>{state.goal=goal||null;state.budget=budget||null;return recommendFromState();}};
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();
