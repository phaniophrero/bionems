import link from "next/link";
import React from "react";

const DUMMMY_ORAR = [
  {
    day: "LUNDI",
    open: "11:30 - 14:30",
    close: "18:00 - 20:30",
  },

  {
    day: "MARDI",
    open: "11:30 - 14:30",
    close: "18:00 - 20:30",
  },

  {
    day: "MERCREDI",
    open: "11:30 - 14:30",
    close: "18:00 - 20:30",
  },

  {
    day: "JEUDI",
    open: "11:30 - 14:30",
    close: "18:00 - 20:30",
  },

  {
    day: "VENDREDI",
    open: "11:30 - 14:30",
    close: "18:00 - 20:30",
  },

  {
    day: "SAMEDI",
    open: "11:30 - 14:30",
    close: "18:00 - 20:30",
  },

  {
    day: "DIMANCHE",
    open: "11:30 - 14:30",
    close: "18:00 - 20:30",
  },
];

const FooterOrar = () => {
  return (
    <ul className="footer-orar">
      {DUMMMY_ORAR.map((item, index) => (
        <li key={index}>
          <div className="days">
            <p>{item.day}</p>
          </div>
          <div className="shifts">
            <p>{item.open}</p>
            <p>|</p>
            <p>{item.close}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FooterOrar;
