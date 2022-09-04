import React from "react";

const NavigationDots = ({ active }) => {
  const linksArray = ["Home", "About", "Work", "Contact"];

  return (
    <div className="app__navigation" >
      {linksArray.map((item, index) => (
        <a 
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? {backgroundColor: 'blue'} : { } } 
        href={`#${item}`} />
      ))}
    </div>
  );
};

export default NavigationDots;
