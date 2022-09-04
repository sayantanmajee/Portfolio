import React from "react";
import { NavigationDots, SocialMedia } from "../components";

//higher order component
const AppWrap = (Component, idName, className) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${className}`}>
       
        <div className="app__wrapper">
          <Component />
          
        </div>
        
        {/* <NavigationDots active={idName}/> */}
      </div>
    );
  };

export default AppWrap;
