import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CourseCategory = styled.button`
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

const General = styled.a`
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

const FooterButton = styled.button`
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

const CourseCategoryButton = ({ title, id, active, onClick }) => {
  return (
    <CourseCategory active={active} onClick={onClick} id={id}>
      <span>{title}</span>
    </CourseCategory>
  );
};

const GeneralButton = ({ link, value }) => {
  const navigate = useNavigate();
  return <General onClick={() => navigate(link ?? "/")}>{value}</General>;
};

export { CourseCategoryButton, GeneralButton, FooterButton };
