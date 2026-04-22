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

        {/* ✅ ONLY CHANGE: better aesthetic font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
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
              Weddings<br />
              Birthdays<br />
              Christenings<br />
              Corporate Events<br />
              Anniversaries<br />
              Private Parties<br />
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
              buffet setup.
            </p>

            <p>
              <strong>Plated / Formal Dining</strong>
              <br />
              Individually served meals for formal occasions.
            </p>

            <p>
              <strong>Corporate Catering</strong>
              <br />
              Reliable catering for meetings and business functions.
            </p>

            <p>
              <strong>Private Event Catering</strong>
              <br />
              Customized service for special celebrations.
            </p>

            <p className="sectionLabel">Cuisine Specialties</p>
            <h2>Cuisine Specialties</h2>

            <p>
              Authentic Filipino Favorites<br />
              International Dishes<br />
              Fusion Menu Options
            </p>

            <p className="sectionLabel">Custom Catering Packages</p>
            <h2>Custom Catering Packages</h2>

            <p>
              Guest size<br />
              Budget<br />
              Menu preferences<br />
              Event type
            </p>

            <p className="sectionLabel">What We Offer</p>
            <h2>What We Offer</h2>

            <p>
              High-quality, freshly prepared food<br />
              Professional and reliable service<br />
              Clean and elegant presentation<br />
              Flexible catering options<br />
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

      <footer className="footer">
        <p>Soulfood Fusion Catering</p>
      </footer>

      {/* ✅ ONLY font tweak — no layout change */}
      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
        }

        h1, h2 {
          font-family: "Playfair Display", serif;
        }
      `}</style>
    </>
  );
}