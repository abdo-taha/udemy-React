import React from "react";
import { Frame, H2, Objective, Objectives } from "./styled";
import check from "../../../assets/images/check.png";
import { useContext } from "react";
import DataContext from "../../../Hooks/SinglePageContext";

const WhatYouWillLearn = () => {
  const data = useContext(DataContext);

  const objectives = data.objectives.map((element, index) => (
    <li key={index}>
      <Objective>
        <img src={check} alt="" />
        {element}
      </Objective>
    </li>
  ));

  return (
    <Frame>
      <H2>What you'll learn</H2>
      <Objectives>
        <ul>{objectives}</ul>
      </Objectives>
    </Frame>
  );
};

export default WhatYouWillLearn;
