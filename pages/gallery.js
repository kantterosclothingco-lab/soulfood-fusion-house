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
            <img src="/images/catering1.jpg" />
            <img src="/images/catering2.jpg" />
            <img src="/images/catering3.jpg" />
            <img src="/images/catering4.jpg" />
            <img src="/images/catering5.jpg" />
            <img src="/images/catering6.jpg" />
          </div>
        </div>
      </main>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Inter", sans-serif;
          background: #faf7f2;
          color: #2a1c15;
        }

        h1 {
          font-family: "Cormorant Garamond", serif;
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background: #111;
        }

        .brand {
          color: white;
          font-family: "Cormorant Garamond", serif;
          font-size: 1.5rem;
        }

        .nav a {
          color: white;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
          text-align: center;
        }

        .sectionLabel {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #b57a39;
        }

        .galleryGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .galleryGrid img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: 12px;
        }

        @media (max-width: 768px) {
          .galleryGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}