import React, { useState } from "react";
import TopContainer from "./Components/TopContainer";

import MainContainer from "./Components/MainContainer";

function App() {
  const [selectedOption, setSelectedOption] = useState("default");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <TopContainer handleOptionClick={handleOptionClick} />
      <MainContainer selectedOption={selectedOption} />
    </div>
  );
}

export default App;
