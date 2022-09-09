import { Link } from "react-router-dom";
import styled from "styled-components";

const MyFooter = styled.footer`
  background-color: #1c1d1f;
`;
const FooterCnt = styled.div`
  display: flex;
  padding: 2.4rem 4.8rem 0 4.8rem;
  ul {
    display: inline-flex;
    flex-direction: column;
    list-style: none;
    width: 25.6rem;
  }
  li {
    padding: 0.4rem 0;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }
`;

const Img = styled.img`
  margin: 1.2rem 0;
  margin-right: 2.4rem;
`;
const BusinessDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: #1c1d1f;
  border-top: 1px solid #3e4143;
  color: #fff;
  padding: 0 4.8rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02rem;
  font-size: 1.9rem;
  white-space: pre-wrap;
  a {
    color: #cec0fc;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
const BusinessBar = ({ children }) => {
  return (
    <BusinessDiv>
      <div style={{ minWidth: "80rem" }}>
        Top companies choose {<Link to={"/"}> Udemy Business </Link>} to build
        in-demand career skills.
      </div>
      <div>
        {children.map((company, i) => (
          <Img src={company} key={i} />
        ))}
      </div>
    </BusinessDiv>
  );
};

export { MyFooter, FooterCnt, BusinessBar };
