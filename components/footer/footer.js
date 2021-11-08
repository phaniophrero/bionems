import Link from "next/link";
import Image from "next/image";
import logoFooter from "../../public/images/logo-footer.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Map from "./map";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <div className="footer__logo">
            <Image src={logoFooter} width={78} height={50} />
          </div>
          <div className="footer__social--media">
            <h3 className="footer__social--title">Trouvez nous sur</h3>
            <div className="footer__socialMedia--icons">
              <a
                className="footer__socialMedia--link"
                href="https://www.facebook.com/Dbionems"
              >
                <FaFacebook />
              </a>
              <a
                className="footer__socialMedia--link socialMedia__instagram"
                href="https://www.instagram.com/bionems.fr/"
              >
                <AiFillInstagram />
              </a>
              <a
                className="footer__socialMedia--link socialMedia__whatsapp "
                href="https://wa.me/0664709183"
              >
                <IoLogoWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__middle">
          <ul className="footer__middle--list">
            <li className="footer__middle--item">
              <span className="footer__middle--day">Lundi</span>
              <span className="footer__middle--hours">
                11h30 - 14h30 <span className="footer__green--line">|</span>{" "}
                17h30 - 20h30
              </span>
            </li>
            <li className="footer__middle--item">
              <span className="footer__middle--day">Mardi</span>
              <span className="footer__middle--hours">
                11h30 - 14h30 <span className="footer__green--line">|</span>{" "}
                17h30 - 20h30
              </span>
            </li>
            <li className="footer__middle--item">
              <span className="footer__middle--day">Mercredi</span>
              <span className="footer__middle--hours">
                11h30 - 14h30 <span className="footer__green--line">|</span>{" "}
                17h30 - 20h30
              </span>
            </li>
            <li className="footer__middle--item">
              <span className="footer__middle--day">Jeudi</span>
              <span className="footer__middle--hours">
                11h30 - 14h30 <span className="footer__green--line">|</span>{" "}
                17h30 - 20h30
              </span>
            </li>
            <li className="footer__middle--item">
              <span className="footer__middle--day">Vendredi</span>
              <span className="footer__middle--hours">
                11h30 - 14h30 <span className="footer__green--line">|</span>{" "}
                17h30 - 20h30
              </span>
            </li>
            <li className="footer__middle--item">
              <span className="footer__middle--day">Samedi</span>
              <span className="footer__middle--hours">
                11h30 - 14h30 <span className="footer__green--line">|</span>{" "}
                17h30 - 20h30
              </span>
            </li>
            <li className="footer__middle--item">
              <span className="footer__middle--day">Dimanche</span>
              <span className="footer__middle--hours">
                11h30 - 14h30 <span className="footer__green--line">|</span>{" "}
                17h30 - 20h30
              </span>
            </li>
          </ul>
        </div>

        <div className="footer__right">
          <Map />
        </div>
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
