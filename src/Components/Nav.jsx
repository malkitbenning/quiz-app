import React from "react";

const Nav = ({ handleOptionClick }) => {
  const handleOptionChange = (option) => {
    handleOptionClick(option);
  };

  return (
    <div>
      <p>Navigation</p>
      <button onClick={() => handleOptionChange("option1")}>Option 1</button>
      <button onClick={() => handleOptionChange("option2")}>Option 2</button>
    </div>
  );
};

export default Nav;
