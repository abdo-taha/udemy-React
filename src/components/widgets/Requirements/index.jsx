import React from "react";
import { RequirementsDiv } from "./styled";
import dot from "../../../assets/images/black-circle.png";
import { useContext } from "react";
import DataContext from "../../../Hooks/SinglePageContext";

const Requirements = () => {
  const data = useContext(DataContext);

  const requirements = data.requirements.map((element, index) => (
    <li key={index}>
      <img src={dot} alt="" />
      <div>{element}</div>
    </li>
  ));

  return (
    <RequirementsDiv>
      <h2>Requirements</h2>
      <ul>{requirements}</ul>
    </RequirementsDiv>
  );
};

export default Requirements;
