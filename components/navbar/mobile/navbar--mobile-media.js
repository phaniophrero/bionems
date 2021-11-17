import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarMobileMedia = () => {
  return (
    <div className="navbar-mobile--media">
      <Link href="/">
        <a>
          <div className="fb-image image">
            <Image
              src="/assets/navbar/mobile/fb.svg"
              alt="facebook"
              layout="fill"
            />
          </div>
        </a>
      </Link>

      <Link href="/">
        <a>
          <div className="ig-image image">
            <Image
              src="/assets/navbar/mobile/ig.svg"
              alt="instagram"
              layout="fill"
            />
          </div>
        </a>
      </Link>

      <Link href="/">
        <a>
          <div className="wp-image image">
            <Image
              src="/assets/navbar/mobile/wp.svg"
              alt="whatsupp"
              layout="fill"
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default NavbarMobileMedia;
