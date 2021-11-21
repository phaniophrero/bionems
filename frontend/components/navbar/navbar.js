import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarMobile from "./mobile/navbar--mobile";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DUMMY_WEEK = [
  {
    day: "lundi",
    openFirst: "10:30",
    closeFirst: "14:30",
  },

  {
    day: "mardi",
    openFirst: "10:30",
    closeFirst: "14:30",
    openSecond: "17:00",
    closeSecond: "20:30",
  },

  {
    day: "mercredi",
    openFirst: "10:30",
    closeFirst: "14:30",
    openSecond: "17:00",
    closeSecond: "20:30",
  },

  {
    day: "jeudi",
    openFirst: "10:30",
    closeFirst: "14:30",
    openSecond: "17:00",
    closeSecond: "20:30",
  },

  {
    day: "vendredi",
    openFirst: "10:30",
    closeFirst: "14:30",
    openSecond: "17:00",
    closeSecond: "20:30",
  },
  {
    day: "samedi",
    openFirst: "10:30",
    closeFirst: "14:30",
    openSecond: "17:00",
    closeSecond: "20:30",
  },

  {
    day: "dimanche",
    openFirst: "10:30",
    closeFirst: "14:30",
  },
];

const navbar = () => {
  const [isOpen, setIsOpen] = useState("");
  const [seeOrar, setSeeOrar] = useState(false);
  // const [seeOrarHover, setSeeOrarHover] = useState(false);
  const today = new Date();
  const todayName = new Date().toLocaleString("fr-FR", { weekday: "long" });

  // const hoverHandler = () => {
  //   setSeeOrarHover((prev) => setSeeOrarHover(!prev));
  // };

  // const [day, setDay] = useState("");
  // const [hour, setHour] = useState(
  //   today.toLocaleTimeString([], {
  //     // hour12: false,
  //     hour: "numeric",
  //   })
  // );
  const [time, setTime] = useState(
    today.toLocaleString("fr-FR", { hour: "2-digit", minute: "2-digit" })
  );
  // const [minutes, setMinutes] = useState(
  //   today.toLocaleTimeString([], {
  //     hour12: false,
  //     minute: "2-digit",
  //   })
  // );

  const seeOrarHandler = () => {
    setSeeOrar((prev) => setSeeOrar(!prev));
  };

  useEffect(() => {
    // if (
    //   (todayName == "lundi" && hour >= 10 && minutes >= 30) ||
    //   (hour <= 14 && minutes >= 30)
    // ) {
    //   setIsOpen("Ouverte:");
    // } else if (
    //   todayName == "mardi" ||
    //   todayName == "mercredi" ||
    //   todayName == "jeudi" ||
    //   todayName == "vendredi" ||
    //   (todayName == "samedi" && hour >= 10 && minutes >= 30) ||
    //   (hour <= 14 && minutes >= 30) ||
    //   hour >= 17 ||
    //   (hour <= 20 && minutes >= 30)
    // ) {
    //   setIsOpen("Ouverte:");
    // } else if (
    //   (todayName == "dimanche" && hour >= 10 && minutes >= 30) ||
    //   (hour <= 14 && minutes >= 30)
    // ) {
    //   setIsOpen("Ouverte:");
    // } else {
    //   setIsOpen("Fermée");
    // }
    if (
      todayName === "lundi" &&
      time >= "10:30" &&
      todayName === "lundi" &&
      time <= "14:30"
    ) {
      setIsOpen("Ouverte:");
    } else if (
      todayName === "mardi" &&
      time >= "10:30" &&
      todayName === "mardi" &&
      time <= "14:30"
    ) {
      setIsOpen("Ouverte:");
    } else if (
      todayName === "mardi" &&
      time >= "17:00" &&
      todayName === "mardi" &&
      time <= "20:30"
    ) {
      setIsOpen("Ouverte:");
    } else if (
      todayName === "mercredi" &&
      time >= "10:30" &&
      todayName === "mercredi" &&
      time <= "14:30"
    ) {
      setIsOpen("Ouverte:");
    } else if (
      todayName === "mercredi" &&
      time >= "17:00" &&
      todayName === "mercredi" &&
      time <= "20:30"
    ) {
      setIsOpen("Ouverte:");
    } else if (
      todayName === "jeudi" &&
      time >= "10:30" &&
      todayName === "jeudi" &&
      time <= "14:30"
    ) {
      setIsOpen("Ouverte:");
    } else if (
      todayName === "jeudi" &&
      time >= "17:00" &&
      todayName === "jeudi" &&
      time <= "20:30"
    ) {
      setIsOpen("Ouverte:");
    } else if (
      todayName === "vendredi" &&
      time >= "10:30" &&
      todayName === "vendredi" &&
      time <= "14:30"
    ) {
      setIsOpen("Ouverte:");
    } else if (
      todayName === "vendredi" &&
      time >= "17:00" &&
      todayName === "vendredi" &&
      time <= "20:30"
    ) {
      setIsOpen("Ouverte:");
    } else if (
      todayName === "samedi" &&
      time >= "10:30" &&
      todayName === "samedi" &&
      time <= "14:30"
    ) {
      setIsOpen("Ouverte:");
    } else if (
      todayName === "samedi" &&
      time >= "17:00" &&
      todayName === "samedi" &&
      time <= "20:30"
    ) {
      setIsOpen("Ouverte:");
    } else if (todayName === "dimanche" && time >= "10:30" && time <= "14:30") {
      setIsOpen("Ouverte:");
    } else {
      setIsOpen("Fermée");
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
            <div
              className="orar-box"
              // onMouseOver={hoverHandler}
              onClick={seeOrarHandler}
            >
              {DUMMY_WEEK.map(
                (program, index) =>
                  todayName === program.day && (
                    <Fragment key={index}>
                      <div className="orar-box--item">
                        <p
                          className={`is-open ${
                            isOpen === "Fermée" ? "closed" : ""
                          }`}
                        >
                          {isOpen}
                        </p>
                        {isOpen === "Fermée" ? <p></p> : <p>{program.day}</p>}

                        <p>
                          {isOpen === "Fermée" ? (
                            <span></span>
                          ) : time >= "10:30" || time <= "14:30" ? (
                            program.openFirst
                          ) : time >= "17:00" || time <= "20:30" ? (
                            program.openSecond
                          ) : (
                            ""
                          )}
                        </p>
                        {isOpen === "Fermée" ? <p></p> : <p>|</p>}
                        <p>
                          {isOpen === "Fermée" ? (
                            <span></span>
                          ) : time >= "14:30" || time <= "17:30" ? (
                            program.closeFirst
                          ) : time >= "20:30" || time >= "10:30" ? (
                            program.closeSecond
                          ) : (
                            ""
                          )}
                        </p>
                        <span className="orar-box--icon">
                          {seeOrar ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                      </div>
                    </Fragment>
                  )
              )}

              {seeOrar && (
                <ul className="orar-dropdown">
                  {DUMMY_WEEK.map((program, index) => (
                    <li key={index}>
                      <p className="orar-day">{program.day}</p>
                      {program.openFirst && program.openSecond ? (
                        <>
                          <p className="orar-hour">
                            {program.openFirst}-{program.closeFirst}
                          </p>
                          <p className="orar-line-middle">|</p>
                          <p className="orar-hour">
                            {program.openSecond}-{program.closeSecond}
                          </p>
                        </>
                      ) : (
                        <p className="orar-hour">
                          {program.openFirst}-{program.closeFirst}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="logo">
            <Link href="/">
              <a>
                <Image
                  src="/assets/navbar/logo@3x.png"
                  alt="logo"
                  layout="fill"
                />
              </a>
            </Link>
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
