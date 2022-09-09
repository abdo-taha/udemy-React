import { useContext } from "react";
import { CourseRatingInf } from "../../atoms/CourseRatingInf";
import DataContext from "../../../Hooks/SinglePageContext";
import { SliderDiv, InnerDiv, Name } from "./styled";

const SliderMenu = () => {
  const data = useContext(DataContext);

  return (
    <>
      <SliderDiv>
        <InnerDiv>
          <Name>{data.name}</Name>
          <CourseRatingInf
            rating={data.rating}
            countRate={data.countRate}
            countEnrolled={data.countEnrolled}
          />
        </InnerDiv>
      </SliderDiv>
    </>
  );
};

export default SliderMenu;
