import React, { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import MainContainer from "./Components/MainContainer";

function App() {
  const [selectedOption, setSelectedOption] = useState("default");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <Header />
      <Nav handleOptionClick={handleOptionClick} />
      <MainContainer selectedOption={selectedOption} />
      <Footer />
    </div>
  );
}

export default App;
