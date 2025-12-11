import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <p>Copyright © {new Date().getFullYear()} - Les petits plats</p>
    </footer>
  );
}
