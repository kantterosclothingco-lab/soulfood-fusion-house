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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap"
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
          <a href="#services">Services</a>
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
              <a href="#services" className="secondaryBtn">
                Services
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

        <section className="section contentSection" id="services">
          <div className="textBlock narrow">
            <p className="sectionLabel">Services</p>
            <h2>SoulFood Fusion Catering & Events — Services</h2>
            <p>
              SoulFood Fusion Catering & Events offers a complete catering
              experience designed to make every occasion seamless, memorable,
              and filled with exceptional flavors.
            </p>
            <p>
              We specialize in a unique blend of Filipino cuisine and
              international dishes, combining traditional favorites with modern
              culinary touches to satisfy every guest.
            </p>

            <p className="sectionLabel">Events We Cater</p>
            <h2>Events We Cater</h2>
            <p>
              We provide catering services for a wide range of occasions,
              including:
            </p>
            <p>
              Weddings
              <br />
              Birthdays
              <br />
              Christenings
              <br />
              Corporate Events
              <br />
              Anniversaries
              <br />
              Private Parties
              <br />
              Family Gatherings
            </p>
            <p>
              Whether it’s a small intimate event or a large celebration, we
              are equipped to deliver quality and consistency.
            </p>

            <p className="sectionLabel">Our Catering Services</p>
            <h2>Our Catering Services</h2>
            <p>
              <strong>Buffet Catering</strong>
              <br />
              A wide selection of dishes presented in a beautifully arranged
              buffet setup, perfect for both small and large gatherings.
            </p>
            <p>
              <strong>Plated / Formal Dining</strong>
              <br />
              Elegant, individually served meals ideal for weddings and formal
              occasions.
            </p>
            <p>
              <strong>Corporate Catering</strong>
              <br />
              Reliable and professional catering for meetings, office events,
              and business functions.
            </p>
            <p>
              <strong>Private Event Catering</strong>
              <br />
              Customized food service for birthdays, family gatherings, and
              special celebrations.
            </p>

            <p className="sectionLabel">Cuisine Specialties</p>
            <h2>Cuisine Specialties</h2>
            <p>Our menu features a combination of:</p>
            <p>
              Authentic Filipino Favorites
              <br />
              International Dishes
              <br />
              Fusion Menu Options
            </p>
            <p>
              Each dish is carefully prepared using fresh ingredients and
              crafted to deliver both flavor and presentation.
            </p>

            <p className="sectionLabel">Custom Catering Packages</p>
            <h2>Custom Catering Packages</h2>
            <p>
              Every event is different — and we make sure your catering fits
              perfectly.
            </p>
            <p>We offer tailored packages based on:</p>
            <p>
              Guest size
              <br />
              Budget
              <br />
              Menu preferences
              <br />
              Event type
            </p>

            <p className="sectionLabel">What We Offer</p>
            <h2>What We Offer</h2>
            <p>
              High-quality, freshly prepared food
              <br />
              Professional and reliable service
              <br />
              Clean and elegant food presentation
              <br />
              Flexible catering options
              <br />
              Stress-free event experience
            </p>
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
              <p>+61 413 326 097</p>
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
            <a href="tel:+61413326097" className="primaryBtn">
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

        .brand {
          font-family: "Cormorant Garamond", serif;
          font-size: 1.7rem;
          letter-spacing: 0.02em;
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
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(2.9rem, 5vw, 5rem);
          line-height: 1.02;
          font-weight: 600;
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
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(2.2rem, 4vw, 3.3rem);
          margin: 8px 0 12px;
          color: #2e1d15;
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 1.05;
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
            font-size: 2.8rem;
          }

          .brand {
            font-size: 1.45rem;
          }
        }
      `}</style>
    </>
  );
}