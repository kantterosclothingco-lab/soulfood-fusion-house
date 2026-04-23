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
          <Link href="/gallery">Gallery</Link>
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
              A fusion of Filipino and international flavors, generous servings,
              and flexible catering tailored for birthdays, private events, 
              corporate functions, and special occasions.
            </p>

            <div className="heroButtons">
              <a href="#about" className="primaryBtn">About</a>
              <a href="#services" className="secondaryBtn">Services</a>
              <a href="#contact" className="secondaryBtn">Contact</a>
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
              Established in 2020, SoulFood Fusion Catering & Events is dedicated to delivering exceptional dining experiences through a unique fusion of Filipino cuisine and international flavors.

The business is owned by Chef Antonio Patricio Lim, whose culinary expertise was developed through years of experience working in international cuisine on luxury cruise ships and in Middle Eastern countries. Together with his wife, Yzabel Vale, they have built SoulFood into a trusted name in catering — known for quality, consistency, and refined presentation.

Combining global culinary standards with Filipino hospitality, SoulFood Fusion Catering & Events offers thoughtfully prepared dishes made from fresh ingredients and crafted to impress every guest.

From weddings and private celebrations to corporate events, the team is committed to providing generous servings, flexible catering options, and a seamless, stress-free experience.
            </p>
          </div>
        </section>

        {/* SERVICES and CONTACT unchanged (kept same) */}

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
            <a href="mailto:soulfoodfusionhouse@gmail.com" className="secondaryBtn">
              Email Us
            </a>
            <a href={mapLink} target="_blank" rel="noreferrer" className="secondaryBtn">
              Open Map
            </a>
            <Link href="/consultation" className="consultBtn">
              Free Consultation
            </Link>
          </div>
        </section>
      </main>

      {/* ✅ PROFESSIONAL FOOTER */}
      <footer className="footer">
        <div className="footerContainer">
          <h2>Soulfood Fusion Catering</h2>

          <p>8 High St, Bendigo VIC 3550</p>
          <p>soulfoodfusionhouse@gmail.com</p>
          <p>(+61) 0413 326 097</p>

          <div className="footerLinks">
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/catering">Menus</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/#contact">Contact</Link>
          </div>

          <p className="copyright">
            © 2025 - Soulfood Fusion Catering. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Inter", sans-serif;
          background: #faf7f2;
          color: #2a1c15;
        }

        .footer {
          background: #111;
          color: #fff;
          text-align: center;
          padding: 40px 20px;
          margin-top: 40px;
        }

        .footerContainer h2 {
          font-family: "Cormorant Garamond", serif;
          margin-bottom: 10px;
        }

        .footerContainer p {
          margin: 4px 0;
          font-size: 0.9rem;
          color: #ccc;
        }

        .footerLinks {
          margin: 20px 0;
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footerLinks a {
          color: #fff;
          font-size: 0.9rem;
        }

        .copyright {
          margin-top: 16px;
          font-size: 0.8rem;
          color: #aaa;
        }
      `}</style>
    </>
  );
}