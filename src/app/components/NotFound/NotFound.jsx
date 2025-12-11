import Link from "next/link";
import Image from "next/image";
import Footer from "../Footer/Footer";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <nav className="not-found-nav">
        <Link className="logo" href="/">
          <Image
            src="/logo.png"
            alt="Les petits plats"
            width={207}
            height={25}
          />
        </Link>
      </nav>

      <main className="not-found-main">
        <h1>404 :(</h1>
        <p>La page que vous demandez est introuvable.</p>
      </main>

      <Footer />
    </div>
  );
}
