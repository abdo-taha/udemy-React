import {
  OuterDiv,
  InnerDiv,
  PriceDiv,
  Money,
  ButtonsDiv,
  TrainDiv,
  HideOnScroll,
  IconsDiv,
} from "./styled";
import { WideButton } from "../../atoms/Buttons";
import video from "../../../assets/images/youtube.png";
import letter from "../../../assets/images/letter.png";
import download from "../../../assets/images/downloads-folder.png";
import prize from "../../../assets/images/prize.png";
import infinity from "../../../assets/images/infinity.png";
import phone from "../../../assets/images/smartphone.png";
import play from "../../../assets/images/play-button.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import DataContext from "../../../Hooks/SinglePageContext";

const SideBar = () => {
  const [position, setPosition] = useState("up");
  const data = useContext(DataContext);
  useEffect(() => {
    const handelScroll = () => {
      const up = document.documentElement.scrollTop;
      const down = document.documentElement.scrollHeight - up;
      setPosition((old) => {
        if (old === "up" && up > 300) return "fix";
        if (old === "fix" && up < 300) return "up";
        if (old === "fix" && down <= 1200) return "down";
        if (old == "down" && down > 1200) return "fix";
        return old;
      });
    };

    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <OuterDiv position={position}>
      <HideOnScroll hide={position !== "up"} style={{ position: "relative" }}>
        <img src={data.img} alt="" />
        <IconsDiv>
          <span>
            <img src={play} alt="" />
          </span>
          <span>preview this course</span>
        </IconsDiv>
      </HideOnScroll>
      <InnerDiv>
        <PriceDiv>
          {data.currency}
          {data.price}
        </PriceDiv>
        <WideButton
          color="white"
          backGroundColor="#a435f0"
          height="4.8rem"
          fontSize="1.6rem"
          backGroundColorHover="#8710d8"
        >
          add to cart
        </WideButton>
        <WideButton height="4.8rem" fontSize="1.6rem">
          buy now
        </WideButton>
        <Money>30-Day Money-Back Guarantee</Money>
        <h2>This course includes:</h2>
        <ul>
          {data.video_count ? (
            <li>
              <img src={video} alt="" /> {data.video_count} hours on-demand
              video
            </li>
          ) : (
            <></>
          )}
          {data.article_count ? (
            <li>
              <img src={letter} alt="" /> {data.article_count} articles
            </li>
          ) : (
            <></>
          )}
          {data.resources_count ? (
            <li>
              {" "}
              <img src={download} alt="" /> {data.resources_count} downloadable
              resources{" "}
            </li>
          ) : (
            <></>
          )}
          <li>
            <img src={infinity} alt="" /> Full lifetime access
          </li>
          <li>
            <img src={phone} alt="" /> Access on mobile and TV
          </li>
          <li>
            <img src={prize} alt="" /> Certificate of completion
          </li>
        </ul>
        <ButtonsDiv>
          <Link to="/">Share</Link>
          <Link to="/">Gift this course</Link>
          <Link to="/">Apply coupon</Link>
        </ButtonsDiv>
      </InnerDiv>
      <TrainDiv>
        <h2>Training 5 or more people?</h2>
        Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        <WideButton> Try Udemy Business</WideButton>
      </TrainDiv>
    </OuterDiv>
  );
};

export default SideBar;
