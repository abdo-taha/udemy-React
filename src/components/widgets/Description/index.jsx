import Parser from "html-react-parser";
import { useState } from "react";
import { Button, OuterDiv, ToHide } from "./styled";
import { ShowMore } from "../../atoms/Buttons";
import { useContext } from "react";
import DataContext from "../../../Hooks/SinglePageContext";

const Description = () => {
  const data = useContext(DataContext);

  const [more, setMore] = useState(true);
  const toggle = () => {
    setMore((old) => !old);
  };
  return (
    <OuterDiv>
      <ToHide more={more}>
        <h2>Description</h2>
        {Parser(data.description)}
        <div>
          <h2 style={{ marginTop: "1.6rem" }}>Who this course is for:</h2>
          <ul>
            {data.toWhom.map((element, i) => (
              <li key={i}>{element}</li>
            ))}
          </ul>
        </div>
      </ToHide>
      <ShowMore more={more} toggle={toggle} />
    </OuterDiv>
  );
};

export default Description;
