import { Author, Price, BestSeller, Rating } from "../CourseItemWidgets";
import { Div } from "./styled";
import { useNavigate } from "react-router-dom";

const CourseItem = ({ course }) => {
  const navigate = useNavigate();
  return (
    <Div onClick={() => navigate(`/course/${course.id}`)}>
      <img src={course.image} alt="" />
      <h3>{course.title}</h3>
      <Author authors={course.instructors} />
      <Rating people={course.people} rating={course.rating} />
      <Price price={course.price} />
      <BestSeller bestseller={course.bestseller} />
    </Div>
  );
};

export default CourseItem;
