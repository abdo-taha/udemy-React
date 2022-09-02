import Stars from "../../atoms/Stars";
import {
  AuthorP,
  PriceP,
  BestSellerP,
  RatingN,
  RatingScore,
  RatingDiv,
} from "./styled";

const Rating = ({ people, rating }) => {
  rating = rating.toFixed(1);
  people = (people ?? 0).toLocaleString("en-US");
  return (
    <RatingDiv>
      <RatingScore>{rating}</RatingScore>
      <span>
        <Stars rating={rating} />
      </span>
      <RatingN>({people})</RatingN>
    </RatingDiv>
  );
};

const BestSeller = ({ bestseller }) => {
  return bestseller ? <BestSellerP>Bestseller</BestSellerP> : <></>;
};

const Price = ({ price }) => {
  price = price.toLocaleString("en-US");
  return <PriceP>E£{price}</PriceP>;
};

const Author = ({ authors }) => {
  let author = "";
  authors.forEach(
    (instructor, index) => (author += (index ? "," : "") + instructor["name"])
  );
  return <AuthorP>{author}</AuthorP>;
};

export { Author, Price, BestSeller, Rating };
