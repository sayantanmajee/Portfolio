import React from "react";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
function SocialMedia() {
  const linkedinLink = "https://www.linkedin.com/in/sayantan-majee/";
  const githubLink = "https://github.com/sayantanmajee";
  const faceBook = "https://www.facebook.com/sayantan.majee24/";
  const instagram = "https://www.instagram.com/majeesayantan/";

  return (
    <div className="app__social">
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
  );
}

export default SocialMedia;
