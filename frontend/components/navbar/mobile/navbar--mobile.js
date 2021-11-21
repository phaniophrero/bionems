import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NavbarMobileCategorys from "./navbar--mobile-categorys";
import NavbarMobileMedia from "./navbar--mobile-media";
import NavbarMobileFooter from "./navbar--mobile-footer";

const NavbarMobile = () => {
  const [isActive, setIsActive] = useState(false);
  const isActiveHandler = () => setIsActive((prev) => setIsActive(!prev));

  return (
    <div className="navbar-mobile">
      <div className="action-image" onClick={isActiveHandler}>
        <div className={`line-one line ${isActive && "active"}`}></div>
        <div className={`line-two line ${isActive && "active"}`}></div>
        <div className={`line-three line ${isActive && "active"}`}></div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="navbar-mobile--dropdown"
            initial={{ transform: "translateX(-100%)" , opacity: 0}}
            animate={{ transform: "translateX(0%)", opacity: 1 }}
            exit={{ transform: "translateX(-100%)", opacity: 0 }}
            transition={{duration: 0.4}}
          >
            <div className="mobile-dropdown--content-area">
              <NavbarMobileCategorys isActiveHandler = { isActiveHandler } />
              <NavbarMobileMedia />
              <NavbarMobileFooter />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
