import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarMobile from "./mobile/navbar--mobile";

const DUMMY_WEEK = [
  {
    day: "Lundi",
    open: 8,
    close: 18,
  },

  {
    day: "Mardi",
    open: 8,
    close: 18,
  },

  {
    day: "Mercredi",
    open: 8,
    close: 18,
  },

  {
    day: "Jeudi",
    open: 8,
    close: 18,
  },

  {
    day: "Vendredi",
    open: 8,
    close: 18,
  },

  {
    day: "Dimanche",
    open: 8,
    close: 18,
  },
];

const navbar = () => {
  const [isOpen, setIsOpen] = useState("");
  const [seeOrar, setSeeOrar] = useState(false);
  const today = new Date();
  const [day, setDay] = useState(today.getDay());
  const [hour, setHour] = useState(today.getHours());
  const mintues = today.getMinutes();

  const seeOrarHandler = () => setSeeOrar((prev) => setSeeOrar(!prev));

  useEffect(() => {
    if (hour >= 18 || hour < 8) {
      setIsOpen("inchis");
    }

    if (hour >= 8 && hour < 18) {
      setIsOpen("deschis");
    }
  }, []);

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
            <div className="orar-box" onClick={seeOrarHandler}>
              {DUMMY_WEEK.map(
                (program, index) =>
                  index + 1 === day && (
                    <Fragment key={index}>
                      <div className="orar-box--item">
                        <p className="is-open">{isOpen}:</p>
                        <p>{program.day}</p>
                        <p>{program.open}:00</p>
                        <p>|</p>
                        <p>{program.close}:00</p>
                      </div>
                    </Fragment>
                  )
              )}

              {seeOrar && (
                <ul className="orar-dropdown">
                  {DUMMY_WEEK.map((program, index) => (
                    <li key={index}>
                      <p>{program.day}</p>
                      <p>{program.open}:00</p>
                      <p>|</p>
                      <p>{program.close}:00</p>
                    </li>
                  ))}
                </ul>
              )}
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
