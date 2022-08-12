import React from "react";

import { AppWrap } from "../../wrapper";

import "./Footer.scss";

import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

function Footer() {
  const small_description = `Self taught web developer with a great passion for creating beautiful websites. Powered by React VS Code and Coffee.`;
  const currentYear = new Date().getFullYear();

  const linkedinLink = "https://www.linkedin.com/in/sayantan-majee-55089b174/";
  const githubLink = "https://github.com/sayantanmajee";
  const faceBook = "https://www.facebook.com/sayantan.majee24/";
  const instagram = "https://www.instagram.com/majeesayantan/";

  return (
    <>
      <div className="app__footer-main">
        <div className="app__footer-main-upper">
          <div className="upper-left">
            <h3>Sayantan Majee</h3>
            <p>{small_description}</p>
          </div>
          <div className="upper-right">
            <h3>Social</h3>
            <div className="social-icons">
              <div>
                <a target="__black" rel="noreferrer" href={linkedinLink}>
                  <BsLinkedin />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noreferrer" href={githubLink}>
                  <BsGithub />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noreferrer" href={faceBook}>
                  <BsFacebook />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noreferrer" href={instagram}>
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="app__footer-main-lower">
          <div className="copyright">
            {" "}
            © Copyright {currentYear}. Made By
            <a rel="noreferrer" href="/#">
              <strong>&nbsp;Sayantan Majee</strong>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// export default AppWrap(Footer, 'Footer', 'app__footer');
export default Footer;