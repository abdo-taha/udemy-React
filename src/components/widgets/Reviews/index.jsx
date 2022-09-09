import {
  BarDiv,
  BigRate,
  H2,
  Icon,
  IconDiv,
  Input,
  SearchDiv,
  Stats,
  StatsDetails,
} from "./styled";
import Stars from "../../atoms/Stars";
import Bar from "../../atoms/Bar";
import search from "../../../assets/images/search.png";
import Comment from "../Comment";
import { WideButton } from "../../atoms/Buttons";
import { useState } from "react";
import { useContext } from "react";
import DataContext from "../../../Hooks/SinglePageContext";

const Reviews = () => {
  const data = useContext(DataContext);

  const [filteredComments, setFilteredComments] = useState(data.comments);
  const [shownComments, setShownComments] = useState(
    filteredComments.slice(0, 5)
  );
  const [searchReview, setSearchReview] = useState("");
  const [rate, setRate] = useState("All Ratings");

  const moreComments = () => {
    setShownComments((old) => [
      ...old,
      ...filteredComments.slice(old.length, old.length + 5),
    ]);
  };
  const handleSearch = (e) => {
    setSearchReview(e.target.value);
  };
  const handleFilter = (e) => {
    e.preventDefault();
    const tmp = data.comments.filter((comment) =>
      comment.comment.toLowerCase().includes(searchReview.toLowerCase())
    );
    setFilteredComments(tmp);
    setShownComments(tmp.slice(0, 5));
  };
  const handleRate = (e) => {
    setRate(e.target.value);
    let lower = e.target.value,
      upper;
    if (lower === "All Ratings") {
      lower = 0;
      upper = 6;
    } else {
      lower = +lower;
      upper = lower + 1;
    }
    const tmp = data.comments.filter(
      (comment) => comment.rating >= lower && comment.rating < upper
    );
    setFilteredComments(tmp);
    setShownComments(tmp.slice(0, 5));
  };

  return (
    <div>
      <H2>Student feedback</H2>
      <Stats>
        <BigRate>
          <div style={{ fontSize: "6.4rem" }}> {data.rating}</div>
          <Stars rating={data.rating} />
          <div>Course Rating</div>
        </BigRate>
        <StatsDetails>
          {data.ratingDetails.map((element, i) => (
            <BarDiv key={i}>
              <Bar percent={element} />
              <Stars rating={i + 1} />
              <p>{element}%</p>
            </BarDiv>
          ))}
        </StatsDetails>
      </Stats>
      <div>
        <H2>Reviews</H2>
        <SearchDiv onSubmit={handleFilter}>
          <Input
            placeholder="Search Reviews"
            value={searchReview}
            onChange={handleSearch}
          />
          <IconDiv onClick={handleFilter}>
            <img src={search} alt="" />
          </IconDiv>
          <select onChange={handleRate} value={rate}>
            <option>All Ratings</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </SearchDiv>
        <div style={{ marginBottom: "2.4rem" }}>
          {shownComments.map((comment, i) => (
            <Comment data={comment} key={i} />
          ))}
          {shownComments.length === filteredComments.length ? (
            <></>
          ) : (
            <WideButton onClick={moreComments}> show more reviews</WideButton>
          )}
        </div>
      </div>
    </div>
  );
};
export default Reviews;
