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
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <header className="topbar">
        <Link href="/" className="brand brandWithLogo">
          <img
            src="/images/logo/logo.png"
            alt="Soulfood Fusion House Logo"
            className="logo"
          />
          <span>Soulfood Fusion Catering</span>
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>
          <a href="#about">About</a>
          <a href="#menus">Menus</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="page">
        <section className="hero">
          <div className="heroOverlay" />
          <div className="heroContent">
            <p className="eyebrow">Soulfood Fusion Catering</p>
            <h1>
              Bendigo-based catering for delicious food, warm service, and
              memorable gatherings.
            </h1>
            <p>
              Soulfood Fusion Catering brings together flavorful food, generous
              shared meals, and friendly service for birthdays, private events,
              office catering, and special occasions.
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
            </div>
          </div>
        </section>

        <section className="section introSection">
          <p className="introText">
            A Bendigo-based vibrant catering service offering delicious food,
            soulful flavors, and warm hospitality for every kind of gathering.
          </p>
        </section>

        <section className="section contentSection" id="about">
          <div className="textBlock">
            <p className="sectionLabel">About</p>
            <h2>Fresh food, shared moments, and simple catering that works</h2>
            <p>
              Soulfood Fusion Catering is perfect for family celebrations,
              private functions, birthdays, office lunches, and special events.
              Our menu is built around crowd-pleasing dishes, shared trays, and
              comforting meals that people enjoy together.
            </p>
            <p>
              We focus on food that feels generous, flavorful, and easy to
              serve, so your event feels smooth and enjoyable from start to
              finish.
            </p>
          </div>
        </section>

        <section className="section contentSection" id="menus">
          <div className="textBlock">
            <p className="sectionLabel">Menus</p>
            <h2>Catering menu options for different events</h2>
            <p>
              We can prepare catering selections based on your guest count,
              event type, and preferred dishes. Popular catering choices include
              grilled dishes, shared mains, noodle trays, rice trays, sides, and
              house favorites.
            </p>
          </div>

          <div className="menuGrid">
            <article className="menuCard">
              <h3>Party Catering</h3>
              <p>
                Great for birthdays, family lunches, celebrations, and private
                gatherings.
              </p>
            </article>

            <article className="menuCard">
              <h3>Office Catering</h3>
              <p>
                Ideal for meetings, work lunches, staff food trays, and group
                meal setups.
              </p>
            </article>

            <article className="menuCard">
              <h3>Custom Event Catering</h3>
              <p>
                Flexible options based on your event size, food style, and
                service needs.
              </p>
            </article>
          </div>
        </section>

        <section className="section contentSection" id="gallery">
          <div className="textBlock">
            <p className="sectionLabel">Gallery</p>
            <h2>Food made for sharing</h2>
            <p>
              A simple look at the kind of dishes and catering presentation
              available for your next event.
            </p>
          </div>

          <div className="galleryGrid">
            <img
              src="/images/menu/filo-bbq-ribs.jpg"
              alt="Filo BBQ Ribs"
            />
            <img
              src="/images/menu/grilled-chicken-inasal.jpg"
              alt="Grilled Chicken Inasal"
            />
            <img
              src="/images/menu/pinoy-barbeque-skewers.jpg"
              alt="Pinoy Barbeque Skewers"
            />
            <img
              src="/images/menu/crispy-pork-belly-bagnet.jpg"
              alt="Crispy Pork Belly"
            />
          </div>
        </section>

        <section className="section contentSection">
          <div className="textBlock">
            <p className="sectionLabel">Testimonials</p>
            <h2>What customers can expect</h2>
          </div>

          <div className="testimonialGrid">
            <article className="testimonialCard">
              <p>
                “Fresh food, generous servings, and warm service that made the
                event feel easy and enjoyable.”
              </p>
            </article>

            <article className="testimonialCard">
              <p>
                “Great catering option for family events and special occasions.
                The food was full of flavor and perfect for sharing.”
              </p>
            </article>

            <article className="testimonialCard">
              <p>
                “A simple and reliable choice for group food trays and event
                meals in Bendigo.”
              </p>
            </article>
          </div>
        </section>

        <section className="section contentSection" id="contact">
          <div className="textBlock">
            <p className="sectionLabel">Contact</p>
            <h2>Get in touch about your event</h2>
            <p>
              Contact Soulfood Fusion Catering to discuss guest numbers, event
              date, food options, and catering requirements.
            </p>
          </div>

          <div className="contactGrid">
            <div className="contactCard">
              <p><strong>Phone</strong></p>
              <p>+61 403 036 727</p>
            </div>

            <div className="contactCard">
              <p><strong>Email</strong></p>
              <p>soulfoodfusionhouse@gmail.com</p>
            </div>

            <div className="contactCard">
              <p><strong>Address</strong></p>
              <p>8 High St, Bendigo VIC 3550, Australia</p>
            </div>
          </div>

          <div className="contactButtons">
            <a href="tel:+61403036727" className="primaryBtn">
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
          </div>
        </section>

        <section className="section contentSection">
          <div className="textBlock">
            <p className="sectionLabel">Policies</p>
            <h2>Catering notes</h2>
            <p>
              Catering orders are best discussed in advance so we can confirm
              availability, menu selection, guest numbers, and pickup or event
              arrangements. For larger functions, direct phone contact is
              recommended.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Soulfood Fusion Catering</p>
        <div className="footerLinks">
          <a href="#about">About</a>
          <a href="#menus">Menus</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
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
          background: #faf7f2;
          color: #2a1c15;
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
          background: #22150f;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
          gap: 14px;
        }

        .brand,
        .nav a {
          color: #fff4e8;
          font-weight: 700;
        }

        .brandWithLogo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          width: 50px;
          height: 50px;
          object-fit: contain;
          border-radius: 10px;
          background: #fff;
          padding: 4px;
        }

        .nav {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }

        .page {
          max-width: 1200px;
          margin: 0 auto;
          padding-bottom: 60px;
        }

        .hero {
          position: relative;
          min-height: 75vh;
          margin: 0 28px;
          background: url("/images/menu/grilled-chicken-inasal.jpg") center/cover
            no-repeat;
          display: flex;
          align-items: center;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: rgba(20, 10, 6, 0.45);
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 760px;
          padding: 42px;
          color: #fff8f0;
        }

        .eyebrow,
        .sectionLabel {
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.78rem;
          font-weight: 700;
          color: #e2bf8e;
        }

        .sectionLabel {
          color: #b57a39;
        }

        .heroContent h1 {
          font-size: clamp(2.4rem, 5vw, 4.8rem);
          line-height: 1.03;
          margin: 12px 0 16px;
        }

        .heroContent p {
          line-height: 1.8;
          font-size: 1.05rem;
          max-width: 640px;
        }

        .heroButtons,
        .contactButtons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .primaryBtn,
        .secondaryBtn {
          display: inline-block;
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: 700;
        }

        .primaryBtn {
          background: #c79356;
          color: #1e120d;
        }

        .secondaryBtn {
          background: #fff;
          color: #2a1c15;
          border: 1px solid #ddd0bf;
        }

        .section {
          padding: 60px 28px 0;
        }

        .introSection {
          padding-top: 36px;
        }

        .introText {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
          font-size: 1.15rem;
          line-height: 1.9;
          color: #5f4a3d;
        }

        .contentSection {
          max-width: 980px;
          margin: 0 auto;
        }

        .textBlock {
          max-width: 760px;
          margin: 0 auto 28px;
          text-align: center;
        }

        .textBlock h2 {
          font-size: clamp(1.9rem, 4vw, 3rem);
          margin: 10px 0 14px;
          color: #2e1d15;
        }

        .textBlock p {
          line-height: 1.85;
          color: #6f5a49;
        }

        .menuGrid,
        .testimonialGrid,
        .contactGrid,
        .galleryGrid {
          display: grid;
          gap: 22px;
        }

        .menuGrid {
          grid-template-columns: repeat(3, 1fr);
        }

        .testimonialGrid {
          grid-template-columns: repeat(3, 1fr);
        }

        .contactGrid {
          grid-template-columns: repeat(3, 1fr);
        }

        .galleryGrid {
          grid-template-columns: repeat(4, 1fr);
        }

        .menuCard,
        .testimonialCard,
        .contactCard {
          background: #fff;
          border: 1px solid #eadcc8;
          padding: 24px;
        }

        .menuCard h3,
        .contactCard p:first-child {
          margin-top: 0;
          color: #332116;
        }

        .menuCard p,
        .testimonialCard p,
        .contactCard p {
          color: #6f5a49;
          line-height: 1.75;
          margin-bottom: 0;
        }

        .galleryGrid img {
          height: 260px;
          object-fit: cover;
        }

        .footer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px 28px;
          display: flex;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
          border-top: 1px solid #eadcc8;
          color: #6f5a49;
        }

        .footerLinks {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .footer a {
          color: #3a2418;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .menuGrid,
          .testimonialGrid,
          .contactGrid,
          .galleryGrid {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: auto;
            margin: 0 18px;
          }

          .heroContent,
          .section,
          .footer {
            padding-left: 18px;
            padding-right: 18px;
          }

          .topbar {
            padding: 16px 18px;
          }
        }
      `}</style>
    </>
  );
}
