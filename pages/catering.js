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

          <div className="noteBox">
            <p>
              <strong>Note:</strong> You can add more dishes or dessert menu
              items to alter your catering package based on your event needs.
            </p>
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
            <p>
              Whether you are planning a generous buffet-style gathering, shared
              platters for a relaxed celebration, or a menu built around
              canapés, mains, sides, and desserts, we offer a broad range of
              menu selections that can be adapted to suit your needs.
            </p>
            <p>
              The categories below are a sample collection of what we can offer.
              They are designed to give you a clear view of the range available,
              while still leaving room to tailor the final menu around your
              event, guest numbers, and preferred service style.
            </p>
            <p className="dietNote">
              Dietary requirements may be accommodated with notice. Please
              contact us in advance to discuss your event requirements.
            </p>
          </div>

          <div className="menuGrid">
            <article className="menuCard featuredMenu">
              <h3>Entree / Starter</h3>
              <p>
                Pork BBQ Skewers, Chicken BBQ Skewers, Chicken Satay Skewers,
                Chicken Teriyaki Skewers, Cajun Prawn and bacon, Beef Kofta,
                Cheesy Beef Taco&apos;s, Fried Pork Boritos, Spring roll veg /
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
              <p className="smallText">
                Extra Dish By Tray price to Follow Upon Request.
              </p>
            </article>

            <article className="menuCard">
              <h3>Potato Dish</h3>
              <p>
                Creamy Mashed Potato, Sweet Potato mashed, Lyonnaise Potatoes,
                Herb Roast Potato, Chips, Potato wedges.
              </p>
              <p className="smallText">
                Extra Dish By Tray price to Follow Upon Request.
              </p>
            </article>

            <article className="menuCard">
              <h3>Pasta</h3>
              <p>
                Baked mac &amp; cheese, Beef Lasagne, Vegetable Lasagne,
                Spinach Ricotta Lasagne, Pinoy Spagetti, Pasta Bolognese, Meat
                &amp; Cheese Cannelloni, Spinach Ricotta, Chicken Pesto pasta,
                Beef Ragu pasta, Smoke salmon pesto pasta, Clam pasta, Creamy
                Carbonara pasta.
              </p>
              <p className="smallText">
                Extra Dish By Tray price to Follow Upon Request.
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
              <p className="smallText">
                Extra Dish By Tray price to Follow Upon Request.
              </p>
            </article>

            <article className="menuCard">
              <h3>Main Menu · Beef</h3>
              <p>
                Pot roast beef (Brasato Di Manzo), Beef Curry, Beef Rendang,
                Beef Teriyaki w/ Stir fry veg, Beef Stroganoff, Stir fry beef
                &amp; Veg, Beef Asado, Beef Stew Caldereta, Beef Tapa, Beef
                Broccoli, Beef Kare-kare, Beef Lengua in creamy mushroom sauce,
                Spanish Beef Callos, Beef Goulash, Beef Pares, Beef pochero.
              </p>
              <p className="smallText">
                Extra Dish By Tray price to Follow Upon Request.
              </p>
            </article>

            <article className="menuCard">
              <h3>Main Menu · Lamb</h3>
              <p>
                Lamb curry, Musaka, Shepherds Pie, Lamb Kebab, Lamp Cofta,
                Cheesy Lamb Rissole napoli, Lamb in red wine jus, Lamb Rib BBQ.
              </p>
              <p className="smallText">
                Extra Dish By Tray price to Follow Upon Request.
              </p>
            </article>

            <article className="menuCard">
              <h3>Main Menu · Pork</h3>
              <p>
                Pork Sisig, Crispy pork pata (Knuckle), Pork meatloaf
                (Embutido), Pork Menudo, Sweet &amp; Sour Pork, Smokey Pork BBQ
                spare ribs, Grilled spice pork chop, Maple glazed pork, Pork
                Adobo w/egg, Spicy Bicol Express, Pork Lechon Paksiw, Crispy
                Pork Bagnet, Pork Asado, Pork Afritada, Pork Igado, Pork
                Dinuguan, Pork Dinak-dakan, Pork Patatim.
              </p>
              <p className="smallText">
                Extra Dish By Tray price to Follow Upon Request.
              </p>
            </article>

            <article className="menuCard">
              <h3>Main Menu · Chicken</h3>
              <p>
                Grilled Chicken Inasal boneless, Lemon Chicken, Chicken Curry,
                Chicken Cordon Bleu, Chicken sweet &amp; sour, Chicken Adobo
                w/egg, Chicken Afritada, Chicken Ala king, Chicken Roulade,
                Chicken pastel, Chicken Cacciatore, Chicken Honey Soy, Fried
                Chicken w/gravy, Chicken Teriyaki w/stir fry veg, Chicken
                Bufalo wings, Korean chicken bonchon, Chicken karaage, Peri
                peri Chicken, Jamaican Jerk Chicken.
              </p>
            </article>

            <article className="menuCard">
              <h3>Seafood</h3>
              <p>
                Coconut prawn with Veg, Cream Coconut barramundi fried fish,
                Garlic butter prawn, Leeks oyster prawn, Relyenong Bangus,
                Sweet &amp; Sour Barramundi Fish, Fried mixed seafoods &amp;
                chips, Sauteed Asara Clam, Sinugnong Tilapia, Daing na Bangus,
                Cajun Seafoods, Seafood Paella.
              </p>
              <p className="smallText">
                Extra Dish By Tray price to Follow Upon Request.
              </p>
            </article>

            <article className="menuCard">
              <h3>Vegetables</h3>
              <p>
                Chopsuey, Herb roast vegetables, Vegetable tempura, Korean
                Vegetable pancake, Gising-gising, Sauteed chinese broccoli with
                oyster sauce, Sauteed water spinach with crispy tufo, chilli
                tufo, Pakbet, Spicy Taro leaves (Laing).
              </p>
              <p className="smallText">
                Extra Dish By Tray price to Follow Upon Request.
              </p>
            </article>

            <article className="menuCard">
              <h3>Roast / Lechon / Carving</h3>
              <p>Boneless Lechon Belly, Lamb Roast, Beef Roast.</p>
            </article>

            <article className="menuCard">
              <h3>Platter Menu</h3>
              <p>
                Fruit Platter, Antipasto, Canapes.
              </p>
              <p className="smallText">
                Fruit platter: seasonal fruit slice and arranged beautifully in
                a platter.
              </p>
              <p className="smallText">
                Antipasto: mixed cold cuts, biscuit, cheese, dried nuts well
                presented in a platter.
              </p>
              <p className="smallText">
                Canapes: mini assorted canapes arranged in a platter.
              </p>
            </article>

            <article className="menuCard">
              <h3>Hot Platters</h3>
              <p>
                Mini Assorted Pizzas, Mixed Asian Bites Platter, Mini Gourmet
                Pies, Mini Halloumi Sliders, Mini Beef Sliders, Mini Pulled
                Pork sliders, Crispy Prawn Mini Bao, Filipino BBQ Pork
                Skewers, Filipino BBQ Chicken Skewers, Italian Meatballs in
                Napoli Sauce, Satay Chicken Skewers, Morocca Chicken Skewers,
                Lamb Kofta with Tzatziki, Crumbed Barramundi Fillet Bites,
                Salt &amp; Pepper Calamari, Korean fried Chicken bites with
                Gochujang Mayo, Buffalo wings with Blue Cheese Dressing,
                Chicken Drumettes with sriracha Mayo, Mexican fried Burritos,
                Potato Croquettes with Quezo Dip, Pumpkin Truffle Arancini
                Balls.
              </p>
            </article>

            <article className="menuCard">
              <h3>Cold Platters</h3>
              <p>
                King Prawn Cocktail Cups, Kani Vietnamese, Rice paper Rolls
                Vietnamese, Rice Paper rolls Salmon Crostini, Bread &amp;
                Crackers with Trio Dips, Vegetable Crudites With Dips,
                Bruschetta, Italian Cheese Antipasto Platter, Mixed-Sushi.
              </p>
            </article>

            <article className="menuCard">
              <h3>Sandwiches</h3>
              <p>
                Chicken &amp; Veg wrap, Marinated Veg wrap, Chicken Ceasar
                wrap, Chicken cheese croissant, Ham &amp; Cheese Croissant,
                Tempura Veg Croissant, BLT Croissant, Roast Beef Croissant.
              </p>
            </article>

            <article className="menuCard">
              <h3>Sandwiches and Baguettes</h3>
              <p>
                Gourmet egg sandwich, Gourmet BLT sandwich, Gourmet Roast Beef
                Sandwich, Turkey Rueben Sandwich, Smoke salmon gormet
                baguettes, Italian Roasted Vege Gourmet Baguettes, Gourmet
                Roast Chicken, Gourmet Ham &amp; Cheese sandwich.
              </p>
            </article>

            <article className="menuCard">
              <h3>Soulfood Sweet Dessert</h3>
              <p className="smallLead">Desserts · Minimum of 20 orders</p>
              <p>
                Mango Graham Float, Ube Graham Float, Triple Chocolate Mousse,
                Flavoured Pannacotta, Cream Brulee, Buko Pandan with Jelly,
                Cream Caramel Flan, Italian Tiramisu, Ube Biko, Pandan Biko.
              </p>
              <p className="smallText">
                Flavoured Pannacotta: Strawberry, Mango, Ube, Caramel, Pandan.
              </p>
            </article>

            <article className="menuCard">
              <h3>Dessert Bar</h3>
              <p>
                Rumballs, Banana Bread, Fruit Platter, Tim Tam Cheesecake,
                Black forest Cake, Passionfruit Cheesecake, Mexed berry
                Cheesecake, Lemon Tart, Jelly Cups (Orange or Strawberry),
                Carrot cake, Mixed Macarons, Ube Pannacotta, Nutella &amp;
                Ferrero Rocher Mousse, Tiramisu, Lemon Meringue, Vanilla Bean
                Pannacotta, Mango Pannacotta, Mini Pavlova, Lotus Biscoff
                Cheesecake.
              </p>
            </article>

            <article className="menuCard">
              <h3>Drinks</h3>
              <p>
                Soda in can: Coke, Sprite, Fanta, Coke Zero, Diet Coke,
                Mountain Dew. Bottle Water. Sparkling Water.
              </p>
            </article>

            <article className="menuCard">
              <h3>Special Drinks</h3>
              <p className="smallLead">Drinks in jugs · Unlimited for 20 pax</p>
              <p>
                Ice tea, Tropical, Pine apple orange, Refreshing Peach & Lemon
                ice tea with mint, Sago&apos;t gulaman, Lemon lime bitters,
                Raspberry bitters.
              </p>
            </article>

            <article className="menuCard">
              <h3>Coffee &amp; Teas</h3>
              <p>
                White blend coffee, black blend coffee, Decaf Coffees, Hot
                chocolates, Green Tea, Earl Grey Tea, Lemon &amp; Ginger Tea.
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
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Soulfood Fusion Catering</p>
        <div className="footerLinks">
          <a href="#about">About</a>
          <a href="#packages">Packages</a>
          <a href="#menus">Menus</a>
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
        .secondaryBtn {
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

        .menusIntro p {
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
        }

        .dietNote {
          font-size: 0.86rem !important;
          color: #8a6d52 !important;
        }

        .packageGrid,
        .menuGrid,
        .contactGrid {
          display: grid;
          gap: 22px;
        }

        .packageGrid {
          grid-template-columns: repeat(2, 1fr);
          margin-bottom: 20px;
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
        .contactCard,
        .noteBox {
          background: #fffdf9;
          border: 1px solid #f0e6d8;
          padding: 18px;
        }

        .featuredMenu {
          border-color: #e6d2b4;
          background: #fffaf4;
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
        .contactCard p,
        .noteBox p {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #6f5a49;
          margin: 0;
        }

        .menuCard .smallLead {
          font-size: 0.8rem;
          line-height: 1.5;
          color: #9b7a55;
          margin-bottom: 8px;
        }

        .menuCard .smallText {
          font-size: 0.82rem;
          line-height: 1.58;
          margin-top: 8px;
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
          font-weight: 600;
          font-size: 0.92rem;
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
