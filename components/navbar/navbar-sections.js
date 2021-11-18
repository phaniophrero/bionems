import React, { useState, useEffect } from "react";

const DUMMY_SUBMENU = [
  {
    name: "accueil",
  },

  {
    name: "produits",
  },

  {
    name: "l'histoire",
  },

  {
    name: "bionems truck",
  },

  {
    name: "nous contacter",
  },
];

const NavbarSections = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sectionInScroll, setSectionInScroll] = useState(DUMMY_SUBMENU[0].name);
  const [mounted, setIsMounted] = useState(false)

  useEffect(() => {
        setIsMounted(true)

        return () => setIsMounted(false)
  }, []);

  mounted && window.addEventListener('scroll', () => setScrollY(window.scrollY))

  return (
    <section className={`navbar--sub-nav ${scrollY >= 100 && "active"}`}>
      {DUMMY_SUBMENU.map((item, index) => (
        <p
          className={`sub-nav--p ${
            sectionInScroll === item.name && scrollY >= 100
              ? "dark-mode"
              : sectionInScroll === item.name
              ? "active"
              : ""
          }`}
          key={index}
          onClick={() => {
            setSectionInScroll(item.name);
          }}
        >
          {item.name.toUpperCase()}
        </p>
      ))}
    </section>
  );
};

export default NavbarSections;
