import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarMobile from "./mobile/navbar--mobile";

const navbar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <header className="navbar">
        <main className="top">
          <NavbarMobile />

          <div className="flag">
            <div className="flag-image">
              <Image src="/assets/navbar/flag.svg" alt="flag" layout="fill" />
            </div>
          </div>

          <div className="orar">
            <div className="orar-box">
              <p>program</p>
            </div>
          </div>

          <div className="logo">
            <Image src="/assets/navbar/logo@3x.png" alt="logo" layout="fill" />
          </div>

          <div className="media">
            <div className="facebook-image">
              <Image
                src="/assets/navbar/facebook.svg"
                alt="logo"
                layout="fill"
              />
            </div>

            <div className="whatsapp-image">
              <Image
                src="/assets/navbar/whatsapp.svg"
                alt="logo"
                layout="fill"
              />
            </div>

            <p>06 64 70 91 83</p>
          </div>
        </main>
      </header>
    </>
  );
};

export default navbar;
