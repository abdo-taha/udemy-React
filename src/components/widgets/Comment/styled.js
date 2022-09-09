import styled from "styled-components";



const Img = styled.img `
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  object-fit: cover;
  color: #fff;
  background: 0 0;
  border: 1px solid #d1d7dc;
  width: 5rem;
  height: 5rem;
`;
const NoImg = styled.div `
  background: #1c1d1f;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  object-fit: cover;
  color: #fff;
  width: 5rem;
  height: 5rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02rem;
  font-size: 1.6rem;
`;

const OuterDiv = styled.div `
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d1d7dc;
  padding-top: 1.6rem;
  margin-bottom: 1.6rem;
`;
const Head = styled.div `
  display: flex;
  margin-left: 2.8rem;
  flex-direction: column;
  p {
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02rem;
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
  }
`;
const Rate = styled.div `
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
const Text = styled.div `
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  white-space: pre-line;
`;

const Ask = styled.div `
  color: #6a6f73;
  margin-right: 0.4rem;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.2rem;
`;
const Feedback = styled.div `
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 0;
`;
const Icon = styled.div `
  padding: 0.4rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.click ? "black" : "white")};
  cursor: pointer;
  img {
    filter: ${(props) => (props.click ? "invert(1)" : "none")};
    height: 1.4rem;
  }
`;


const Report = styled.span `
  cursor: pointer;
  text-decoration: underline;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.2rem;
`;

export { Img, NoImg, OuterDiv, Head, Rate, Text, Ask, Feedback, Icon, Report }