import Stars from "../../atoms/Stars";
import like from "../../../assets/images/like.png";
import dislike from "../../../assets/images/dislike.png";
import { useState } from "react";
import {
  Img,
  NoImg,
  OuterDiv,
  Head,
  Rate,
  Text,
  Ask,
  Feedback,
  Icon,
  Report,
} from "./styled";

const Comment = ({ data }) => {
  const [liked, setLiked] = useState(null);

  const likeClick = () => {
    setLiked((old) => {
      if (old == "liked") return null;
      else if (old == "disliked") return "liked";
      return "liked";
    });
  };
  const DislikeClick = () => {
    setLiked((old) => {
      if (old == "disliked") return null;
      else if (old == "liked") return "disliked";
      return "disliked";
    });
  };

  return (
    <OuterDiv>
      <div style={{ display: "flex" }}>
        {data.img ? (
          <Img src={data.img} alt="" />
        ) : (
          <NoImg>{data.initials}</NoImg>
        )}
        <Head>
          <p>{data.name}</p>
          <Rate>
            <Stars rating={data.rating} /> <div>a week ago</div>
          </Rate>
        </Head>
      </div>

      <div style={{ marginLeft: "8rem", flex: "1" }}>
        <Text>{data.comment}</Text>
        <Ask>was this review helpful ?</Ask>
        <Feedback>
          <Icon onClick={likeClick} click={liked === "liked"}>
            <img src={like} alt="" />
          </Icon>
          <Icon onClick={DislikeClick} click={liked === "disliked"}>
            <img src={dislike} alt="" />
          </Icon>
          <Report>report</Report>
        </Feedback>
      </div>
    </OuterDiv>
  );
};

export default Comment;
