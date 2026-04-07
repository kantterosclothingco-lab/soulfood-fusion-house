import Head from "next/head";
import Link from "next/link";

const reviewLink =
  "https://www.google.com/search?sca_esv=1578db8b805c577c&sxsrf=ANbL-n6D8nRjb_fNMoNfjrpx3FLWu0Z8RQ:1774762975084&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdn7PKGMS2CqhpWnURd-em_dI93f_FTD6soC0lZqrBmEJNFVQwA2NFk7OvIIk9SURLjnweEVxpWw3g382Vt6Dbyo107aDNHzg2-Zui6vlEAuE9PwwJmD-8wxId7WF1Ue61sAvWo%3D&q=SoulFood+Fusion+House+Cafe+%26+Restaurant+Reviews&sa=X&ved=2ahUKEwipysKls8STAxVMla8BHacLIl0Q0bkNegQIKBAH&biw=1358&bih=644&dpr=1";

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=8+High+St,+Bendigo+VIC+3550,+Australia";

const menuSections = [
  {
    title: "Steak & Grill",
    items: [
      {
        name: "Filo BBQ Ribs",
        price: "Single $29.9 • Share $34.0",
        image: "/images/menu/filo-bbq-ribs.jpg",
        description:
          "Filo style pork ribs barbecue. Single comes with Java rice, chips, or salad. Share comes with salad only.",
      },
      {
        name: "Grilled Chicken Inasal",
        price: "Single $24.9 • Share $28.9",
        image: "/images/menu/grilled-chicken-inasal.jpg",
        description:
          "Char-grilled chicken marinated in Soulfood special sauce. Single comes with rice, chips, or salad. Share comes with salad only.",
      },
      {
        name: "Pinoy Barbeque Skewers",
        price: "Meal $24.5 • 3pcs $21.0 • 8pcs $42",
        image: "/images/menu/pinoy-barbeque-skewers.jpg",
        description:
          "Pinoy-style barbecue marinated with Soulfood signature barbecue sauce.",
      },
      {
        name: "Porterhouse",
        price: "$36",
        image: "/images/menu/porterhouse-steak.jpg",
        description:
          "300 grams Vic farm grain. Includes salad, veggies, Java, mash, or chips.",
      },
      {
        name: "Sizzling Pork Sisig",
        price: "$28",
        image: "/images/menu/sizzling-pork-sisig.jpg",
        description: "A sizzling Filipino favorite with bold flavor.",
      },
      {
        name: "Sizzling Tofu",
        price: "$23",
        image: "/images/menu/sizzling-tofu.jpg",
        description: "A satisfying sizzling vegetarian option.",
      },
      {
        name: "Sizzling Calamari",
        price: "$26",
        image: "/images/menu/sizzling-calamari.jpg",
        description: "Tender calamari served sizzling hot.",
      },
      {
        name: "Soulfood Burger",
        price: "$26",
        image: "/images/menu/soulfood-burger.jpg",
        description:
          "Grilled Angus beef topped with melted cheese, bacon, pineapple, and smashed avo.",
      },
      {
        name: "Moroccan Grilled Chicken Burger",
        price: "$24",
        image: "/images/menu/moroccan-grilled-chicken-burger.jpg",
        description: "Cajun marinated chicken fillet with Asian slaw.",
      },
      {
        name: "Buttermilk Fried Chicken Burger",
        price: "$24",
        image: "/images/menu/buttermilk-fried-chicken-burger.jpg",
        description: "Buttermilk fried chicken with coleslaw and cheese.",
      },
      {
        name: "Crispy Pork Belly Roll",
        price: "$23",
        image: "/images/menu/crispy-pork-belly-roll.jpg",
        description: "A hearty pork belly roll with crisp texture and rich taste.",
      },
    ],
  },
  {
    title: "Soup",
    items: [
      { name: "Lomi Noodle Soup", price: "$28", image: "/images/menu/lomi-noodle-soup.jpg", description: "Comforting noodle soup with a rich broth." },
      { name: "Pork Sinigang", price: "$34", image: "/images/menu/pork-sinigang.jpg", description: "Classic sour Filipino soup with pork." },
      { name: "Beef Nilaga", price: "$36", image: "/images/menu/beef-nilaga.jpg", description: "A hearty beef soup perfect for comfort meals." },
      { name: "Sinigang Barramundi Fish", price: "$36", image: "/images/menu/sinigang-barramundi-fish.jpg", description: "Barramundi in a sour soup base with bright flavor." },
    ],
  },
  {
    title: "Vegetables",
    items: [
      { name: "Chopseuy / Mix Vegetables (VG) (GF)", price: "$23", image: "/images/menu/chopseuy-mix-vegetables.jpg", description: "Fresh mixed vegetables cooked in a savory style." },
      { name: "Pakbet", price: "$23", image: "/images/menu/pakbet.jpg", description: "Traditional vegetable dish. Add Meat $8, Chicken $7, Pork $8." },
      { name: "Stir Fry Noodles (VG) (GF)", price: "$24", image: "/images/menu/stir-fry-noodles.jpg", description: "Choice of rice noodle or Hokkien noodles. Add Chicken $7, Pork $8, Beef $8, Prawn $9." },
    ],
  },
  {
    title: "Appetizer",
    items: [
      { name: "Asian Fried Calamari", price: "$17.60", image: "/images/menu/asian-fried-calamari.jpg", description: "Crispy calamari with salad, mayo, and signature vinegar dip." },
      { name: "Pork Spring Roll (Shang-hai)", price: "$14.00", image: "/images/menu/pork-spring-roll.jpg", description: "A crispy and flavorful appetizer favorite." },
      { name: "Boneless Crispy Chicken Bites", price: "$16.00", image: "/images/menu/boneless-crispy-chicken-bites.jpg", description: "Crunchy bites of chicken with a satisfying finish." },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Steam Rice", price: "$7", image: "/images/menu/steam-rice.jpg", description: "Simple steamed rice for any meal." },
      { name: "Young Chow Fried Rice (Family Share)", price: "$19", image: "/images/menu/young-chow-fried-rice.jpg", description: "A rich fried rice option made for sharing." },
      { name: "Java Rice", price: "$9", image: "/images/menu/java-rice.jpg", description: "A seasoned side with bold flavor." },
      { name: "Garlic Rice", price: "$9", image: "/images/menu/garlic-rice.jpg", description: "Fragrant garlic rice to complete the meal." },
      { name: "Bowl Chips", price: "$12", image: "/images/menu/bowl-chips.jpg", description: "A generous serving of crispy chips." },
      { name: "Steam Vegetables", price: "$15", image: "/images/menu/steam-vegetables.jpg", description: "A lighter side with fresh vegetables." },
    ],
  },
  {
    title: "House Specials",
    items: [
      { name: "Beef Tapa Salad", price: "$24.19", image: "/images/menu/beef-tapa-salad.jpg", description: "A lighter tapa option served as a salad." },
      { name: "Prawn & Avo Salad", price: "$22.50", image: "/images/menu/prawn-avo-salad.jpg", description: "Fresh salad with prawns and creamy avocado." },
      { name: "Crispy Pork Belly (Bagnet)", price: "$26.00", image: "/images/menu/crispy-pork-belly-bagnet.jpg", description: "Golden crispy pork belly with rich flavor." },
      { name: "Chicken Adobo w/ Egg", price: "$28.60", image: "/images/menu/chicken-adobo-egg.jpg", description: "Classic adobo served with egg." },
      { name: "Beef Tapa (Tapsilog)", price: "$28.60", image: "/images/menu/beef-tapa-tapsilog.jpg", description: "A house favorite with bold beef flavor." },
      { name: "Crispy Pata Family Size", price: "$39.0", image: "/images/menu/crispy-pata-family.jpg", description: "A family-sized crispy pata made for sharing." },
      { name: "Beef Brisket Kare-kare (Share)", price: "$34.0", image: "/images/menu/beef-brisket-kare-kare.jpg", description: "Beef brisket in a rich kare-kare style." },
      { name: "Creamy Barra Fish", price: "$26", image: "/images/menu/creamy-barra-fish.jpg", description: "Barramundi with a creamy savory finish." },
      { name: "Crispy Fried Tilapia (Whole Fish)", price: "$28 • Additional Sauce $5.0", image: "/images/menu/crispy-fried-tilapia.jpg", description: "Whole crispy fried tilapia with optional extra sauce." },
      { name: "Sweet & Sour Barramundi (Whole Fish)", price: "Regular $36.9 • Large $39.90", image: "/images/menu/sweet-sour-barramundi.jpg", description: "Whole barramundi served in a sweet and sour style." },
      { name: "Dinuguan sa Gata", price: "$25.0", image: "/images/menu/dinuguan-sa-gata.jpg", description: "A rich house specialty with deep savory flavor." },
    ],
  },
];

function MenuSection({ title, items }) {
  return (
    <section className="menuSection">
      <div className="sectionHeading">
        <p className="sectionLabel">Menu</p>
        <h2>{title}</h2>
      </div>

      <div className="menuGrid">
        {items.map((item) => (
          <article className="menuCard" key={item.name}>
            <div className="menuImageWrap">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="menuBody">
              <div className="menuTop">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>
              <p>{item.description}</p>
              <div className="menuActions">
                <Link href="/checkout" className="orderBtn">🛒 Order Now</Link>
              </div>
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
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <header className="topbar">
        <Link href="/" className="brand brandWithLogo">
          <img src="/images/logo/logo.png" alt="Soulfood Fusion House Logo" className="logo" />
          <span>Soulfood Fusion House</span>
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/checkout" className="orderBtn">🛒 Checkout</Link>
          <a href={mapLink} target="_blank" rel="noreferrer" className="menuBtn">📍 Map</a>
          <a href={reviewLink} target="_blank" rel="noreferrer" className="reviewBtn">⭐ Reviews</a>
        </nav>
      </header>

      <main className="menuPage">
        <section className="menuHero">
          <div className="menuHeroOverlay" />
          <div className="menuHeroContent">
            <p className="sectionLabel light">Full Menu</p>
            <h1>Explore the full menu</h1>
            <p>
              From steak and grill favorites to soups, vegetables, sides, and
              house specials — everything is here in one place.
            </p>
          </div>
        </section>

        {menuSections.map((section) => (
          <MenuSection key={section.title} title={section.title} items={section.items} />
        ))}

        <div className="bottomCta">
          <Link href="/checkout" className="backBtn">🛒 Proceed to Checkout</Link>
        </div>
      </main>

      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Arial, sans-serif; background: #f8f4ee; color: #2b1c15; }
        a { text-decoration: none; }
        img { display: block; width: 100%; }

        .topbar {
          position: sticky; top: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center;
          padding: 18px 28px; background: rgba(17,10,8,0.88); backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(212,174,112,0.18); flex-wrap: wrap; gap: 14px;
        }
        .brand, .nav a { color: #fff4e8; font-weight: 700; }
        .brandWithLogo { display: flex; align-items: center; gap: 12px; }
        .logo { width: 52px; height: 52px; object-fit: contain; border-radius: 12px; background: white; padding: 4px; }
        .nav { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }

        .menuBtn, .orderBtn, .reviewBtn {
          padding: 11px 18px; border-radius: 999px; font-weight: 700; display: inline-block;
        }
        .menuBtn { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18); color: #fff4e8 !important; }
        .orderBtn { background: linear-gradient(135deg, #c79356, #e7c78a); color: #1e120d !important; }
        .reviewBtn { background: #3a2a20; color: #fff4e8 !important; }

        .menuPage { max-width: 1280px; margin: 0 auto; padding-bottom: 70px; }
        .menuHero {
          position: relative; min-height: 50vh; margin: 0 28px; border-radius: 0 0 28px 28px;
          overflow: hidden; background: url("/images/menu/porterhouse-steak.jpg") center/cover no-repeat;
          display: flex; align-items: end;
        }
        .menuHeroOverlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(18,10,8,0.28), rgba(18,10,8,0.82));
        }
        .menuHeroContent { position: relative; z-index: 2; padding: 42px 32px; max-width: 760px; }
        .sectionLabel { text-transform: uppercase; letter-spacing: 0.18em; font-size: 0.78rem; font-weight: 700; color: #c99961; }
        .light { color: #f0d8b3; }
        .menuHero h1 { font-size: clamp(2.3rem, 6vw, 4.6rem); line-height: 1.02; color: #fff8f0; margin: 12px 0 14px; }
        .menuHero p { color: #eadbcb; line-height: 1.8; margin: 0; }

        .menuSection { padding: 64px 28px 0; }
        .sectionHeading { margin-bottom: 24px; }
        .sectionHeading h2 { margin: 10px 0 0; font-size: clamp(1.9rem, 4vw, 3rem); color: #2f1d15; }

        .menuGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .menuCard {
          background: #fff; border: 1px solid #ead7bf; border-radius: 24px; overflow: hidden;
          box-shadow: 0 18px 42px rgba(53,31,18,0.08); transition: 0.3s ease;
        }
        .menuCard:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(53,31,18,0.12); }
        .menuImageWrap { height: 250px; overflow: hidden; }
        .menuImageWrap img { height: 100%; object-fit: cover; transition: transform 0.45s ease; }
        .menuCard:hover .menuImageWrap img { transform: scale(1.05); }
        .menuBody { padding: 24px; }
        .menuTop { display: flex; justify-content: space-between; gap: 16px; align-items: flex-start; margin-bottom: 10px; }
        .menuTop h3 { margin: 0; color: #332116; }
        .menuTop span { color: #b57a39; font-weight: 700; white-space: nowrap; }
        .menuBody p { margin: 0 0 16px; color: #6f5a49; line-height: 1.75; }
        .menuActions { display: flex; }
        .bottomCta { text-align: center; margin-top: 46px; padding: 0 28px; }
        .backBtn {
          display: inline-block; padding: 14px 22px; border-radius: 999px;
          background: linear-gradient(135deg, #c79356, #ebce97); color: #1e120d; font-weight: 700;
        }

        @media (max-width: 980px) {
          .menuGrid { grid-template-columns: 1fr; }
          .topbar, .menuSection, .bottomCta { padding-left: 18px; padding-right: 18px; }
          .menuHero { margin: 0 18px; min-height: 42vh; }
        }
      `}</style>
    </>
  );
}
