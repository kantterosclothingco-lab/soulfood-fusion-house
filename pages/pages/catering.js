import Head from "next/head";
import Link from "next/link";

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=8+High+St,+Bendigo+VIC+3550,+Australia";

const reviewLink =
  "https://www.google.com/search?sca_esv=1578db8b805c577c&sxsrf=ANbL-n6D8nRjb_fNMoNfjrpx3FLWu0Z8RQ:1774762975084&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdn7PKGMS2CqhpWnURd-em_dI93f_FTD6soC0lZqrBmEJNFVQwA2NFk7OvIIk9SURLjnweEVxpWw3g382Vt6Dbyo107aDNHzg2-Zui6vlEAuE9PwwJmD-8wxId7WF1Ue61sAvWo%3D&q=SoulFood+Fusion+House+Cafe+%26+Restaurant+Reviews&sa=X&ved=2ahUKEwipysKls8STAxVMla8BHacLIl0Q0bkNegQIKBAH&biw=1358&bih=644&dpr=1";

const offers = [
  {
    title: "Party Trays",
    text: "Great for birthdays, family gatherings, and celebrations with shareable food options.",
  },
  {
    title: "Corporate Catering",
    text: "Meal service for meetings, office lunches, staff events, and business functions.",
  },
  {
    title: "Private Events",
    text: "Catering support for intimate parties, milestone events, and special occasions.",
  },
  {
    title: "Custom Packages",
    text: "Flexible menu planning based on guest count, food style, and event needs.",
  },
];

const portfolio = [
  {
    title: "Birthday Catering",
    image: "/images/menu/filo-bbq-ribs.jpg",
    text: "Shared trays, grilled favorites, and dishes made for celebrations.",
  },
  {
    title: "Family Gatherings",
    image: "/images/menu/grilled-chicken-inasal.jpg",
    text: "Comfort food selections that suit both small and large group dining.",
  },
  {
    title: "Office Events",
    image: "/images/menu/pinoy-barbeque-skewers.jpg",
    text: "Easy group meals for work teams, meetings, and company lunches.",
  },
  {
    title: "Special Occasions",
    image: "/images/menu/crispy-pork-belly-bagnet.jpg",
    text: "Food service for events that need a warm and memorable spread.",
  },
];

export default function CateringPage() {
  return (
    <>
      <Head>
        <title>Catering Services | Soulfood Fusion House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="topbar">
        <Link href="/" className="brand brandWithLogo">
          <img
            src="/images/logo/logo.png"
            alt="Soulfood Fusion House Logo"
            className="logo"
          />
          <span>Soulfood Fusion House</span>
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <a href={mapLink} target="_blank" rel="noreferrer" className="menuBtn">
            📍 Map
          </a>
          <a
            href={reviewLink}
            target="_blank"
            rel="noreferrer"
            className="reviewBtn"
          >
            ⭐ Reviews
          </a>
        </nav>
      </header>

      <main className="cateringPage">
        <section className="hero">
          <div className="heroOverlay" />
          <div className="heroContent">
            <p className="eyebrow">Catering Services</p>
            <h1>Food for events, parties, and group gatherings</h1>
            <p className="heroText">
              Soulfood Fusion House offers catering for family celebrations,
              office meals, private events, and more. Browse our service
              options, sample offers, and portfolio below.
            </p>

            <div className="heroActions">
              <a href="#offers" className="primaryBtn">
                View Offers
              </a>
              <a href="#portfolio" className="cateringBtn">
                🍽 View Portfolio
              </a>
              <a href="tel:+61403036727" className="secondaryBtn">
                📞 Call Now
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="offers">
          <div className="sectionIntro center">
            <p className="sectionLabel">What We Offer</p>
            <h2>Catering options for different events</h2>
            <p>
              We can prepare group meals and food service setups for a range of
              occasions.
            </p>
          </div>

          <div className="offerGrid">
            {offers.map((item) => (
              <article className="offerCard" key={item.title}>
                <div className="offerIcon">🍽</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="serviceBanner">
            <div>
              <p className="sectionLabel">Service Details</p>
              <h2>What can be included</h2>
              <ul>
                <li>Tray meals and group food packages</li>
                <li>Shared mains and side selections</li>
                <li>Family-style and event-style food setup</li>
                <li>Flexible quantities for small or large groups</li>
                <li>Phone-based inquiries for custom requests</li>
              </ul>
            </div>
            <div className="serviceIcon">🥘</div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="sectionIntro center">
            <p className="sectionLabel">Portfolio</p>
            <h2>Sample catering service showcase</h2>
            <p>
              Use this section to show the kind of events and food setup you
              offer. You can later replace these with real catering photos.
            </p>
          </div>

          <div className="portfolioGrid">
            {portfolio.map((item) => (
              <article className="portfolioCard" key={item.title}>
                <div className="portfolioImage">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="portfolioBody">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="contactCard">
            <p className="sectionLabel">Catering Inquiry</p>
            <h2>Need catering for your event?</h2>
            <p>
              Call us directly to discuss guest count, food selections, and your
              preferred event date.
            </p>

            <div className="contactActions">
              <a href="tel:+61403036727" className="primaryBtn">
                📞 Call +61 403 036 727
              </a>
              <a href="mailto:soulfoodfusionhouse@gmail.com" className="secondaryBtn">
                ✉️ Email Us
              </a>
              <a href={mapLink} target="_blank" rel="noreferrer" className="menuBtn darkText">
                📍 Find Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
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
          width: 52px;
          height: 52px;
          object-fit: contain;
          border-radius: 12px;
          background: white;
          padding: 4px;
        }

        .nav {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }

        .menuBtn,
        .reviewBtn,
        .cateringBtn,
        .primaryBtn,
        .secondaryBtn {
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: 700;
          display: inline-block;
        }

        .menuBtn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #fff4e8 !important;
        }

        .reviewBtn {
          background: #3a2a20;
          color: #fff4e8 !important;
        }

        .cateringBtn {
          background: linear-gradient(135deg, #8a1f1f, #c24b3f);
          color: #fff9f4 !important;
        }

        .primaryBtn {
          background: linear-gradient(135deg, #c79356, #ebce97);
          color: #1e120d;
        }

        .secondaryBtn {
          background: #fff;
          color: #3b261b;
          border: 1px solid #dcc7af;
        }

        .hero {
          position: relative;
          min-height: 65vh;
          display: flex;
          align-items: center;
          padding: 90px 28px;
          background: url("/images/menu/pinoy-barbeque-skewers.jpg") center/cover no-repeat;
          overflow: hidden;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(17, 10, 8, 0.84) 0%,
            rgba(17, 10, 8, 0.58) 45%,
            rgba(17, 10, 8, 0.3) 100%
          );
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

        .hero h1 {
          font-size: clamp(2.6rem, 6vw, 5rem);
          line-height: 1;
          margin: 18px 0;
          color: #fff8f0;
        }

        .heroText {
          color: #f2e6d8;
          font-size: 1.08rem;
          line-height: 1.8;
          max-width: 650px;
        }

        .heroActions,
        .contactActions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 26px;
        }

        .section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 82px 28px;
        }

        .sectionIntro.center {
          text-align: center;
          max-width: 860px;
          margin: 0 auto 36px;
        }

        .sectionIntro h2 {
          font-size: clamp(2rem, 4vw, 3.2rem);
          margin: 12px 0;
          color: #2e1d15;
        }

        .sectionIntro p {
          color: #6f5a49;
          line-height: 1.8;
        }

        .offerGrid,
        .portfolioGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .offerCard,
        .portfolioCard,
        .contactCard {
          background: linear-gradient(180deg, #ffffff, #f8efe3);
          border: 1px solid #ead7bf;
          border-radius: 24px;
          padding: 26px;
          box-shadow: 0 16px 40px rgba(53, 31, 18, 0.06);
        }

        .offerIcon {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }

        .offerCard h3,
        .portfolioBody h3,
        .contactCard h2 {
          color: #332116;
          margin-top: 0;
        }

        .offerCard p,
        .portfolioBody p,
        .contactCard p {
          color: #6f5a49;
          line-height: 1.75;
        }

        .serviceBanner {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 24px;
          align-items: center;
          background: linear-gradient(135deg, #fff6ef, #f5e3d4);
          border: 1px solid #ead7bf;
          border-radius: 28px;
          padding: 32px;
          box-shadow: 0 18px 42px rgba(53, 31, 18, 0.08);
        }

        .serviceBanner h2 {
          margin: 12px 0;
          color: #2e1d15;
        }

        .serviceBanner ul {
          margin: 0;
          padding-left: 20px;
          color: #6f5a49;
          line-height: 1.8;
        }

        .serviceIcon {
          font-size: 5rem;
          text-align: center;
        }

        .portfolioCard {
          padding: 0;
          overflow: hidden;
        }

        .portfolioImage {
          height: 240px;
        }

        .portfolioImage img {
          height: 100%;
          object-fit: cover;
        }

        .portfolioBody {
          padding: 22px;
        }

        .darkText {
          color: #2b1c15 !important;
        }

        @media (max-width: 980px) {
          .offerGrid,
          .portfolioGrid,
          .serviceBanner {
            grid-template-columns: 1fr;
          }

          .topbar,
          .section {
            padding-left: 18px;
            padding-right: 18px;
          }

          .hero {
            min-height: auto;
            padding: 80px 18px;
          }
        }
      `}</style>
    </>
  );
}
