import { Star, handleStars } from "./starsHelper";

function Stars({ rating }) {
  return (
    <>
      {handleStars(rating).map((link, key) => (
        <Star link={link} key={key} />
      ))}
    </>
  );
}

export default Stars;
