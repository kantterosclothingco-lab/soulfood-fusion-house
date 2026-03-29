import Head from "next/head";
import Link from "next/link";

const bestSellers = [
  {
    name: "Filo BBQ Ribs",
    price: "$29.9",
    image: "/images/menu/filo-bbq-ribs.jpg",
    description: "Filo style pork ribs barbecue served with rich smoky flavor and a premium plated finish.",
  },
  {
    name: "Grilled Chicken Inasal",
    price: "$24.9",
    image: "/images/menu/grilled-chicken-inasal.jpg",
    description: "Char-grilled chicken marinated in signature Soulfood flavor and served with your choice of sides.",
  },
  {
    name: "Soulfood Burger",
    price: "$26",
    image: "/images/menu/soulfood-burger.jpg",
    description: "Grilled Angus beef with melted cheese, bacon, pineapple, and smashed avo.",
  },
  {
    name: "Crispy Pork Belly",
    price: "$26.00",
    image: "/images/menu/crispy-pork-belly-bagnet.jpg",
    description: "Crunchy, savory, and deeply satisfying with the signature Soulfood touch.",
  },
  {
    name: "Beef Tapa (Tapsilog)",
    price: "$28.60",
    image: "/images/menu/beef-tapa-tapsilog.jpg",
    description: "A comforting favorite with rich flavor, perfectly suited for soulful cravings.",
  },
  {
    name: "Asian Fried Calamari",
    price: "$17.60",
    image: "/images/menu/asian-fried-calamari.jpg",
    description: "Salt and pepper breaded calamari served with salad, yosu mayo, and signature vinegar dip.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Soulfood Fusion House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Soulfood Fusion House — Where good food meets your soulful cravings."
        />
      </Head>

      <header className="topbar">
        <div className="brandWrap">
          <span className="brandMark">SF</span>
          <div>
            <h2>Soulfood Fusion House</h2>
            <p>Bendigo, VIC</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#bestsellers">Best Sellers</a>
          <a href="#visit">Visit</a>
          <Link href="/menu" className="menuBtn">
            ☰ Menu
          </Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="heroOverlay" />
          <div className="heroContent">
            <p className="eyebrow">Luxury Filipino Fusion Dining</p>
            <h1>WHERE GOOD FOOD MEETS YOUR SOULFUL CRAVINGS!</h1>
            <p className="heroText">
              Welcome to Soulfood Fusion House — a warm, elevated food experience
              where bold Filipino flavors, premium comfort food, and modern
              hospitality come together beautifully.
            </p>

            <div className="heroActions">
              <Link href="/menu" className="primaryBtn">
                Explore Full Menu
              </Link>
              <a href="#visit" className="secondaryBtn">
                Visit Us
              </a>
            </div>
          </div>
        </section>

        <section className="aboutSection" id="about">
          <div className="sectionIntro">
            <p className="sectionLabel">About Us</p>
            <h2>A richer dining experience with heart, comfort, and bold flavor</h2>
            <p>
              Soulfood Fusion House is designed for people who love flavorful food,
              warm service, and memorable meals. This luxury-style homepage puts your
              best dishes first while creating a strong modern restaurant identity.
            </p>
          </div>

          <div className="featureGrid">
            <article className="featureCard">
              <h3>Premium Presentation</h3>
              <p>
                A refined visual style inspired by elegant food brands, made to help
                your restaurant feel modern and polished.
              </p>
            </article>
            <article className="featureCard">
              <h3>Best Sellers First</h3>
              <p>
                The homepage highlights your most popular dishes, then leads guests
                directly into the full menu experience.
              </p>
            </article>
            <article className="featureCard">
              <h3>Ready for Growth</h3>
              <p>
                This layout can later support online ordering, table reservations,
                AI chat, promotions, and a full smart restaurant system.
              </p>
            </article>
          </div>
        </section>

        <section className="bestSellerSection" id="bestsellers">
          <div className="sectionIntro center">
            <p className="sectionLabel">Best Sellers</p>
            <h2>Signature dishes guests keep coming back for</h2>
            <p>
              A curated first look at the menu — rich, flavorful, and made to impress.
            </p>
          </div>

          <div className="dishGrid">
            {bestSellers.map((item) => (
              <article className="dishCard" key={item.name}>
                <div className="dishImageWrap">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="dishBody">
                  <div className="dishTop">
                    <h3>{item.name}</h3>
                    <span>{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="ctaCenter">
            <Link href="/menu" className="primaryBtn">
              See Complete Menu
            </Link>
          </div>
        </section>

        <section className="visitSection" id="visit">
          <div className="visitGrid">
            <div className="visitCard">
              <p className="sectionLabel">Location & Hours</p>
              <h2>Visit Soulfood Fusion House in Bendigo</h2>

              <div className="infoGroup">
                <h4>Address</h4>
                <p>8 High Street</p>
                <p>Bendigo, VIC 3550</p>
              </div>

              <div className="infoGroup">
                <h4>Contact</h4>
                <p>03 5441 2752</p>
                <p>soulfoodfusionhouse@gmail.com</p>
              </div>

              <div className="infoGroup">
                <h4>Opening Hours</h4>
                <p><strong>Monday</strong> — CLOSED</p>
                <p><strong>Tuesday - Friday</strong> — 11:30am to 3:00pm Lunch</p>
                <p><strong>Tuesday - Friday</strong> — 5:00pm to 5:00pm Dinner</p>
                <p><strong>Saturday</strong> — 11:30am - 10:00pm Dinner</p>
                <p><strong>Sunday</strong> — 11:30pm - 5:00pm</p>
              </div>

              <a
                href="https://maps.google.com/?q=8+High+Street+Bendigo+VIC+3550"
                target="_blank"
                rel="noreferrer"
                className="secondaryBtn inlineBtn"
              >
                Get Directions
              </a>
            </div>

            <div className="quotePanel">
              <div className="quoteOverlay" />
              <div className="quoteContent">
                <p className="sectionLabel light">Soulful Dining</p>
                <h3>Designed for cravings, family dining, and memorable comfort food moments.</h3>
                <p>
                  Your homepage now feels more premium and restaurant-focused, while
                  the full menu page keeps everything easy to explore.
                </p>
                <Link href="/menu" className="goldBtn">
                  Open Full Menu
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Soulfood Fusion House</strong>
          <p>Where good food meets your soulful cravings.</p>
        </div>
        <Link href="/menu">Menu</Link>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f8f4ee;
          color: #2b1c15;
        }

        a {
          text-decoration: none;
        }

        img {
          display: block;
          width: 100%;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 28px;
          background: rgba(17, 10, 8, 0.88);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(212, 174, 112, 0.18);
          flex-wrap: wrap;
          gap: 16px;
        }

        .brandWrap {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .brandMark {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #c79356, #f1d099);
          color: #1d120d;
          font-weight: 700;
        }

        .brandWrap h2 {
          margin: 0;
          font-size: 1.1rem;
          color: #fff8f0;
        }

        .brandWrap p {
          margin: 3px 0 0;
          color: #d9c8b8;
          font-size: 0.85rem;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .nav a {
          color: #f2e6d8;
          font-weight: 600;
        }

        .menuBtn {
          padding: 11px 18px;
          border-radius: 999px;
          background: linear-gradient(135deg, #c79356, #e7c78a);
          color: #1e120d !important;
          font-weight: 700;
        }

        .hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          padding: 90px 28px;
          background:
            url("/images/menu/filo-bbq-ribs.jpg") center/cover no-repeat;
          overflow: hidden;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(17, 10, 8, 0.86) 0%, rgba(17, 10, 8, 0.62) 45%, rgba(17, 10, 8, 0.35) 100%);
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }

        .eyebrow,
        .sectionLabel {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.78rem;
          font-weight: 700;
          color: #d8b27d;
        }

        .light {
          color: #f0d8b3;
        }

        .hero h1 {
          font-size: clamp(2.8rem, 7vw, 5.8rem);
          line-height: 0.96;
          margin: 18px 0;
          color: #fff8f0;
          max-width: 880px;
        }

        .heroText {
          color: #f2e6d8;
          font-size: 1.08rem;
          line-height: 1.8;
          max-width: 650px;
        }

        .heroActions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .primaryBtn,
        .secondaryBtn,
        .goldBtn {
          display: inline-block;
          padding: 14px 22px;
          border-radius: 999px;
          font-weight: 700;
          transition: 0.25s ease;
        }

        .primaryBtn,
        .goldBtn {
          background: linear-gradient(135deg, #c79356, #ebce97);
          color: #1e120d;
        }

        .secondaryBtn {
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid #dcc7af;
          color: #3b261b;
        }

        .primaryBtn:hover,
        .goldBtn:hover,
        .secondaryBtn:hover,
        .menuBtn:hover {
          transform: translateY(-2px);
        }

        .aboutSection,
        .bestSellerSection,
        .visitSection {
          max-width: 1280px;
          margin: 0 auto;
          padding: 82px 28px;
        }

        .sectionIntro {
          max-width: 860px;
          margin-bottom: 36px;
        }

        .sectionIntro.center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .sectionIntro h2 {
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.1;
          margin: 12px 0 14px;
          color: #2e1d15;
        }

        .sectionIntro p {
          line-height: 1.8;
          color: #6f5a49;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .featureCard {
          background: linear-gradient(180deg, #ffffff, #f8efe3);
          border: 1px solid #ead7bf;
          border-radius: 24px;
          padding: 26px;
          box-shadow: 0 16px 40px rgba(53, 31, 18, 0.06);
        }

        .featureCard h3 {
          margin-top: 0;
          color: #332116;
        }

        .featureCard p {
          margin-bottom: 0;
          color: #6f5a49;
          line-height: 1.75;
        }

        .dishGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .dishCard {
          overflow: hidden;
          border-radius: 24px;
          background: #fff;
          border: 1px solid #ead7bf;
          box-shadow: 0 18px 42px rgba(53, 31, 18, 0.08);
          transition: 0.3s ease;
        }

        .dishCard:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(53, 31, 18, 0.12);
        }

        .dishImageWrap {
          height: 260px;
          overflow: hidden;
        }

        .dishImageWrap img {
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .dishCard:hover .dishImageWrap img {
          transform: scale(1.05);
        }

        .dishBody {
          padding: 24px;
        }

        .dishTop {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 10px;
        }

        .dishTop h3 {
          margin: 0;
          color: #332116;
        }

        .dishTop span {
          color: #b57a39;
          font-weight: 700;
          white-space: nowrap;
        }

        .dishBody p {
          margin: 0;
          color: #6f5a49;
          line-height: 1.75;
        }

        .ctaCenter {
          text-align: center;
          margin-top: 36px;
        }

        .visitGrid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 24px;
        }

        .visitCard {
          background: linear-gradient(180deg, #ffffff, #f8efe3);
          border: 1px solid #ead7bf;
          border-radius: 26px;
          padding: 30px;
          box-shadow: 0 18px 42px rgba(53, 31, 18, 0.08);
        }

        .visitCard h2 {
          margin-top: 12px;
          color: #2e1d15;
        }

        .infoGroup {
          margin-top: 24px;
        }

        .infoGroup h4 {
          margin: 0 0 10px;
          color: #3a2418;
        }

        .infoGroup p {
          margin: 6px 0;
          color: #6f5a49;
          line-height: 1.65;
        }

        .inlineBtn {
          margin-top: 20px;
        }

        .quotePanel {
          position: relative;
          min-height: 100%;
          border-radius: 26px;
          overflow: hidden;
          background:
            url("/images/menu/grilled-chicken-inasal.jpg") center/cover no-repeat;
          box-shadow: 0 18px 42px rgba(53, 31, 18, 0.08);
        }

        .quoteOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(18, 10, 8, 0.48), rgba(18, 10, 8, 0.8));
        }

        .quoteContent {
          position: relative;
          z-index: 2;
          padding: 34px;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: end;
        }

        .quoteContent h3 {
          color: #fff7ee;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          line-height: 1.2;
          margin: 12px 0;
        }

        .quoteContent p {
          color: #eadbcb;
          line-height: 1.75;
          max-width: 520px;
        }

        .footer {
          max-width: 1280px;
          margin: 0 auto;
          padding: 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          border-top: 1px solid #ead7bf;
          color: #6f5a49;
          flex-wrap: wrap;
        }

        .footer strong {
          display: block;
          color: #332116;
          margin-bottom: 6px;
        }

        .footer p {
          margin: 0;
        }

        .footer a {
          color: #3a2418;
          font-weight: 700;
        }

        @media (max-width: 980px) {
          .featureGrid,
          .dishGrid,
          .visitGrid {
            grid-template-columns: 1fr;
          }

          .topbar {
            padding: 16px 18px;
          }

          .hero {
            min-height: auto;
            padding: 80px 18px;
          }

          .aboutSection,
          .bestSellerSection,
          .visitSection,
          .footer {
            padding-left: 18px;
            padding-right: 18px;
          }
        }
      `}</style>
    </>
  );
}
