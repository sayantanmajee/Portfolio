import React, { useState } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
function Navbar() {
  const linksArray = ["Home", "About", "Work", "Contact"];
  const [toggle, setToggle] = useState(false);

  return (
    
    <nav className="app__navbar">
      <a href="/" className="app__navbar-logo">
        <span>Sayantan Majee</span>
      </a>
      <ul className="app__navbar-links">
        {linksArray.map((item) => (
          <li className="app_flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      
      {/* menu for mobile devices */}
      <div className="app__nabvar-menu">
        <FaBars
          className="fwIcon"
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.7, ease: "easeIn" }}
          >
            <HiX
              className="fwIcon"
              onClick={() => setToggle(false)}
            />
            <ul>
              {linksArray.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
