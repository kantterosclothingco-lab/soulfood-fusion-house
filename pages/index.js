import Head from "next/head";
import Link from "next/link";

const bestSellers = [
  {
    name: "Chicken Inasal",
    price: "A$24.90",
    description: "Tasty deep fried marinated chicken served with Soulfood special sauce.",
  },
  {
    name: "Pork Ribs BBQ Meal Deal",
    price: "A$32.00",
    description: "A rich and smoky favorite with bold barbecue flavor.",
  },
  {
    name: "Crispy Pork Belly",
    price: "A$24.80",
    description: "Golden, crunchy, and packed with savory flavor.",
  },
  {
    name: "Beef Tapa",
    price: "A$26.00",
    description: "A comforting classic with tender beef and soulful seasoning.",
  },
  {
    name: "Asian Fried Calamari",
    price: "A$16.60",
    description: "Salt and pepper breaded calamari with yosu mayo and signature vinegar dip.",
  },
  {
    name: "Mango Graham Cake",
    price: "A$15.00",
    description: "A chilled sweet favorite to finish your meal.",
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
          content="Soulfood Fusion House - Where good food meets your soulful cravings."
        />
      </Head>

      <header className="topbar">
        <div className="brand">Soulfood Fusion House</div>
        <nav className="nav">
          <a href="#bestsellers">Best Sellers</a>
          <a href="#about">About</a>
          <a href="#visit">Visit</a>
          <Link href="/menu" className="menuButton">
            ☰ Menu
          </Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="overlay" />
          <div className="heroContent">
            <p className="eyebrow">BENDIGO, VIC</p>
            <h1>WHERE GOOD FOOD MEETS YOUR SOULFUL CRAVINGS!</h1>
            <p className="heroText">
              A warm, modern food experience with bold Filipino fusion flavors,
              comforting classics, and a welcoming restaurant atmosphere.
            </p>
            <div className="heroActions">
              <Link href="/menu" className="primaryBtn">
                View Full Menu
              </Link>
              <a href="#visit" className="secondaryBtn">
                Visit Us
              </a>
            </div>
          </div>
        </section>

        <section className="intro" id="about">
          <div className="sectionHeader">
            <p className="mini">WELCOME</p>
            <h2>Modern comfort food with a soulful fusion twist</h2>
            <p>
              Soulfood Fusion House brings together crowd-favorite mains,
              shareable plates, flavorful appetisers, and desserts made for
              comfort and celebration.
            </p>
          </div>
        </section>

        <section className="bestsellers" id="bestsellers">
          <div className="sectionHeader">
            <p className="mini">BEST SELLERS</p>
            <h2>Signature favorites from the kitchen</h2>
            <p>
              Start with the dishes people come back for again and again.
            </p>
          </div>

          <div className="grid">
            {bestSellers.map((item) => (
              <article className="card" key={item.name}>
                <div className="cardImage">
                  <span>{item.name}</span>
                </div>
                <div className="cardBody">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="center">
            <Link href="/menu" className="primaryBtn">
              See Full Food Menu
            </Link>
          </div>
        </section>

        <section className="visit" id="visit">
          <div className="visitGrid">
            <div className="visitCard">
              <p className="mini">LOCATION & HOURS</p>
              <h2>Come dine with us in Bendigo</h2>

              <div className="infoBlock">
                <h4>Address</h4>
                <p>8 High Street</p>
                <p>Bendigo, VIC 3550</p>
              </div>

              <div className="infoBlock">
                <h4>Contact</h4>
                <p>03 5441 2752</p>
                <p>soulfoodfusionhouse@gmail.com</p>
              </div>

              <div className="infoBlock">
                <h4>Hours</h4>
                <p><strong>Monday</strong> — CLOSED</p>
                <p><strong>Tuesday - Friday</strong> — 11:30am to 3:00pm Lunch</p>
                <p><strong>Tuesday - Friday</strong> — 5:00pm to 5:00pm Dinner</p>
                <p><strong>Saturday</strong> — 11:30am - 10:00pm Dinner</p>
                <p><strong>Sunday</strong> — 11:30pm - 5:00pm</p>
              </div>

              <a
                className="secondaryBtn inlineBtn"
                href="https://maps.google.com/?q=8+High+Street+Bendigo+VIC+3550"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </div>

            <div className="quoteCard">
              <div>
                <p className="mini">SOULFOOD FUSION HOUSE</p>
                <h3>Made for cravings, family meals, and memorable comfort food moments.</h3>
                <p>
                  This homepage is designed to highlight your best sellers first,
                  then move customers to the full menu page.
                </p>
                <Link href="/menu" className="primaryBtn">
                  Open Menu Page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© Soulfood Fusion House</p>
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
          color: #2a2019;
          background: #fbf7f2;
        }

        a {
          text-decoration: none;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 28px;
          background: rgba(255, 250, 245, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #eadfd3;
        }

        .brand {
          font-size: 1.2rem;
          font-weight: 700;
          color: #4c2f1d;
        }

        .nav {
          display: flex;
          gap: 18px;
          align-items: center;
          flex-wrap: wrap;
        }

        .nav a {
          color: #5a4334;
          font-weight: 600;
        }

        .menuButton {
          background: #4c2f1d;
          color: white !important;
          padding: 10px 16px;
          border-radius: 999px;
        }

        .hero {
          position: relative;
          min-height: 78vh;
          display: flex;
          align-items: center;
          padding: 70px 28px;
          background:
            linear-gradient(rgba(34, 20, 12, 0.55), rgba(34, 20, 12, 0.55)),
            url("https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80")
              center/cover no-repeat;
        }

        .heroContent {
          position: relative;
          max-width: 760px;
          color: white;
          z-index: 2;
        }

        .eyebrow,
        .mini {
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 0.78rem;
          color: #b97c48;
          font-weight: 700;
        }

        .hero h1 {
          font-size: clamp(2.8rem, 7vw, 5.2rem);
          line-height: 1;
          margin: 14px 0;
          max-width: 850px;
        }

        .heroText {
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 650px;
          color: #f8eee6;
        }

        .heroActions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 26px;
        }

        .primaryBtn,
        .secondaryBtn {
          display: inline-block;
          padding: 14px 20px;
          border-radius: 999px;
          font-weight: 700;
        }

        .primaryBtn {
          background: #b97c48;
          color: white;
        }

        .secondaryBtn {
          border: 1px solid #cdbba9;
          color: #4c2f1d;
          background: white;
        }

        .intro,
        .bestsellers,
        .visit {
          padding: 72px 28px;
          max-width: 1250px;
          margin: 0 auto;
        }

        .sectionHeader {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 36px;
        }

        .sectionHeader h2 {
          font-size: clamp(2rem, 4vw, 3.2rem);
          margin: 10px 0 14px;
          color: #3f281a;
        }

        .sectionHeader p {
          color: #6d5848;
          line-height: 1.8;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .card {
          background: white;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 14px 40px rgba(54, 31, 14, 0.08);
          border: 1px solid #f0e4d7;
        }

        .cardImage {
          height: 220px;
          display: flex;
          align-items: end;
          padding: 18px;
          background:
            linear-gradient(rgba(62, 33, 18, 0.18), rgba(62, 33, 18, 0.48)),
            url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80")
              center/cover no-repeat;
        }

        .cardImage span {
          color: white;
          font-weight: 700;
          font-size: 1.05rem;
        }

        .cardBody {
          padding: 22px;
        }

        .cardBody h3 {
          margin-top: 0;
          color: #3f281a;
        }

        .cardBody p {
          color: #6d5848;
          line-height: 1.7;
          min-height: 72px;
        }

        .cardBody strong {
          color: #b97c48;
          font-size: 1.05rem;
        }

        .center {
          text-align: center;
          margin-top: 34px;
        }

        .visitGrid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 24px;
        }

        .visitCard,
        .quoteCard {
          background: white;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 14px 40px rgba(54, 31, 14, 0.08);
          border: 1px solid #f0e4d7;
        }

        .visitCard h2,
        .quoteCard h3 {
          color: #3f281a;
        }

        .infoBlock {
          margin-bottom: 22px;
        }

        .infoBlock h4 {
          margin-bottom: 8px;
          color: #4c2f1d;
        }

        .infoBlock p {
          margin: 6px 0;
          color: #6d5848;
          line-height: 1.6;
        }

        .quoteCard {
          display: flex;
          align-items: center;
          background:
            linear-gradient(rgba(56, 32, 18, 0.72), rgba(56, 32, 18, 0.72)),
            url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80")
              center/cover no-repeat;
          color: white;
        }

        .quoteCard .mini,
        .quoteCard p {
          color: #f1e5db;
        }

        .quoteCard h3 {
          color: white;
          font-size: 2rem;
          line-height: 1.3;
        }

        .inlineBtn {
          margin-top: 8px;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 28px 40px;
          max-width: 1250px;
          margin: 0 auto;
          color: #6d5848;
        }

        .footer a {
          color: #4c2f1d;
          font-weight: 700;
        }

        @media (max-width: 960px) {
          .grid,
          .visitGrid {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: auto;
            padding: 60px 20px;
          }

          .topbar {
            padding: 16px 18px;
          }

          .intro,
          .bestsellers,
          .visit,
          .footer {
            padding-left: 18px;
            padding-right: 18px;
          }
        }
      `}</style>
    </>
  );
}
