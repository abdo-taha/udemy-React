import { MainDiv, RightDiv, Preview, Time, Text } from "./styled";
import play from "../../../assets/images/play-button.png";

const PartInf = ({ link, title, duration, hours, minutes }) => {
  duration = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  return (
    <MainDiv link>
      <div>
        <img src={play} alt="" />
        <Text link={link}>{title}</Text>
      </div>
      <RightDiv>
        <Preview link={link}>
          <Text link={link}>Preview</Text>
        </Preview>
        <Time>{duration}</Time>
      </RightDiv>
    </MainDiv>
  );
};

export default PartInf;
