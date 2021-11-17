import React from "react";
import Image from "next/image";

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
            <Image src="/assets/footer/fb.svg" alt="fb" layout="fill" />
          </div>

          <div className="ig-image">
            <Image src="/assets/footer/ig.svg" alt="ig" layout="fill" />
          </div>

          <div className="wp-image">
            <Image src="/assets/footer/wp.svg" alt="logo" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMedia;
