const products = [
  {
    title: "Самосвални полуремаркета",
    subtitle: "Стоманени и алуминиеви",
    image: "/products/steel-tipper.jpg",
    text: "Конфигурации с клапа, комбинирана врата и решения за скрап. Изработка от Hardox® 450/500 Tuf и Domex.",
    tags: ["2–4 оси", "Hardox®", "По поръчка"],
  },
  {
    title: "SUPER LIGHT",
    subtitle: "Алуминиева рама и кош",
    image: "/products/super-light.jpg",
    text: "Олекотена конструкция с оребрен или панелен алуминиев кош за максимален полезен товар.",
    tags: ["Ниско тегло", "3 оси", "Алуминий"],
  },
  {
    title: "Нискорамни полуремаркета",
    subtitle: "За тежка и извънгабаритна техника",
    image: "/products/low-loader.jpg",
    text: "Триосни, четириосни и многоосни изпълнения, включително управляеми оси за сложни транспортни задачи.",
    tags: ["3+ оси", "Управляеми оси", "Тежки товари"],
  },
  {
    title: "Платформи",
    subtitle: "Бордови и разтегателни",
    image: "/products/platform.jpg",
    text: "Бордови платформи, изпълнения с кран HDS и многофункционални разтегателни конструкции.",
    tags: ["Разтегателни", "HDS", "Многофункционални"],
  },
];

const moreProducts = [
  "Подвижен под",
  "Цистерни",
  "Контейнеровози",
  "Брезентови полуремаркета",
  "Ремаркета 2, 3 и 4 оси",
  "Превоз на дървесина",
  "Специализирани превозни средства",
  "Надстройки за камиони",
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="BODEX Bulgaria начало">
          <span className="brand-mark">B</span>
          <span><strong>BODEX</strong><small>BULGARIA</small></span>
        </a>
        <nav aria-label="Основна навигация">
          <a href="#products">Продукти</a>
          <a href="#quality">Качество</a>
          <a href="#about">За BODEX</a>
        </nav>
        <a className="button button-small" href="#contact">Запитване</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Полуремаркета за професионалисти</p>
          <h1>Създадени за<br/><em>тежката работа.</em></h1>
          <p className="hero-lead">Над 30 години инженерна традиция. Около 100 типа превозни средства, конфигурирани за вашия товар и маршрут.</p>
          <div className="hero-actions">
            <a className="button" href="#products">Разгледайте моделите <span>→</span></a>
            <a className="text-link" href="tel:+359899809607">+359 89 980 9607</a>
          </div>
          <div className="hero-stats" aria-label="Ключови факти">
            <div><strong>30+</strong><span>години опит</span></div>
            <div><strong>100</strong><span>типа превозни средства</span></div>
            <div><strong>12 t</strong><span>товароносимост на ос</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-label"><span>01</span> SUPER LIGHT</div>
          <img src="/products/super-light.jpg" alt="Алуминиево полуремарке BODEX SUPER LIGHT" />
          <div className="yellow-block" aria-hidden="true"></div>
        </div>
      </section>

      <section className="ticker" aria-label="Основни компоненти">
        <span>SAF / BPW</span><i>•</i><span>WABCO / KNORR</span><i>•</i><span>HARDOX®</span><i>•</i><span>HELLA / ASPÖCK LED</span><i>•</i><span>HYVA / BINOTTO</span>
      </section>

      <section className="section products" id="products">
        <div className="section-head">
          <div><p className="eyebrow">Нашата гама</p><h2>Правилното решение<br/>за всеки товар.</h2></div>
          <p>От стандартна конфигурация до специализиран проект — всяко полуремарке е проектирано с мисъл за ефективност, безопасност и дълъг живот.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.title}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <span className="card-number">0{index + 1}</span>
              </div>
              <div className="product-body">
                <p className="product-subtitle">{product.subtitle}</p>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <div className="tags">{product.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="more-products">
          <p className="eyebrow">Още решения</p>
          <div>{moreProducts.map((item, index) => <span key={item}><b>{String(index + 5).padStart(2, "0")}</b>{item}</span>)}</div>
        </div>
      </section>

      <section className="quality" id="quality">
        <div className="quality-copy">
          <p className="eyebrow light">Инженерно качество</p>
          <h2>Компоненти, на които можете да разчитате.</h2>
          <p>Шасита с оси SAF и BPW, спирачни системи Wabco или Knorr, LED осветление Hella или Aspöck и хидравлика от водещи производители.</p>
          <ul>
            <li><span>01</span> Европейски компоненти от доказани марки</li>
            <li><span>02</span> Конструкции от Hardox® и Domex</li>
            <li><span>03</span> Индивидуални и нестандартни решения</li>
          </ul>
        </div>
        <div className="quality-image"><img src="/products/steel-tipper.jpg" alt="Стоманено самосвално полуремарке BODEX" /></div>
      </section>

      <section className="section about" id="about">
        <p className="eyebrow">BODEX от 1991</p>
        <div>
          <h2>Опитът се измерва<br/>в изминати километри.</h2>
          <div className="about-copy">
            <p>BODEX започва с ремонт на полуремаркета и се развива до производител с портфолио от около 100 типа превозни средства.</p>
            <p>Производството съчетава модерна машинна база, собствен инженерeн опит и гъвкавост при нестандартни транспортни задачи.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Нека поговорим</p>
          <h2>Какво трябва<br/>да превозите?</h2>
        </div>
        <div className="contact-card">
          <p>Разкажете ни за товара, маршрутите и желаната конфигурация. Ще ви насочим към подходящото решение.</p>
          <a className="button dark" href="mailto:bodexbg@gmail.com?subject=Запитване за полуремарке BODEX">Изпратете запитване <span>→</span></a>
          <div className="contact-lines">
            <a href="tel:+359899809607">+359 89 980 9607</a>
            <a href="mailto:bodexbg@gmail.com">bodexbg@gmail.com</a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand brand-footer" href="#top"><span className="brand-mark">B</span><span><strong>BODEX</strong><small>BULGARIA</small></span></a>
        <p>Полуремаркета и транспортни решения за българския пазар.</p>
        <p>© {new Date().getFullYear()} BODEX Bulgaria</p>
      </footer>
    </main>
  );
}
