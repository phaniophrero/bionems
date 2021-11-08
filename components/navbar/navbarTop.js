import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/bionems-logo2.png";
import flag from "../../public/images/france.png";
import { GrFacebookOption } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

function NavbarTop() {
  return (
    <div className="navbarTop">
      <ul className="navbarTop__list">
        <li className="navbarTop__item navbarTop__flag">
          FR
          <span className="flagWrapper">
            <Image src={flag} width={27} height={18} />
          </span>
        </li>
        <li className="navbarTop__item">
          <Link href="/">
            <a className="navbarTop__link logoWrapper">
              <Image src={logo} width={175} height={50} />
            </a>
          </Link>
        </li>
        <li className="navbarTop__item navbarTop__contact">
          <Link href="https://www.facebook.com/Dbionems">
            <a className="navbarTop__link socialMedia">
              <GrFacebookOption />
            </a>
          </Link>
          <Link href="https://wa.me/0664709183">
            <a className="navbarTop__link socialMedia socialMediaPhone">
              <span className="phoneIcon__wrapper">
                <FaPhoneAlt />
              </span>
              06 64 70 91 83
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarTop;
