import React from "react";
import Image from "next/image";

const NavbarMobileFooter = () => {
  return (
    <div className="navbar-mobile--footer">
      <div className="mobile-footer--phone">
        <div className="image">
          <Image
            src="/assets/navbar/mobile/phone.svg"
            alt="phone"
            layout="fill"
          />
        </div>
        <p>06 64 70 91 83</p>
      </div>

      <div className="mobile-footer--map">
          map
      </div>
    </div>
  );
};

export default NavbarMobileFooter;
