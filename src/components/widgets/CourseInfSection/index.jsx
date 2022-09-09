import next from "../../../assets/images/right-arrow.png";
import mark from "../../../assets/images/exclamation-mark.png";
import lang from "../../../assets/images/world.png";
import cc from "../../../assets/images/closed-caption.png";
import play from "../../../assets/images/play-button.png";
import { CourseRatingInf } from "../../atoms/CourseRatingInf";
import { Link } from "react-router-dom";
import {
  CourseCategory,
  CourseMainContent,
  CourseText,
  IconsDiv,
  Instructor,
  MetaDiv,
  SectionIn,
  SectionOut,
  SmallImg,
} from "./styled";
import { useContext } from "react";
import DataContext from "../../../Hooks/SinglePageContext";

const CourseInfSection = () => {
  const data = useContext(DataContext);

  const author = data.author.map((name, index) => (
    <Link to={"/"} key={index}>
      {name + (index + 1 === data.author.length ? "" : ",")}
    </Link>
  ));

  const courseCategory = data.courseCategory.map((cat, index) => {
    return (
      <span key={index}>
        {index ? <img src={next} alt="" /> : <></>}
        <Link to={"/"}>{cat}</Link>
      </span>
    );
  });

  return (
    <SectionOut>
      <SectionIn>
        <CourseCategory>{courseCategory}</CourseCategory>
        <SmallImg>
          <img src={data.img} alt="" />
          <IconsDiv>
            <span>
              <img src={play} alt="" />
            </span>
            <span>preview this course</span>
          </IconsDiv>
        </SmallImg>
        <CourseMainContent>
          <h1>{data.name}</h1>
          <CourseText>{data.about}</CourseText>
          <CourseRatingInf
            rating={data.rating}
            countRate={data.countRate}
            countEnrolled={data.countEnrolled}
            fullStars
          />
          <Instructor>Created by {author}</Instructor>
          <MetaDiv>
            <div>
              <img src={mark} alt="" /> Last updated {data.lastUpdated}
            </div>
            <div>
              <img src={lang} alt="" /> {data.language}
            </div>
            <div>
              <img src={cc} alt="" /> {data.subtitle}
            </div>
          </MetaDiv>
        </CourseMainContent>
      </SectionIn>
    </SectionOut>
  );
};

export default CourseInfSection;
