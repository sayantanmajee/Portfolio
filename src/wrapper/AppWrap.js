import React from "react";
// import { NavigationDots, SocialMedia } from "../components";

//higher order component
const AppWrap = (Component, idName, className) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${className}`}>
       
        <div className="app__wrapper">
          <Component />
          {/* <NavigationDots active={idName}/> */}
        </div>
        
      </div>
    );
  };

export default AppWrap;
