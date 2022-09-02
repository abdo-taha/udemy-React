import { Author, Price, BestSeller, Rating } from "../CourseItemWidgets";
import { Div } from "./styled";

const CourseItem = ({ course }) => {
  return (
    <Div>
      <img src={course.image} alt="course" />
      <h3>{course.title}</h3>
      <Author authors={course.instructors} />
      <Rating people={course.people} rating={course.rating} />
      <Price price={course.price} />
      <BestSeller bestseller={course.bestseller} />
    </Div>
  );
};

export default CourseItem;
