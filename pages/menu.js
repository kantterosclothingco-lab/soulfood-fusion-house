import Head from "next/head";
import Link from "next/link";

const appetiser = [
  {
    name: "Meat Spring Roll",
    description:
      "3 piece minced pork and shrimp marinated with sesame oil, oyster sauce & shitake mushrooms, rolled with rice paper wrapper. Served with savory hot dipping sauce on side.",
    price: "A$12.90",
  },
  {
    name: "Asian Fried Calamari",
    description:
      "Seasoned with salt & pepper, breaded and fried. Comes with salad mix topped with zesty dressing. Served with yosu mayo and fusion house signature vinegar dipping on side.",
    price: "A$16.60",
  },
  {
    name: "Vegetable Fritters (Ukoy)",
    description: "",
    price: "A$14.50",
  },
  {
    name: "Arancini Cheese Truffle",
    description: "",
    price: "A$15.00",
  },
  {
    name: "Boneless Chicken Bites",
    description: "",
    price: "A$14.00",
  },
  {
    name: "Fried Kwek Kwek",
    description: "",
    price: "A$14.00",
  },
];

const mainMeals = [
  { name: "Chicken Inasal", price: "A$24.90" },
  { name: "Pork Ribs BBQ Meal Deal", price: "A$32.00" },
  { name: "Crispy Pork Belly", price: "A$24.80" },
  { name: "Barbecue Skewers Meal Deal", price: "A$24.50" },
  { name: "Beef Tapa", price: "A$26.00" },
  { name: "Creamy Coconut Barra Fish", price: "A$26.20" },
];

const sharedMenu = [
  { name: "Crispy Pork Knuckle (Crispy Pata)", price: "A$39.00" },
  { name: "Crispy Pork Ulo / Pork Face", price: "A$28.00" },
  { name: "Beef Kare Kare", price: "A$34.00", note: "Out of stock" },
  {
    name: "Fried Tilapia Whole Fish",
    description:
      "Indulge in the crispy goodness of our Fried Fish Tilapia Pla-pla, expertly deep-fried to perfection. Served with your choice of our signature special sauce or a tangy sweet & sour option, this dish is a must-try for seafood lovers.",
    price: "A$28.00",
  },
  {
    name: "Chicken Inasal Share 2 Pieces",
    description: "Tasty deep fried marinated chicken. Served with SoulFood special sauce.",
    price: "A$28.90",
  },
  { name: "Pinoy Pork BBQ Skewers", price: "A$18.00 - A$36.00" },
  { name: "Pinoy's Chicken Barbecue Skewers", price: "A$18.00 - A$36.00" },
  { name: "Fried Whole Barramundi (1)", price: "A$36.90 - A$39.90" },
];

const desserts = [
  { name: "Mango Graham Cake", price: "A$15.00" },
  { name: "Buko Pandan Jelly", price: "A$10.00" },
  { name: "Choco Ooze Cake", price: "A$11.00" },
  { name: "Sapin Sapin", price: "A$5.00" },
];

function MenuSection({ title, subtitle, items }) {
  return (
    <section className="menuSection">
      <div className="sectionTop">
        <p className="mini">MENU</p>
        <h2>{title}</h2>
        {subtitle ? <p className="sub">{subtitle}</p> : null}
      </div>

      <div className="menuList">
        {items.map((item) => (
          <article className="menuItem" key={item.name}>
            <div className="menuItemText">
              <div className="menuItemTop">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>
              {item.note ? <p className="note">{item.note}</p> : null}
              {item.description ? <p>{item.description}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function MenuPage() {
  return (
    <>
      <Head>
        <title>Menu | Soulfood Fusion House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="topbar">
        <Link href="/" className="brand">
          Soulfood Fusion House
        </Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <a href="#appetiser">Appetiser</a>
          <a href="#main">Main Meals</a>
          <a href="#shared">Shared Menu</a>
          <a href="#desserts">Desserts</a>
        </nav>
      </header>

      <main className="menuPage">
        <section className="menuHero">
          <p className="mini">FULL FOOD MENU</p>
          <h1>Explore everything on the menu</h1>
          <p>
            From appetisers and mains to share plates and desserts, here’s the
            full Soulfood Fusion House selection.
          </p>
        </section>

        <div id="appetiser">
          <MenuSection
            title="Appetiser"
            subtitle="Try one of our signature selections and see what everyone’s talking about."
            items={appetiser}
          />
        </div>

        <div id="main">
          <MenuSection title="Main Meals" items={mainMeals} />
        </div>

        <div id="shared">
          <MenuSection
            title="Shared Menu"
            subtitle="Try one of our signature selections and see what everyone’s talking about."
            items={sharedMenu}
          />
        </div>

        <div id="desserts">
          <MenuSection title="Desserts" items={desserts} />
        </div>

        <div className="bottomCta">
          <Link href="/" className="backBtn">
            ← Back to Home
          </Link>
        </div>
      </main>

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
          background: #fbf7f2;
          color: #2a2019;
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
          flex-wrap: wrap;
          gap: 12px;
        }

        .brand {
          font-size: 1.15rem;
          font-weight: 700;
          color: #4c2f1d;
        }

        .nav {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .nav a {
          color: #5a4334;
          font-weight: 600;
        }

        .menuPage {
          max-width: 1100px;
          margin: 0 auto;
          padding: 38px 24px 80px;
        }

        .menuHero {
          text-align: center;
          padding: 30px 0 20px;
          margin-bottom: 16px;
        }

        .mini {
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 0.78rem;
          color: #b97c48;
          font-weight: 700;
        }

        .menuHero h1,
        .sectionTop h2 {
          color: #3f281a;
        }

        .menuHero h1 {
          font-size: clamp(2.3rem, 5vw, 4rem);
          margin: 10px 0 14px;
        }

        .menuHero p {
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
          color: #6d5848;
        }

        .menuSection {
          padding: 34px 0;
        }

        .sectionTop {
          margin-bottom: 18px;
        }

        .sectionTop h2 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          margin: 10px 0 10px;
        }

        .sub {
          color: #6d5848;
          line-height: 1.7;
          max-width: 760px;
        }

        .menuList {
          display: grid;
          gap: 18px;
        }

        .menuItem {
          background: white;
          border: 1px solid #f0e4d7;
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 10px 26px rgba(54, 31, 14, 0.06);
        }

        .menuItemTop {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 10px;
        }

        .menuItemTop h3 {
          margin: 0;
          color: #3f281a;
        }

        .menuItemTop span {
          color: #b97c48;
          font-weight: 700;
          white-space: nowrap;
        }

        .menuItem p {
          margin: 0;
          color: #6d5848;
          line-height: 1.7;
        }

        .note {
          color: #b24b39 !important;
          font-weight: 700;
          margin-bottom: 8px !important;
        }

        .bottomCta {
          text-align: center;
          margin-top: 24px;
        }

        .backBtn {
          display: inline-block;
          background: #4c2f1d;
          color: white;
          padding: 14px 20px;
          border-radius: 999px;
          font-weight: 700;
        }

        @media (max-width: 760px) {
          .topbar,
          .menuItemTop {
            flex-direction: column;
            align-items: flex-start;
          }

          .menuPage {
            padding: 28px 16px 60px;
          }
        }
      `}</style>
    </>
  );
}
