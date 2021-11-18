import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import FooterMedia from "./footer-media";
import FooterOrar from "./footer-orar";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <FooterMedia />
        <FooterOrar />
      </div>

      <nav className="footer__nav">
        <ul className="footer__nav--list">
          <li className="footer__nav--item">
            <Link href="/">
              <a className="footer__link">Politique de confidentialité</a>
            </Link>
          </li>
          <li className="footer__nav--item">
            <Link href="/">
              <a className="footer__link">Conditions Generales</a>
            </Link>
          </li>
        </ul>
        <Link href="/">
          <a className="footer__link footer__link--copyright">
            &copy; Bionems {year}
          </a>
        </Link>

        <a
          href="https://wa.me/0664709183"
          className="footer__link footer__link--phoneNr"
        >
          <span className="map__phoneNr--icon-wrapper">
            <FaPhoneAlt />
          </span>
          06 64 70 91 83
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
