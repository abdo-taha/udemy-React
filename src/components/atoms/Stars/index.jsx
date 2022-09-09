import { Star, handleStars } from "./starsHelper";

function Stars({ rating }) {
  return (
    <div>
      {handleStars(rating).map((link, key) => (
        <Star link={link} key={key} />
      ))}
    </div>
  );
}

export default Stars;
