import React from "react";
import FractionAddition from "./Quiz/FractionAddition";
import { createFractionAdditionData } from "./Quiz/utils/createFractionAdditionData";

const MainContainer = ({ selectedOption }) => {
  let content;

  switch (selectedOption) {
    case "option1":
      const fractionAdditionData = createFractionAdditionData();
      content = <FractionAddition fractionAdditionData={fractionAdditionData} />;
      break;
    case "option2":
      content = <div>Option 2 content</div>;
      break;
    default:
      content = <div>Default content</div>;
      break;
  }

  return <main>{content}</main>;
};

export default MainContainer;
