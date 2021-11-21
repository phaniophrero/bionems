import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const FooterMedia = () => {
  return (
    <div className="footer-media">
      <div className="footer-logo-image">
        <Image src="/assets/footer/logo@3x.png" alt="logo" layout="fill" />
      </div>

      <div className="footer-social">
        <p>Trouvez nous sur</p>

        <div className="images-wrapper">
          <div className="fb-image">
            <Link href="https://www.facebook.com/Dbionems">
              <a className="fb--icon">
                <FaFacebook />
              </a>
            </Link>
          </div>

          <div className="ig-image">
            <Link href="https://www.instagram.com/bionems.fr/">
              <a className="ig--icon">
                <AiFillInstagram />
              </a>
            </Link>
          </div>

          <div className="wp-image">
            <Link href="https://wa.me/0664709183">
              <a className="wp--icon">
                <IoLogoWhatsapp />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMedia;
