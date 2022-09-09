import { Rating, InfoDiv, RateCount, Enrolled } from "./styled";
import star from "../../../assets/images/star-full.png";
import Stars from "../Stars";

const CourseRatingInf = ({ rating, countRate, countEnrolled, fullStars }) => {
  return (
    <InfoDiv>
      <Rating>{rating}</Rating>
      {fullStars ? <Stars rating={rating} /> : <img src={star} alt="" />}
      <RateCount>({countRate.toLocaleString("en-US")} ratings)</RateCount>
      <Enrolled>{countEnrolled.toLocaleString("en-US")} students</Enrolled>
    </InfoDiv>
  );
};

export { CourseRatingInf };
