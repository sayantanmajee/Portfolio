import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import "./Header.scss";

function Header() {
  const headerDescription =
    "A Frontend focused Web Developer building the Frontend of Website and Web Application that leads to the success of the overall product";

  return (
    <>
      <div className="app__header-info">
        <motion.div
          // transition={{ type: "spring", stiffness: 100 }}
          // animate={{ x: [-60, 0], opacity: [0, 1] }}
          // whileNoInView={{ x: [0, 0] }}
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
        >
          <span className="head-text">Hey</span>
        </motion.div>
        <motion.div
          animate={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          // whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          // transition={{ duration: 0.8 }}
        >
          <span className="head-text">,</span>
        </motion.div>
        <motion.div
          animate={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          // whileInView={{ x: [50, 0], opacity: [0, 1] }}
          // transition={{ duration: 0.7 }}
        >
          <div>
            <h className="head-text">I am Sayantan</h>
          </div>
        </motion.div>
      </div>
      <motion.div
        // animate={{ x: 100 }}
        // transition={{ ease:'easeOut', duration: 3 }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 1 }}
        className="app_header-description"
      >
        <p>{headerDescription}</p>
        <a className="p-text generic_btn" href="./#Work">
          projects
        </a>
      </motion.div>
    </>
  );
}

export default AppWrap(Header, "Home", "app__header");
