import { About, Img, Name, Stats, ToHide } from "./styled";
import star from "../../../assets/images/black-star.png";
import friends from "../../../assets/images/friends.png";
import badge from "../../../assets/images/premium-badge.png";
import play from "../../../assets/images/play-button.png";
import { ShowMore } from "../../atoms/Buttons";
import { useState } from "react";

const Instructor = ({ data }) => {
  const [more, setMore] = useState(true);
  const toggle = () => {
    setMore((old) => !old);
  };
  return (
    <div>
      <div>
        <Name>{data.name}</Name>
        <About>{data.about}</About>
      </div>
      <Stats>
        <Img src={data.img} alt="" />
        <ul>
          <li>
            <img src={star} alt="" /> {data.rate} Instructor Rating
          </li>
          <li>
            <img src={badge} alt="" />{" "}
            {(data.reviews ?? 0).toLocaleString("en-US")} Reviews
          </li>
          <li>
            <img src={friends} alt="" />
            {(data.students ?? 0).toLocaleString("en-US")} Students
          </li>
          <li>
            <img src={play} alt="" /> {data.courses} Courses
          </li>
        </ul>
      </Stats>
      <ToHide more={more}>{data.details}</ToHide>
      <ShowMore more={more} toggle={toggle} />
    </div>
  );
};

export default Instructor;
