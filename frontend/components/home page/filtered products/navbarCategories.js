import { useState } from "react";
import Button from "../../ui/button";

function NavbarCategories({ navbarData, showContent, showContentHandler }) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverHandler = () => setIsHovered(!isHovered);
  console.log(showContent)

  return (
    <nav className="navbarCategories">
      <ul className="navbarCategories__list">
        {navbarData.map((item, index) => (
          <li
            key={item.id}
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
            className={`navbarCategories__item ${
              showContent === item.name ? "active" : ""
            }`}
            onClick={() => showContentHandler(item.category)}
          >
            <Button className={item.cName}>{item.name}</Button>
            {item.hover && isHovered ? (
              <span
                className={`${item.id === index ? "active__dot" : "dot"}`}
              ></span>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
      <span className="greenLine"></span>
    </nav>
  );
}

export default NavbarCategories;
