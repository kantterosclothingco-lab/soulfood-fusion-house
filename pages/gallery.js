import Head from "next/head";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery | Soulfood Fusion</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="topbar">
        <Link href="/" className="brand">
          Soulfood Fusion
        </Link>

        <nav className="nav">
          <Link href="/catering">Back</Link>
        </nav>
      </header>

      <main className="galleryPage">
        <div className="container">
          <p className="sectionLabel">Gallery</p>
          <h1>Our Catering Experience</h1>

          <div className="galleryGrid">
            <img src="/images/catering1.jpg" alt="Soulfood catering 1" />
            <img src="/images/catering2.jpg" alt="Soulfood catering 2" />
            <img src="/images/catering3.jpg" alt="Soulfood catering 3" />
            <img src="/images/catering4.jpg" alt="Soulfood catering 4" />
            <img src="/images/catering5.jpg" alt="Soulfood catering 5" />
            <img src="/images/catering6.jpg" alt="Soulfood catering 6" />
            <img src="/images/catering7.jpg" alt="Soulfood catering 7" />
            <img src="/images/catering8.jpg" alt="Soulfood catering 8" />
            <img src="/images/catering9.jpg" alt="Soulfood catering 9" />
            <img src="/images/catering10.jpg" alt="Soulfood catering 10" />
            <img src="/images/catering11.jpg" alt="Soulfood catering 11" />
            <img src="/images/catering12.jpg" alt="Soulfood catering 12" />
            <img src="/images/catering13.jpg" alt="Soulfood catering 13" />
            <img src="/images/catering14.jpg" alt="Soulfood catering 14" />
          </div>
        </div>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
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

        h1 {
          font-family: "Cormorant Garamond", serif;
          font-size: 3rem;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background: #111;
          flex-wrap: wrap;
          gap: 14px;
        }

        .brand {
          color: white;
          font-family: "Cormorant Garamond", serif;
          font-size: 1.7rem;
          font-weight: 600;
        }

        .nav a {
          color: white;
          font-family: "Inter", sans-serif;
          font-weight: 500;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px 60px;
          text-align: center;
        }

        .sectionLabel {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #b57a39;
          margin-bottom: 8px;
        }

        .galleryGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 24px;
        }

        .galleryGrid img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }

        @media (max-width: 900px) {
          .galleryGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.4rem;
          }

          .topbar {
            padding: 16px 18px;
          }

          .galleryGrid {
            grid-template-columns: 1fr;
          }

          .galleryGrid img {
            height: 260px;
          }
        }
      `}</style>
    </>
  );
}