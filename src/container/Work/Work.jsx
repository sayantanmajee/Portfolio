import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

function Work() {
  const catagory = ["React", "Clone App", "API", "All"];
  // let catagory = [];
  // const [catagory, setCatagory] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [width, setWidth] = React.useState(window.innerWidth);

  const breakpoints = 900;

  useEffect(() => {
    //updates the "width" state variable when the window size changes
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    const query = `*[_type == 'works']`;
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <div className="app__work-header">
        <h2 className="head-text">My Work</h2>
        <div className="app__horizontal-bar" />
        <p className="p-text work-info">Take a look at what I have worked on</p>

        <div className="app__work-filter">
          {catagory.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app_flex p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <motion.div
        animate={animateCard}
        // whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.6 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => {
          return (
            <motion.div
              whileInView={{ opacity: [-1, 1] }}
              transition={{ duration: 0.3 }}
              className="app__work-item app_flex"
              key={index}
            >
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                  whileInView={
                    width <= breakpoints ? { opacity: 1 } : { opacity: 0 }
                  }
                  whileHover={width > breakpoints && { opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text">{work.description}</p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}

export default AppWrap(Work, "Work", "app__works");
