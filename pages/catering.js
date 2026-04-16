import Head from "next/head";
import Link from "next/link";

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=8+High+St,+Bendigo+VIC+3550,+Australia";

export default function CateringPage() {
  return (
    <>
      <Head>
        <title>Soulfood Fusion Catering</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Soulfood Fusion Catering in Bendigo for events, parties, office catering, and special occasions."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="topbar">
        <Link href="/" className="brand">
          Soulfood Fusion Catering
        </Link>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#packages">Packages</a>
          <a href="#menus">Menus</a>
          <a href="#contact">Contact</a>
          <Link href="/consultation" className="consultBtn">
            Free Consultation
          </Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <video autoPlay muted loop playsInline className="heroVideo">
            <source src="/videos/catering.mp4" type="video/mp4" />
          </video>

          <div className="heroOverlay" />

          <div className="heroContent">
            <p className="eyebrow">Soulfood Fusion Catering</p>
            <h1>Catering for events, gatherings, and shared meals</h1>
            <p>
              Filipino-inspired dishes, generous servings, and flexible catering
              for birthdays, private events, corporate functions, and special
              occasions.
            </p>

            <div className="heroButtons">
              <a href="#about" className="primaryBtn">
                About
              </a>
              <a href="#menus" className="secondaryBtn">
                Menus
              </a>
              <a href="#contact" className="secondaryBtn">
                Contact
              </a>
              <Link href="/consultation" className="consultBtn">
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="section introSection">
          <p className="introText">
            A Bendigo-based catering service offering warm hospitality,
            flavourful food, and reliable service for memorable events.
          </p>
        </section>

        <section className="section contentSection" id="about">
          <div className="textBlock narrow">
            <p className="sectionLabel">About</p>
            <h2>Simple catering that feels generous and well-planned</h2>
            <p>
              Soulfood Fusion Catering is designed for birthdays, private
              functions, office lunches, and family gatherings. Our focus is on
              food that is satisfying, easy to serve, and enjoyable for groups.
            </p>
          </div>
        </section>

        <section className="section contentSection" id="packages">
          <div className="textBlock narrow">
            <p className="sectionLabel">Packages</p>
            <h2>Soulfood Catering Menu Packages</h2>
            <p>
              Minimum of 50 pax for package catering. Additional dishes and
              dessert menu options can be added to suit your event.
            </p>
          </div>

          <div className="packageGrid">
            <article className="packageCard">
              <h3>Bronze</h3>
              <ul>
                <li>1 rice</li>
                <li>4 mains choice of vegetable, noodles, chicken, pork or beef</li>
                <li>1 mini dessert</li>
                <li>Can soda</li>
                <li>Bottle water</li>
                <li>Minimum 50 pax</li>
              </ul>
            </article>

            <article className="packageCard">
              <h3>Silver</h3>
              <ul>
                <li>1 rice</li>
                <li>1 appetizer</li>
                <li>4 mains choice of vegetable, noodles or pasta, chicken, pork or beef</li>
                <li>2 kinds of mini desserts</li>
                <li>Can soda</li>
                <li>Bottle water</li>
                <li>Minimum 50 pax</li>
              </ul>
            </article>

            <article className="packageCard">
              <h3>Gold</h3>
              <ul>
                <li>1 rice</li>
                <li>1 salad</li>
                <li>1 appetizer</li>
                <li>5 mains choice of vegetables, noodles or pasta, chicken, pork or beef</li>
                <li>1 fruit platter</li>
                <li>2 kinds of mini dessert</li>
                <li>Can soda</li>
                <li>Bottle water</li>
                <li>Minimum 50 pax</li>
              </ul>
            </article>

            <article className="packageCard">
              <h3>Platinum</h3>
              <ul>
                <li>1 rice</li>
                <li>1 salad</li>
                <li>1 appetizer</li>
                <li>5 mains choice of vegetables, noodles or pasta, chicken, pork and beef</li>
                <li>5 kilo lechon belly</li>
                <li>1 antipasto</li>
                <li>Fruit platter</li>
                <li>2 kinds mini dessert</li>
                <li>Can soda</li>
                <li>Bottle water</li>
                <li>Minimum 50 pax</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section contentSection" id="menus">
          <div className="textBlock menusIntro">
            <p className="sectionLabel">Menus</p>
            <h2>Menus designed around the style of your event</h2>
            <p>
              The menu is at the heart of every successful catered event. At
              Soulfood Fusion Catering, we understand that no two functions are
              the same, and the right menu helps shape the overall atmosphere of
              the occasion.
            </p>
          </div>

          <div className="menuGrid">
            <article className="menuCard">
              <h3>Entree / Starter</h3>
              <p>
                Pork BBQ Skewers, Chicken BBQ Skewers, Chicken Satay Skewers,
                Chicken Teriyaki Skewers, Cajun Prawn and bacon, Beef Kofta,
                Cheesy Beef Taco's, Fried Pork Boritos, Spring roll veg /
                Lumpiang Toge, Spring roll meat / Lumpiang Shanghai, Cheese
                burger spring roll, Pulled pork adobo slider, Steam Tofu with
                meat balls, Cheese Arancini balls, Baked Mussel Cheese
                Pimiento.
              </p>
            </article>

            <article className="menuCard">
              <h3>Salad</h3>
              <p>
                Summer salad with prawn, Thai salad with crispy chicken, Caesar
                salad with chicken, Greek salad, Mediterranean Salad, Quinua
                salad with goat cheese.
              </p>
            </article>

            <article className="menuCard">
              <h3>Potato Dish</h3>
              <p>
                Creamy Mashed Potato, Sweet Potato mashed, Lyonnaise Potatoes,
                Herb Roast Potato, Chips, Potato wedges.
              </p>
            </article>

            <article className="menuCard">
              <h3>Pasta</h3>
              <p>
                Baked mac & cheese, Beef Lasagne, Vegetable Lasagne, Spinach
                Ricotta Lasagne, Pinoy Spagetti, Pasta Bolognese, Meat & Cheese
                Cannelloni, Spinach Ricotta, Chicken Pesto pasta, Beef Ragu
                pasta, Smoke salmon pesto pasta, Clam pasta, Creamy Carbonara
                pasta.
              </p>
            </article>

            <article className="menuCard">
              <h3>Noodles</h3>
              <p>
                Vegetable Stir fry noodles (V) (G), Miki Guisado noodles,
                Special Palabok, Pancit Bihon, Pad thai noodles.
              </p>
            </article>

            <article className="menuCard">
              <h3>Rice</h3>
              <p>
                Plain steam rice, Java rice, garlic rice, young chow fried
                rice, vegetable fried rice, Nasi goreng, Rice pilaf, Seafood
                Paella Valenciana.
              </p>
            </article>
          </div>
        </section>

        <section className="section contentSection" id="contact">
          <div className="textBlock narrow">
            <p className="sectionLabel">Contact</p>
            <h2>Get in touch about your event</h2>
          </div>

          <div className="contactGrid">
            <div className="contactCard">
              <p className="contactLabel">Phone</p>
              <p>2413326097</p>
            </div>

            <div className="contactCard">
              <p className="contactLabel">Email</p>
              <p>soulfoodfusionhouse@gmail.com</p>
            </div>

            <div className="contactCard">
              <p className="contactLabel">Address</p>
              <p>8 High St, Bendigo VIC 3550</p>
            </div>
          </div>

          <div className="contactButtons">
            <a href="tel:2413326097" className="primaryBtn">
              Call Now
            </a>
            <a
              href="mailto:soulfoodfusionhouse@gmail.com"
              className="secondaryBtn"
            >
              Email Us
            </a>
            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="secondaryBtn"
            >
              Open Map
            </a>
            <Link href="/consultation" className="consultBtn">
              Free Consultation
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Soulfood Fusion Catering</p>
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
          font-family: "Inter", sans-serif;
          background: #faf7f2;
          color: #2a1c15;
        }

        a {
          text-decoration: none;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background: #111111;
          flex-wrap: wrap;
          gap: 14px;
        }

        .brand,
        .nav a {
          color: #ffffff;
          font-weight: 500;
        }

        .nav {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          align-items: center;
        }

        .hero {
          position: relative;
          width: 100%;
          height: 90vh;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .heroVideo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.54);
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 900px;
          padding: 60px;
          margin-left: 80px;
          color: #ffffff;
        }

        .eyebrow,
        .sectionLabel {
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .eyebrow {
          color: rgba(255, 255, 255, 0.75);
        }

        .sectionLabel {
          color: #b57a39;
        }

        .heroContent h1 {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.08;
          font-weight: 500;
          letter-spacing: -0.02em;
          margin: 16px 0;
        }

        .heroContent p {
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.88);
          max-width: 560px;
        }

        .heroButtons,
        .contactButtons {
          margin-top: 24px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primaryBtn,
        .secondaryBtn,
        .consultBtn {
          display: inline-block;
          padding: 12px 20px;
          border-radius: 999px;
          font-weight: 500;
          font-size: 0.94rem;
        }

        .primaryBtn {
          background: #c79356;
          color: #1e120d;
        }

        .secondaryBtn {
          border: 1px solid #d5c6b4;
          color: #2a1c15;
          background: #ffffff;
        }

        .consultBtn {
          background: #2f4f3e;
          color: #ffffff !important;
          border: 1px solid #2f4f3e;
        }

        .section {
          padding: 64px 40px;
        }

        .introSection {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          padding-top: 36px;
        }

        .introText {
          font-size: 1.02rem;
          line-height: 1.9;
          color: #5f4a3d;
          max-width: 860px;
          margin: 0 auto;
        }

        .contentSection {
          max-width: 1180px;
          margin: 0 auto;
        }

        .textBlock {
          max-width: 860px;
          margin: 0 auto 30px;
          text-align: center;
        }

        .textBlock.narrow {
          max-width: 760px;
        }

        .textBlock h2 {
          font-size: clamp(1.9rem, 4vw, 2.8rem);
          margin: 8px 0 12px;
          color: #2e1d15;
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .textBlock p {
          line-height: 1.82;
          color: #6f5a49;
          font-size: 0.95rem;
          margin: 0 0 12px;
        }

        .packageGrid,
        .menuGrid,
        .contactGrid {
          display: grid;
          gap: 22px;
        }

        .packageGrid {
          grid-template-columns: repeat(2, 1fr);
        }

        .menuGrid {
          grid-template-columns: repeat(3, 1fr);
        }

        .contactGrid {
          grid-template-columns: repeat(3, 1fr);
          margin-bottom: 22px;
        }

        .packageCard,
        .menuCard,
        .contactCard {
          background: #fffdf9;
          border: 1px solid #f0e6d8;
          padding: 18px;
        }

        .packageCard h3,
        .menuCard h3 {
          font-size: 1rem;
          font-weight: 500;
          margin: 0 0 6px;
          color: #2a1c15;
        }

        .packageCard ul {
          padding-left: 18px;
          margin: 0;
          color: #6f5a49;
          line-height: 1.7;
          font-size: 0.9rem;
        }

        .menuCard p,
        .contactCard p {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #6f5a49;
          margin: 0;
        }

        .contactLabel {
          font-size: 0.78rem !important;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #9b7a55 !important;
          margin-bottom: 6px !important;
        }

        .footer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px 40px;
          border-top: 1px solid #eadcc8;
          color: #6f5a49;
          text-align: center;
        }

        @media (max-width: 980px) {
          .packageGrid,
          .menuGrid,
          .contactGrid {
            grid-template-columns: 1fr;
          }

          .heroContent {
            margin-left: 0;
            padding: 30px 20px;
          }

          .hero {
            height: 75vh;
          }

          .section,
          .footer {
            padding-left: 18px;
            padding-right: 18px;
          }

          .topbar {
            padding: 16px 18px;
          }

          .heroContent h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </>
  );
}
