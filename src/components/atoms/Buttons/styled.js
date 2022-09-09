import styled from "styled-components";



const CourseCategory = styled.button `
  background-color: white;
  border-style: none;
  color: ${(props) => (props.active ? "black" : "#6a6f73")};
  margin-right: 16px;
  min-width: fit-content;
  padding: 0.8rem 0.4rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02rem;
  font-size: 1.6rem;
  &:hover {
    color: black;
  }
`;

const General = styled.a `
  text-decoration: none;
  border-style: solid;
  border-width: 1px;
  color: black;
  height: 4rem;
  position: relative;
  align-items: center;
  display: inline-flex;
  min-width: 8rem;
  padding: 0 1.2rem;
  justify-content: center;
  white-space: nowrap;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02rem;
  font-size: 1.4rem;
  margin-top: 1.6rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const FooterButton = styled.button `
  font-size: 1.6rem;
  border-color: #fff;
  color: #fff;
  background-color: transparent;
  margin-left: auto;
  display: flex;
  padding: 0 1.6rem;
  align-items: center;
  min-width: 14rem;
  height: 4rem;
  border-width: 1px;
  img {
    height: 16.67px;
    filter: invert(1);
    margin-right: 0.4rem;
  }
`;

const ShowMoreButton = styled.button `
  color: #5624d0;
  background-color: transparent;
  height: 4rem;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02rem;
  font-size: 1.4rem;
  border: none;
  img {
    margin-left: 0.4rem;
    height: 1rem;
    filter: invert(16%) sepia(77%) saturate(4717%) hue-rotate(257deg)
      brightness(81%) contrast(102%);
  }
`;

const WideButton = styled.button `
  margin-top: 1.6rem;
  width: 100%;
  color: ${(props) => props.color || "#1c1d1f"};
  background-color: ${(props) => props.backGroundColor || "transparent"};
  border: 1px solid #1c1d1f;
  height: ${(props) => props.height || "4rem"};
  align-items: center;
  cursor: pointer;
  min-width: 8rem;
  padding: 0 1.2rem;
  justify-content: center;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02rem;
  font-size: ${(props) => props.fontSize || "1.4rem"};
  &:hover {
    background-color: ${(props) =>
        props.backGroundColorHover || "rgba(0, 0, 0, 0.04)"};
  }
`;


export { CourseCategory, General, FooterButton, ShowMoreButton, WideButton }