import { useNavigate } from "react-router-dom";
import up from "../../../assets/images/up-arrow.png";
import down from "../../../assets/images/down-arrow.png";
import {
  CourseCategory,
  General,
  FooterButton,
  ShowMoreButton,
  WideButton,
} from "./styled";

const ShowMore = ({ toggle, more }) => {
  return (
    <ShowMoreButton onClick={toggle}>
      {more ? (
        <>
          <span>Show more</span>
          <img src={down} />
        </>
      ) : (
        <>
          <span>Show less</span>
          <img src={up} />
        </>
      )}
    </ShowMoreButton>
  );
};

const CourseCategoryButton = ({ title, id, active, onClick }) => {
  return (
    <CourseCategory active={active} onClick={onClick} id={id}>
      <span>{title}</span>
    </CourseCategory>
  );
};

const GeneralButton = ({ link, value }) => {
  const navigate = useNavigate();
  return <General onClick={() => navigate(link ?? "/")}>{value}</General>;
};

export {
  CourseCategoryButton,
  GeneralButton,
  FooterButton,
  ShowMore,
  WideButton,
};
