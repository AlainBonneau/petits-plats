import Link from "next/link";
import Image from "next/image";
import SearchButton from "../SearchButton/SearchButton";
import "./Header.css";

export default function Header({ search, setSearch }) {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Les petits plats"
            width={207}
            height={25}
            className="logo"
          />
        </Link>
      </nav>
      <div className="home-container">
        <div className="title-input-container">
          <h1>
            Découvrez nos recettes du <br /> quotidien, simples et délicieuse
          </h1>
          <SearchButton value={search} onChange={setSearch} />
        </div>
      </div>
    </header>
  );
}
