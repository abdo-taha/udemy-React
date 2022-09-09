import { Expand, TotalInfDiv } from "./styled";

const TotalInf = ({
  sections,
  lectures,
  hours,
  minutes,
  expanded,
  onclick,
}) => {
  return (
    <TotalInfDiv>
      <span>
        {sections} section{sections > 1 ? "s" : ""} • {lectures} lecture
        {lectures > 1 ? "s" : ""} • {hours ? hours + "h" : ""} {minutes}m total
        length
      </span>
      <Expand onClick={onclick}>
        {expanded ? "Expand" : "Collapse"} all sections
      </Expand>
    </TotalInfDiv>
  );
};

export default TotalInf;
