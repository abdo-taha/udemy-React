import { GeneralButton } from "../../atoms/Buttons";
import { CoursesList, CoursesContentHead, Div } from "./styled";

const CoursesContent = ({ children, header, description, category }) => {
  return (
    <Div>
      <CoursesContentHead>
        <h2>{header}</h2>
        <p>{description}</p>
        <GeneralButton value={`Explore ${category}`} />
      </CoursesContentHead>
      <CoursesList>{children}</CoursesList>
    </Div>
  );
};
export default CoursesContent;
