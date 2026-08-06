"use client";

import { useEffect, useState } from "react";

type Locale = "bg" | "ar";
type LocalText = { bg: string; ar: string };

const imageRoot = "https://raw.githubusercontent.com/bodexbg-a11y/bodexremarket/main/public/products";

const featured = [
  {
    title: { bg: "Самосвални полуремаркета", ar: "نصف مقطورات قلابة" },
    subtitle: { bg: "Стоманени и алуминиеви", ar: "فولاذية وألومنيوم" },
    image: `${imageRoot}/steel-tipper.jpg`,
    text: {
      bg: "Конфигурации с клапа, комбинирана врата и решения за скрап. Изработка от Hardox® 450/500 Tuf и Domex.",
      ar: "تجهيزات بباب خلفي أو باب مركب وحلول لنقل الخردة، مصنوعة من Hardox® 450/500 Tuf وDomex.",
    },
    tags: {
      bg: ["2–4 оси", "Hardox®", "По поръчка"],
      ar: ["2–4 محاور", "Hardox®", "حسب الطلب"],
    },
  },
  {
    title: { bg: "SUPER LIGHT", ar: "SUPER LIGHT" },
    subtitle: { bg: "Алуминиева рама и кош", ar: "هيكل وحوض من الألومنيوم" },
    image: `${imageRoot}/super-light.jpg`,
    text: {
      bg: "Олекотена конструкция с оребрен или панелен алуминиев кош за максимален полезен товар.",
      ar: "بنية خفيفة بحوض ألومنيوم مضلع أو لوحي لزيادة الحمولة الصافية إلى أقصى حد.",
    },
    tags: {
      bg: ["Ниско тегло", "3 оси", "Алуминий"],
      ar: ["وزن منخفض", "3 محاور", "ألومنيوم"],
    },
  },
  {
    title: { bg: "Нискорамни полуремаркета", ar: "نصف مقطورات منخفضة" },
    subtitle: { bg: "За тежка и извънгабаритна техника", ar: "للمعدات الثقيلة والاستثنائية" },
    image: `${imageRoot}/low-loader.jpg`,
    text: {
      bg: "Триосни, четириосни и многоосни изпълнения, включително управляеми оси за сложни транспортни задачи.",
      ar: "إصدارات بثلاثة أو أربعة محاور ومتعددة المحاور، مع محاور موجهة لمهام النقل المعقدة.",
    },
    tags: {
      bg: ["3+ оси", "Управляеми оси", "Тежки товари"],
      ar: ["3+ محاور", "محاور موجهة", "حمولات ثقيلة"],
    },
  },
  {
    title: { bg: "Платформи", ar: "منصات نقل" },
    subtitle: { bg: "Бордови и разтегателни", ar: "بجوانب وقابلة للتمديد" },
    image: `${imageRoot}/platform.jpg`,
    text: {
      bg: "Бордови платформи, изпълнения с кран HDS и многофункционални разтегателни конструкции.",
      ar: "منصات بجوانب، وإصدارات برافعة HDS، وهياكل متعددة الاستخدامات قابلة للتمديد.",
    },
    tags: {
      bg: ["Разтегателни", "HDS", "Многофункционални"],
      ar: ["قابلة للتمديد", "HDS", "متعددة الاستخدامات"],
    },
  },
];

const catalogGroups: Array<{ title: LocalText; models: LocalText[] }> = [
  {
    title: { bg: "Самосвални полуремаркета", ar: "نصف مقطورات قلابة" },
    models: [
      { bg: "Стоманена с клапа", ar: "فولاذية بباب خلفي" },
      { bg: "Стоманена с комбинирана врата", ar: "فولاذية بباب خلفي مركب" },
      { bg: "Стоманена за скрап — нов профил", ar: "فولاذية للخردة — تصميم جانبي جديد" },
      { bg: "Алуминиева панелна с клапа и стоманена рама", ar: "حوض ألومنيوم لوحي بباب وهيكل فولاذي" },
      { bg: "Алуминиева панелна с комбинирана врата", ar: "حوض ألومنيوم لوحي بباب مركب" },
      { bg: "Алуминиева оребрена с клапа", ar: "حوض ألومنيوم مضلع بباب خلفي" },
      { bg: "Алуминиева оребрена с комбинирана врата", ar: "حوض ألومنيوم مضلع بباب مركب" },
      { bg: "Алуминиева със сгъваеми странични врати", ar: "ألومنيوم بأبواب جانبية قابلة للطي" },
      { bg: "SUPER LIGHT с оребрен кош", ar: "SUPER LIGHT بحوض مضلع" },
      { bg: "SUPER LIGHT с панелен кош", ar: "SUPER LIGHT بحوض لوحي" },
      { bg: "Тип лодка — алуминиева", ar: "نوع القارب — ألومنيوم" },
      { bg: "Тип лодка — Hardox® 450/500 Tuf", ar: "نوع القارب — Hardox® 450/500 Tuf" },
      { bg: "Двуосна самосвална", ar: "قلابة بمحورين" },
      { bg: "Комбиниран кош-цистерна", ar: "حوض وخزان مدمجان" },
      { bg: "Четириосна с два цилиндъра и хидравличен покрив", ar: "أربعة محاور بأسطوانتين وسقف هيدروليكي" },
      { bg: "С пневматично разтоварване за фураж", ar: "بتفريغ هوائي للأعلاف" },
      { bg: "Многоосна с плъзгащ покрив", ar: "متعددة المحاور بسقف منزلق" },
      { bg: "Многоосна с повдигащ покрив", ar: "متعددة المحاور بسقف قابل للرفع" },
      { bg: "С адаптер за пълнене на фолийни ръкави", ar: "بمهايئ لملء الأكياس الأنبوبية" },
      { bg: "Бордова със задно разтоварване", ar: "بجوانب وتفريغ خلفي" },
      { bg: "Алуминиева с улей за рулони и странични врати", ar: "ألومنيوم بحوض لفائف وأبواب جانبية" },
    ],
  },
  {
    title: { bg: "Нискорамни полуремаркета", ar: "نصف مقطورات منخفضة" },
    models: [
      { bg: "Триосна", ar: "ثلاثة محاور" },
      { bg: "Четириосна", ar: "أربعة محاور" },
      { bg: "Многоосна", ar: "متعددة المحاور" },
    ],
  },
  {
    title: { bg: "Платформи", ar: "منصات النقل" },
    models: [
      { bg: "Бордова", ar: "بجوانب" },
      { bg: "Бордова с кран HDS", ar: "بجوانب ورافعة HDS" },
      { bg: "Разтегателна платформа", ar: "منصة قابلة للتمديد" },
      { bg: "Многофункционална разтегателна с автоматична рамка", ar: "منصة متعددة الاستخدامات قابلة للتمديد بإطار آلي" },
    ],
  },
  {
    title: { bg: "Контейнеровози", ar: "ناقلات الحاويات القابلة للتبديل" },
    models: [
      { bg: "Полуремарке за сменяеми контейнери", ar: "نصف مقطورة للحاويات القابلة للتبديل" },
      { bg: "Ремарке за сменяеми контейнери", ar: "مقطورة للحاويات القابلة للتبديل" },
    ],
  },
  {
    title: { bg: "Цистерни", ar: "الصهاريج" },
    models: [
      { bg: "Полуремарке цистерна", ar: "نصف مقطورة صهريج" },
      { bg: "Ремарке цистерна", ar: "مقطورة صهريج" },
    ],
  },
  {
    title: { bg: "Специализирани превозни средства", ar: "مركبات متخصصة" },
    models: [
      { bg: "Нискорамно за превоз на влекачи", ar: "منخفضة لنقل رؤوس الجر" },
      { bg: "Link Trailer", ar: "Link Trailer" },
      { bg: "Dolly", ar: "Dolly" },
    ],
  },
  {
    title: { bg: "Подвижен под", ar: "أرضية متحركة" },
    models: [
      { bg: "Стандартен подвижен под", ar: "أرضية متحركة قياسية" },
      { bg: "Четириосен подвижен под", ar: "أرضية متحركة بأربعة محاور" },
      { bg: "С товарен борд", ar: "برافعة خلفية" },
      { bg: "С шнек", ar: "بناقل لولبي" },
      { bg: "Със странични врати", ar: "بأبواب جانبية" },
      { bg: "С хидравлично отваряеми страна и покрив", ar: "بجانب وسقف يفتحان هيدروليكياً" },
      { bg: "Универсален за многовариантно товарене", ar: "عالمي لخيارات تحميل متعددة" },
    ],
  },
  {
    title: { bg: "Брезентови и завесни", ar: "مقطورات بستائر وجوانب قماشية" },
    models: [
      { bg: "Бордова със завеса", ar: "بجوانب وستارة منزلقة" },
      { bg: "Завесна", ar: "ستارة منزلقة" },
      { bg: "За превоз на стоманени рулони", ar: "لنقل لفائف الفولاذ" },
      { bg: "Разтегателна с автоматична рамка", ar: "قابلة للتمديد بإطار آلي" },
      { bg: "Jumbo", ar: "Jumbo" },
      { bg: "За превоз на птици", ar: "لنقل الدواجن" },
      { bg: "За превоз на дървени стърготини", ar: "لنقل نشارة الخشب" },
    ],
  },
  {
    title: { bg: "Ремаркета", ar: "المقطورات" },
    models: [{ bg: "Двуосни, триосни и четириосни", ar: "بمحورين أو ثلاثة أو أربعة محاور" }],
  },
  {
    title: { bg: "Надстройки за камиони", ar: "هياكل الشاحنات" },
    models: [
      { bg: "Брезентова надстройка", ar: "هيكل بقماش مشمع" },
      { bg: "Самосвална надстройка", ar: "هيكل قلاب" },
      { bg: "Твърда фургонна надстройка", ar: "صندوق صلب مغلق" },
    ],
  },
  {
    title: { bg: "Композиции от превозни средства", ar: "تركيبات المركبات" },
    models: [
      { bg: "Брезентова композиция", ar: "تركيبة بقماش مشمع" },
      { bg: "Самосвална композиция", ar: "تركيبة قلابة" },
      { bg: "Композиция с твърда надстройка", ar: "تركيبة بصندوق صلب" },
    ],
  },
  {
    title: { bg: "Превоз на дървесина", ar: "نقل الأخشاب" },
    models: [
      { bg: "Полуремаркета за дървесина", ar: "نصف مقطورات للأخشاب" },
      { bg: "Ремаркета за дървесина", ar: "مقطورات للأخشاب" },
    ],
  },
];

const copy = {
  bg: {
    nav: ["Продукти", "Качество", "За BODEX"], request: "Запитване",
    eyebrow: "Полуремаркета за професионалисти", heroA: "Създадени за", heroB: "тежката работа.",
    lead: "Над 30 години инженерна традиция. Около 100 типа превозни средства, конфигурирани за вашия товар и маршрут.",
    models: "Разгледайте моделите", years: "години опит", types: "типа превозни средства", axle: "товароносимост на ос",
    range: "Нашата гама", solutionA: "Правилното решение", solutionB: "за всеки товар.",
    rangeText: "От стандартна конфигурация до специализиран проект — всяко полуремарке е проектирано с мисъл за ефективност, безопасност и дълъг живот.",
    fullRange: "Пълна продуктова линия", fullTitle: "Всички модели на BODEX.", fullText: "12 продуктови групи и 58 изпълнения от официалния каталог. Отворете категория, за да видите наличните варианти.", variants: "изпълнения",
    qualityLabel: "Инженерно качество", qualityTitle: "Компоненти, на които можете да разчитате.",
    qualityText: "Шасита с оси SAF и BPW, спирачни системи Wabco или Knorr, LED осветление Hella или Aspöck и хидравлика от водещи производители.",
    qualities: ["Европейски компоненти от доказани марки", "Конструкции от Hardox® и Domex", "Индивидуални и нестандартни решения"],
    since: "BODEX от 1991", aboutTitle: "Опитът се измерва в изминати километри.",
    about: ["BODEX започва с ремонт на полуремаркета и се развива до производител с портфолио от около 100 типа превозни средства.", "Производството съчетава модерна машинна база, собствен инженерен опит и гъвкавост при нестандартни транспортни задачи."],
    talk: "Нека поговорим", contactTitle: "Какво трябва да превозите?", contactText: "Разкажете ни за товара, маршрутите и желаната конфигурация. Ще ви насочим към подходящото решение.", send: "Изпратете запитване",
    footer: "Полуремаркета и транспортни решения за българския и алжирския пазар.",
  },
  ar: {
    nav: ["المنتجات", "الجودة", "عن BODEX"], request: "طلب عرض",
    eyebrow: "نصف مقطورات للمحترفين", heroA: "مصممة من أجل", heroB: "أصعب الأعمال.",
    lead: "أكثر من 30 سنة من الخبرة الهندسية. نحو 100 نوع من المركبات مجهزة حسب حمولتك ومسارك.",
    models: "اكتشف الموديلات", years: "سنة من الخبرة", types: "نوعاً من المركبات", axle: "حمولة لكل محور",
    range: "مجموعتنا", solutionA: "الحل المناسب", solutionB: "لكل حمولة.",
    rangeText: "من التجهيز القياسي إلى المشروع المتخصص، صُممت كل نصف مقطورة لتحقيق الكفاءة والسلامة وعمر تشغيل طويل.",
    fullRange: "مجموعة المنتجات الكاملة", fullTitle: "جميع موديلات BODEX.", fullText: "12 مجموعة و58 تجهيزاً من الكتالوج الرسمي. افتح أي فئة للاطلاع على الخيارات المتاحة.", variants: "تجهيزات",
    qualityLabel: "جودة هندسية", qualityTitle: "مكونات يمكنك الاعتماد عليها.",
    qualityText: "هياكل بمحاور SAF وBPW، وأنظمة فرامل Wabco أو Knorr، وإضاءة LED من Hella أو Aspöck، وأنظمة هيدروليكية من أبرز المصنعين.",
    qualities: ["مكونات أوروبية من علامات موثوقة", "هياكل من Hardox® وDomex", "حلول خاصة ومصممة حسب الطلب"],
    since: "BODEX منذ 1991", aboutTitle: "الخبرة تُقاس بالكيلومترات المقطوعة.",
    about: ["بدأت BODEX بإصلاح نصف المقطورات وتطورت إلى مصنع يقدم نحو 100 نوع من المركبات.", "يجمع الإنتاج بين معدات حديثة وخبرة هندسية ومرونة في تنفيذ مهام النقل غير القياسية."],
    talk: "لنتحدث", contactTitle: "ماذا تريد أن تنقل؟", contactText: "أخبرنا عن الحمولة والمسارات والتجهيز المطلوب، وسنساعدك في اختيار الحل المناسب.", send: "أرسل طلباً",
    footer: "نصف مقطورات وحلول نقل للسوقين البلغاري والجزائري.",
  },
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("bg");
  const t = copy[locale];
  const isArabic = locale === "ar";

  useEffect(() => {
    document.documentElement.lang = isArabic ? "ar-DZ" : "bg";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic]);

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className={isArabic ? "arabic" : "bulgarian"}>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="BODEX начало"><span className="brand-mark">B</span><span><strong>BODEX</strong><small>BULGARIA · ALGERIA</small></span></a>
        <nav aria-label={isArabic ? "التنقل الرئيسي" : "Основна навигация"}>
          <a href="#products">{t.nav[0]}</a><a href="#quality">{t.nav[1]}</a><a href="#about">{t.nav[2]}</a>
        </nav>
        <div className="nav-actions">
          <div className="language-switch" role="group" aria-label="Language">
            <button className={locale === "bg" ? "active" : ""} onClick={() => setLocale("bg")} aria-pressed={locale === "bg"}>BG</button>
            <button className={locale === "ar" ? "active" : ""} onClick={() => setLocale("ar")} aria-pressed={locale === "ar"}>الجزائر</button>
          </div>
          <a className="button button-small" href="#contact">{t.request}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p><h1>{t.heroA}<br/><em>{t.heroB}</em></h1>
          <p className="hero-lead">{t.lead}</p>
          <div className="hero-actions"><a className="button" href="#products">{t.models} <span>→</span></a><a className="text-link" href="tel:+359899809607">+359 89 980 9607</a></div>
          <div className="hero-stats"><div><strong>30+</strong><span>{t.years}</span></div><div><strong>100</strong><span>{t.types}</span></div><div><strong>12 t</strong><span>{t.axle}</span></div></div>
        </div>
        <div className="hero-visual"><div className="hero-label"><span>01</span> SUPER LIGHT</div><img src={`${imageRoot}/super-light.jpg`} alt="BODEX SUPER LIGHT"/><div className="yellow-block" aria-hidden="true"/></div>
      </section>

      <section className="ticker"><span>SAF / BPW</span><i>•</i><span>WABCO / KNORR</span><i>•</i><span>HARDOX®</span><i>•</i><span>HELLA / ASPÖCK LED</span><i>•</i><span>HYVA / BINOTTO</span></section>

      <section className="section products" id="products">
        <div className="section-head"><div><p className="eyebrow">{t.range}</p><h2>{t.solutionA}<br/>{t.solutionB}</h2></div><p>{t.rangeText}</p></div>
        <div className="product-grid">
          {featured.map((product, index) => <article className="product-card" key={product.title.bg}><div className="product-image"><img src={product.image} alt={product.title[locale]}/><span className="card-number">0{index + 1}</span></div><div className="product-body"><p className="product-subtitle">{product.subtitle[locale]}</p><h3>{product.title[locale]}</h3><p>{product.text[locale]}</p><div className="tags">{product.tags[locale].map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}
        </div>

        <div className="catalog-intro"><p className="eyebrow">{t.fullRange}</p><div><h2>{t.fullTitle}</h2><p>{t.fullText}</p></div></div>
        <div className="catalog-groups">
          {catalogGroups.map((group, index) => <details key={group.title.bg} open={index === 0}><summary><span className="catalog-index">{String(index + 1).padStart(2, "0")}</span><strong>{group.title[locale]}</strong><small>{group.models.length} {t.variants}</small><b aria-hidden="true">+</b></summary><div className="model-list">{group.models.map((model, modelIndex) => <span key={model.bg}><i>{String(modelIndex + 1).padStart(2, "0")}</i>{model[locale]}</span>)}</div></details>)}
        </div>
      </section>

      <section className="quality" id="quality"><div className="quality-copy"><p className="eyebrow light">{t.qualityLabel}</p><h2>{t.qualityTitle}</h2><p>{t.qualityText}</p><ul>{t.qualities.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul></div><div className="quality-image"><img src={`${imageRoot}/steel-tipper.jpg`} alt="BODEX"/></div></section>

      <section className="section about" id="about"><p className="eyebrow">{t.since}</p><div><h2>{t.aboutTitle}</h2><div className="about-copy">{t.about.map(item => <p key={item}>{item}</p>)}</div></div></section>

      <section className="contact" id="contact"><div><p className="eyebrow">{t.talk}</p><h2>{t.contactTitle}</h2></div><div className="contact-card"><p>{t.contactText}</p><a className="button dark" href="mailto:bodexbg@gmail.com?subject=BODEX%20inquiry">{t.send} <span>→</span></a><div className="contact-lines"><a href="tel:+359899809607">+359 89 980 9607</a><a href="mailto:bodexbg@gmail.com">bodexbg@gmail.com</a></div></div></section>

      <footer><a className="brand brand-footer" href="#top"><span className="brand-mark">B</span><span><strong>BODEX</strong><small>BULGARIA · ALGERIA</small></span></a><p>{t.footer}</p><p>© {new Date().getFullYear()} BODEX</p></footer>
    </main>
  );
}
