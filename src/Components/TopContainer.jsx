import React, { useState } from "react";
import "./TopContainer.css";

const TopContainer = ({ handleOptionClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleOptionChange = (option) => {
    handleOptionClick(option);
    setIsVisible(false);
  };

  return (
    <div className={`top-container ${isVisible ? "visible" : "hidden"}`}>
      <div className="welcome">Welcome to the Maths Quiz</div>
      <p className="nav-instruction">Please Choose an option...</p>
      <button onClick={() => handleOptionChange("option1")}>Option 1</button>
      <button onClick={() => handleOptionChange("option2")}>Option 2</button>
    </div>
  );
};

export default TopContainer;
