import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const bestSellers = [
  {
    name: "Filo BBQ Ribs",
    price: "$29.9",
    image: "/images/menu/filo-bbq-ribs.jpg",
    description: "Filo style pork ribs barbecue served with your choice of sides.",
  },
  {
    name: "Grilled Chicken Inasal",
    price: "$24.9",
    image: "/images/menu/grilled-chicken-inasal.jpg",
    description: "Char-grilled chicken marinated in Soulfood special sauce.",
  },
  {
    name: "Soulfood Burger",
    price: "$26",
    image: "/images/menu/soulfood-burger.jpg",
    description: "Angus beef, melted cheese, bacon, pineapple, and smashed avo.",
  },
  {
    name: "Crispy Pork Belly",
    price: "$26.00",
    image: "/images/menu/crispy-pork-belly-bagnet.jpg",
    description: "Crispy, savory, and full of flavor.",
  },
  {
    name: "Beef Tapa (Tapsilog)",
    price: "$28.60",
    image: "/images/menu/beef-tapa-tapsilog.jpg",
    description: "A house favorite made for hearty appetites.",
  },
  {
    name: "Asian Fried Calamari",
    price: "$17.60",
    image: "/images/menu/asian-fried-calamari.jpg",
    description: "Crispy calamari with salad, mayo, and signature vinegar dip.",
  },
];

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=8+High+St,+Bendigo+VIC+3550,+Australia";

const reviewLink =
  "https://www.google.com/search?sca_esv=1578db8b805c577c&sxsrf=ANbL-n6D8nRjb_fNMoNfjrpx3FLWu0Z8RQ:1774762975084&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdn7PKGMS2CqhpWnURd-em_dI93f_FTD6soC0lZqrBmEJNFVQwA2NFk7OvIIk9SURLjnweEVxpWw3g382Vt6Dbyo107aDNHzg2-Zui6vlEAuE9PwwJmD-8wxId7WF1Ue61sAvWo%3D&q=SoulFood+Fusion+House+Cafe+%26+Restaurant+Reviews&sa=X&ved=2ahUKEwipysKls8STAxVMla8BHacLIl0Q0bkNegQIKBAH&biw=1358&bih=644&dpr=1";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Head>
        <title>Soulfood Fusion House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Soulfood Fusion House - Where good food meets your soulful cravings."
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <header className="topbar">
        <div className="brandWrap">
          <img
            src="/images/logo/logo.png"
            alt="Soulfood Fusion House Logo"
            className="logo"
          />
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
          <Link href="/catering" className="cateringBtn">
            🍽 Catering
          </Link>
          <Link href="/checkout" className="orderBtn">
            🛒 Order Online
          </Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="heroOverlay" />
          <div className="heroContent">
            <p className="eyebrow">Soulfood Fusion House</p>
            <h1>WHERE GOOD FOOD MEETS YOUR SOULFUL CRAVINGS!</h1>
            <p className="heroText">
              Good food, warm service, and bold flavors made to share. Explore
              our best sellers, check our location, and browse the full menu.
            </p>

            <div className="heroActions">
              <Link href="/menu" className="primaryBtn">
                View Full Menu
              </Link>

              <Link href="/checkout" className="orderBtn">
                🛒 Order Online
              </Link>

              <Link href="/catering" className="cateringBtn">
                🍽 Catering Services
              </Link>

              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="secondaryBtn"
              >
                📍 Location
              </a>

              <a
                href={reviewLink}
                target="_blank"
                rel="noreferrer"
                className="reviewBtn"
              >
                ⭐ Reviews
              </a>
            </div>
          </div>
        </section>

        <section className="flowSection">
          <div className="sectionIntro center">
            <p className="sectionLabel">How It Works</p>
            <h2>Simple order flow for customers</h2>
          </div>

          <div className="flowGrid">
            <article className="flowCard">
              <div className="flowIcon">1</div>
              <h3>Browse the menu</h3>
              <p>Customers explore your dishes and choose what they want.</p>
            </article>
            <article className="flowCard">
              <div className="flowIcon">2</div>
              <h3>Go to checkout</h3>
              <p>They enter contact details, pickup or delivery preferences, and payment method.</p>
            </article>
            <article className="flowCard">
              <div className="flowIcon">3</div>
              <h3>Pay online</h3>
              <p>Card, digital wallet, and future options like Afterpay can be added here.</p>
            </article>
            <article className="flowCard">
              <div className="flowIcon">4</div>
              <h3>Order confirmed</h3>
              <p>They land on a thank-you page with a review button and next steps.</p>
            </article>
          </div>
        </section>

        <section className="aboutSection" id="about">
          <div className="sectionIntro">
            <p className="sectionLabel">About Us</p>
            <h2>Food that feels familiar, exciting, and satisfying</h2>
            <p>
              Soulfood Fusion House brings together Filipino favorites,
              comforting mains, share plates, and fresh sides in a warm and
              welcoming dining experience.
            </p>
          </div>

          <div className="featureGrid">
            <article className="featureCard">
              <h3>Freshly Prepared</h3>
              <p>Made with care and packed with flavor, from grilled dishes to family-style favorites.</p>
            </article>
            <article className="featureCard">
              <h3>Best Sellers First</h3>
              <p>The homepage highlights the dishes people love most before guiding them to the full menu.</p>
            </article>
            <article className="featureCard">
              <h3>Ready For Online Orders</h3>
              <p>The website now has a clearer flow for order, checkout, and payment-ready pages.</p>
            </article>
          </div>
        </section>

        <section className="bestSellerSection" id="bestsellers">
          <div className="sectionIntro center">
            <p className="sectionLabel">Best Sellers</p>
            <h2>Popular picks from the menu</h2>
            <p>Start with the dishes customers keep coming back for.</p>
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
                  <div className="cardActions">
                    <Link href="/menu" className="miniBtn">View Dish</Link>
                    <Link href="/checkout" className="miniGoldBtn">Order Now</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="ctaCenter">
            <Link href="/menu" className="primaryBtn">
              See Full Menu
            </Link>
          </div>
        </section>

        <section className="visitSection" id="visit">
          <div className="visitGrid">
            <div className="visitCard">
              <p className="sectionLabel">Location & Hours</p>
              <h2>Visit us in Bendigo</h2>

              <div className="infoGroup">
                <h4>Address</h4>
                <p>8 High St, Bendigo VIC 3550, Australia</p>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="iconLink"
                >
                  📍 Open in Google Maps
                </a>
              </div>

              <div className="infoGroup">
                <h4>Contact</h4>
                <p><a href="tel:+61403036727">+61 403 036 727</a></p>
                <p><a href="mailto:soulfoodfusionhouse@gmail.com">soulfoodfusionhouse@gmail.com</a></p>
              </div>

              <div className="infoGroup">
                <h4>Opening Hours</h4>
                <p><strong>Monday</strong> — CLOSED</p>
                <p><strong>Tuesday - Friday</strong> — 11:30am to 3:00pm Lunch</p>
                <p><strong>Tuesday - Friday</strong> — 5:00pm to 5:00pm Dinner</p>
                <p><strong>Saturday</strong> — 11:30am - 10:00pm Dinner</p>
                <p><strong>Sunday</strong> — 11:30pm - 5:00pm</p>
              </div>

              <div className="actionRow">
                <a href={mapLink} target="_blank" rel="noreferrer" className="secondaryBtn inlineBtn">
                  📍 Get Directions
                </a>
                <Link href="/checkout" className="orderBtn inlineBtn">
                  🛒 Start Order
                </Link>
                <a href={reviewLink} target="_blank" rel="noreferrer" className="reviewBtn inlineBtn">
                  ⭐ Leave a Review
                </a>
              </div>
            </div>

            <div className="quotePanel">
              <div className="quoteOverlay" />
              <div className="quoteContent">
                <p className="sectionLabel light">Online Payment Ready</p>
                <h3>Checkout can be expanded for card, wallet, and Afterpay-supported payment options.</h3>
                <p>
                  The next stage is connecting a real payment provider like Stripe
                  or Square to activate live checkout.
                </p>
                <div className="quoteButtons">
                  <Link href="/checkout" className="goldBtn">
                    Go to Checkout
                  </Link>
                  <a href={reviewLink} target="_blank" rel="noreferrer" className="reviewBtn lightBtn">
                    ⭐ Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bookingSection" id="booking">
          <div className="bookingCard">
            <div className="sectionIntro center small">
              <p className="sectionLabel">Book / Order Request</p>
              <h2>Send a booking or quick order request</h2>
              <p>
                This is a simple request form. For online payment flow, use the checkout page.
              </p>
            </div>

            {!submitted ? (
              <form className="bookingForm" onSubmit={handleSubmit}>
                <input type="text" placeholder="Full name" required />
                <input type="tel" placeholder="Phone number" required />
                <input type="text" placeholder="Order or booking details" required />
                <input type="date" required />
                <button type="submit" className="orderBtn formBtn">
                  ✅ Submit Request
                </button>
              </form>
            ) : (
              <div className="thankYouBox">
                <div className="thankYouIcon">✅</div>
                <h3>Thank you for booking an order</h3>
                <p>
                  We’ve received your request. You can also proceed to checkout or leave a review below.
                </p>
                <div className="thankYouActions">
                  <Link href="/checkout" className="orderBtn">
                    🛒 Go to Checkout
                  </Link>
                  <a href={reviewLink} target="_blank" rel="noreferrer" className="reviewBtn">
                    ⭐ Leave a Review
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Soulfood Fusion House</strong>
          <p>Where good food meets your soulful cravings.</p>
        </div>
        <div className="footerLinks">
          <Link href="/menu">Menu</Link>
          <Link href="/catering">🍽 Catering</Link>
          <Link href="/checkout">🛒 Checkout</Link>
          <a href={mapLink} target="_blank" rel="noreferrer">📍 Map</a>
          <a href={reviewLink} target="_blank" rel="noreferrer">⭐ Reviews</a>
        </div>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Arial, sans-serif; background: #f8f4ee; color: #2b1c15; }
        a { text-decoration: none; }
        img { display: block; width: 100%; }

        .topbar {
          position: sticky; top: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center;
          padding: 18px 28px; background: rgba(17, 10, 8, 0.88); backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(212, 174, 112, 0.18); flex-wrap: wrap; gap: 16px;
        }
        .brandWrap { display: flex; align-items: center; gap: 14px; }
        .logo { width: 58px; height: 58px; object-fit: contain; border-radius: 14px; background: white; padding: 4px; }
        .brandWrap h2 { margin: 0; font-size: 1.1rem; color: #fff8f0; }
        .brandWrap p { margin: 3px 0 0; color: #d9c8b8; font-size: 0.85rem; }

        .nav { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
        .nav a { color: #f2e6d8; font-weight: 600; }

        .menuBtn, .orderBtn, .reviewBtn, .cateringBtn, .miniBtn, .miniGoldBtn {
          padding: 11px 18px; border-radius: 999px; font-weight: 700; display: inline-block;
        }
        .menuBtn { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18); color: #fff4e8 !important; }
        .orderBtn, .miniGoldBtn { background: linear-gradient(135deg, #c79356, #e7c78a); color: #1e120d !important; }
        .reviewBtn { background: #3a2a20; color: #fff4e8 !important; border: 1px solid rgba(255,255,255,0.08); }
        .cateringBtn { background: linear-gradient(135deg, #8a1f1f, #c24b3f); color: #fff9f4 !important; box-shadow: 0 10px 28px rgba(138,31,31,0.22); }
        .miniBtn { background: #efe4d7; color: #3a2418 !important; padding: 9px 14px; }
        .miniGoldBtn { padding: 9px 14px; }

        .hero {
          position: relative; min-height: 88vh; display: flex; align-items: center; padding: 90px 28px;
          background: url("/images/menu/filo-bbq-ribs.jpg") center/cover no-repeat; overflow: hidden;
        }
        .heroOverlay {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(17,10,8,0.84) 0%, rgba(17,10,8,0.58) 45%, rgba(17,10,8,0.3) 100%);
        }
        .heroContent { position: relative; z-index: 2; max-width: 760px; }
        .eyebrow, .sectionLabel {
          text-transform: uppercase; letter-spacing: 0.18em; font-size: 0.78rem; font-weight: 700; color: #d8b27d;
        }
        .light { color: #f0d8b3; }
        .hero h1 {
          font-size: clamp(2.8rem, 7vw, 5.8rem); line-height: 0.96; margin: 18px 0; color: #fff8f0; max-width: 880px;
        }
        .heroText { color: #f2e6d8; font-size: 1.08rem; line-height: 1.8; max-width: 650px; }

        .heroActions, .quoteButtons, .actionRow, .thankYouActions, .cardActions {
          display: flex; gap: 12px; flex-wrap: wrap;
        }
        .heroActions { margin-top: 30px; }
        .primaryBtn, .secondaryBtn, .goldBtn {
          display: inline-block; padding: 14px 22px; border-radius: 999px; font-weight: 700; transition: 0.25s ease;
        }
        .primaryBtn, .goldBtn { background: linear-gradient(135deg, #c79356, #ebce97); color: #1e120d; }
        .secondaryBtn { background: rgba(255,255,255,0.94); border: 1px solid #dcc7af; color: #3b261b; }
        .primaryBtn:hover, .goldBtn:hover, .secondaryBtn:hover, .menuBtn:hover, .orderBtn:hover, .reviewBtn:hover, .cateringBtn:hover { transform: translateY(-2px); }

        .aboutSection, .bestSellerSection, .visitSection, .bookingSection, .flowSection {
          max-width: 1280px; margin: 0 auto; padding: 82px 28px;
        }
        .sectionIntro { max-width: 860px; margin-bottom: 36px; }
        .sectionIntro.center { text-align: center; margin-left: auto; margin-right: auto; }
        .sectionIntro.small { max-width: 720px; }
        .sectionIntro h2 {
          font-size: clamp(2rem, 4vw, 3.4rem); line-height: 1.1; margin: 12px 0 14px; color: #2e1d15;
        }
        .sectionIntro p { line-height: 1.8; color: #6f5a49; }

        .flowGrid, .featureGrid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px;
        }
        .featureGrid { grid-template-columns: repeat(3, 1fr); }

        .flowCard, .featureCard, .bookingCard {
          background: linear-gradient(180deg, #ffffff, #f8efe3);
          border: 1px solid #ead7bf; border-radius: 24px; padding: 26px;
          box-shadow: 0 16px 40px rgba(53, 31, 18, 0.06);
        }
        .flowIcon {
          width: 46px; height: 46px; border-radius: 50%; display: grid; place-items: center;
          background: linear-gradient(135deg, #c79356, #ebce97); color: #1e120d; font-weight: 700; margin-bottom: 14px;
        }
        .flowCard h3, .featureCard h3 { margin-top: 0; color: #332116; }
        .flowCard p, .featureCard p { margin-bottom: 0; color: #6f5a49; line-height: 1.75; }

        .dishGrid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .dishCard {
          overflow: hidden; border-radius: 24px; background: #fff; border: 1px solid #ead7bf;
          box-shadow: 0 18px 42px rgba(53,31,18,0.08); transition: 0.3s ease;
        }
        .dishCard:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(53,31,18,0.12); }
        .dishImageWrap { height: 260px; overflow: hidden; }
        .dishImageWrap img { height: 100%; object-fit: cover; transition: transform 0.45s ease; }
        .dishCard:hover .dishImageWrap img { transform: scale(1.05); }
        .dishBody { padding: 24px; }
        .dishTop {
          display: flex; justify-content: space-between; gap: 16px; align-items: flex-start; margin-bottom: 10px;
        }
        .dishTop h3 { margin: 0; color: #332116; }
        .dishTop span { color: #b57a39; font-weight: 700; white-space: nowrap; }
        .dishBody p { margin: 0 0 16px; color: #6f5a49; line-height: 1.75; }
        .ctaCenter { text-align: center; margin-top: 36px; }

        .visitGrid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 24px; }
        .visitCard {
          background: linear-gradient(180deg, #ffffff, #f8efe3); border: 1px solid #ead7bf; border-radius: 26px;
          padding: 30px; box-shadow: 0 18px 42px rgba(53,31,18,0.08);
        }
        .visitCard h2 { margin-top: 12px; color: #2e1d15; }
        .infoGroup { margin-top: 24px; }
        .infoGroup h4 { margin: 0 0 10px; color: #3a2418; }
        .infoGroup p, .infoGroup a { margin: 6px 0; color: #6f5a49; line-height: 1.65; }
        .iconLink { display: inline-block; margin-top: 8px; font-weight: 700; color: #3a2418 !important; }

        .quotePanel {
          position: relative; min-height: 100%; border-radius: 26px; overflow: hidden;
          background: url("/images/menu/grilled-chicken-inasal.jpg") center/cover no-repeat;
          box-shadow: 0 18px 42px rgba(53,31,18,0.08);
        }
        .quoteOverlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(18,10,8,0.48), rgba(18,10,8,0.8));
        }
        .quoteContent {
          position: relative; z-index: 2; padding: 34px; min-height: 100%;
          display: flex; flex-direction: column; justify-content: end;
        }
        .quoteContent h3 {
          color: #fff7ee; font-size: clamp(1.8rem, 4vw, 2.6rem); line-height: 1.2; margin: 12px 0;
        }
        .quoteContent p { color: #eadbcb; line-height: 1.75; max-width: 520px; }
        .lightBtn { background: rgba(255,255,255,0.14); color: #fff4e8 !important; border: 1px solid rgba(255,255,255,0.18); }

        .bookingForm {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;
        }
        .bookingForm input {
          width: 100%; padding: 16px 18px; border-radius: 16px; border: 1px solid #dcc7af; background: #fff; font-size: 1rem;
        }
        .formBtn { border: none; cursor: pointer; }

        .thankYouBox { text-align: center; padding: 20px 10px 10px; }
        .thankYouIcon { font-size: 3rem; margin-bottom: 10px; }
        .thankYouBox h3 { margin: 0 0 10px; color: #2e1d15; font-size: 1.8rem; }
        .thankYouBox p {
          color: #6f5a49; line-height: 1.75; max-width: 620px; margin: 0 auto 20px;
        }

        .footer {
          max-width: 1280px; margin: 0 auto; padding: 28px;
          display: flex; justify-content: space-between; align-items: center; gap: 18px;
          border-top: 1px solid #ead7bf; color: #6f5a49; flex-wrap: wrap;
        }
        .footer strong { display: block; color: #332116; margin-bottom: 6px; }
        .footer p { margin: 0; }
        .footerLinks { display: flex; gap: 14px; flex-wrap: wrap; }
        .footer a { color: #3a2418; font-weight: 700; }

        @media (max-width: 980px) {
          .flowGrid, .featureGrid, .dishGrid, .visitGrid, .bookingForm {
            grid-template-columns: 1fr;
          }
          .topbar { padding: 16px 18px; }
          .hero { min-height: auto; padding: 80px 18px; }
          .aboutSection, .bestSellerSection, .visitSection, .bookingSection, .flowSection, .footer {
            padding-left: 18px; padding-right: 18px;
          }
        }
      `}</style>
    </>
  );
}
