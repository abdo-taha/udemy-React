import fullstar from "../../../assets/images/star-full.png";
import halfstar from "../../../assets/images/star-half.png";
import emptystar from "../../../assets/images/star-empty.png";
import styled from "styled-components";

const Img = styled.img`
  height: 1.4rem;
`;

const Star = ({ link }) => {
  return <Img src={link} alt="" />;
};

const handleStars = (rating) => {
  let left = 5;
  let stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(fullstar);
    --left;
  }
  if (Math.floor(rating) !== Math.round(rating)) {
    --left;
    stars.push(halfstar);
  }
  for (let i = 0; i < left; i++) {
    stars.push(emptystar);
  }
  return stars;
};

export { Star, handleStars };
