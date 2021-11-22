import { useState, useEffect } from "react";
import { Link } from "react-scroll";

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
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  mounted &&
    window.addEventListener("scroll", () => setScrollY(window.scrollY));

  return (
    <nav className={`navbar--sub-nav ${scrollY >= 100 && "active"}`}>
      <ul className="navbar--sub-list">
        {DUMMY_SUBMENU.map((item, index) => (
          <li
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
            <Link to={item.name} smooth={true}>
              {item.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarSections;
