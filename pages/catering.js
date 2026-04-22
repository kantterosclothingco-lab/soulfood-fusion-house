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

        {/* ✅ NEW SERVICES SECTION */}
        <section className="section contentSection" id="services">
          <div className="textBlock narrow">
            <p className="sectionLabel">Services</p>
            <h2>🍽️ SoulFood Fusion Catering & Events — Services</h2>

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

            <h3>🎉 Events We Cater</h3>
            <ul>
              <li>Weddings</li>
              <li>Birthdays</li>
              <li>Christenings</li>
              <li>Corporate Events</li>
              <li>Anniversaries</li>
              <li>Private Parties</li>
              <li>Family Gatherings</li>
            </ul>

            <p>
              Whether it’s a small intimate event or a large celebration, we are
              equipped to deliver quality and consistency.
            </p>

            <h3>🍽️ Our Catering Services</h3>

            <p><strong>Buffet Catering</strong><br />
              A wide selection of dishes presented in a beautifully arranged buffet setup.
            </p>

            <p><strong>Plated / Formal Dining</strong><br />
              Elegant, individually served meals ideal for weddings and formal occasions.
            </p>

            <p><strong>Corporate Catering</strong><br />
              Reliable and professional catering for meetings and business events.
            </p>

            <p><strong>Private Event Catering</strong><br />
              Customized food service for birthdays and special celebrations.
            </p>

            <h3>🌍 Cuisine Specialties</h3>
            <ul>
              <li>Authentic Filipino Favorites</li>
              <li>International Dishes</li>
              <li>Fusion Menu Options</li>
            </ul>

            <h3>📝 Custom Catering Packages</h3>
            <ul>
              <li>Guest size</li>
              <li>Budget</li>
              <li>Menu preferences</li>
              <li>Event type</li>
            </ul>

            <h3>⭐ What We Offer</h3>
            <ul>
              <li>High-quality, freshly prepared food</li>
              <li>Professional and reliable service</li>
              <li>Clean and elegant presentation</li>
              <li>Flexible catering options</li>
              <li>Stress-free event experience</li>
            </ul>
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
    </>
  );
}