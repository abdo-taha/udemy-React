import world from "../../../assets/images/world.png";
import logo from "../../../assets/images/logo-udemy-inverted.svg";
import { Link } from "react-router-dom";
import { FooterButton } from "../../atoms/Buttons";
import { LangDIv, FooterCrd, FooterLink } from "./styled";

const FooterLinks = ({ data }) => {
  return (
    <ul>
      {data.map((element, key) => (
        <FooterLink key={key}>
          <Link to="/">{element}</Link>
        </FooterLink>
      ))}
    </ul>
  );
};
const LanguageButton = () => {
  return (
    <LangDIv>
      <FooterButton>
        <img src={world} alt="" />
        English
      </FooterButton>
    </LangDIv>
  );
};
const CopyRight = () => {
  return (
    <FooterCrd>
      <img src={logo} alt="logo" />
      <p>© 2022 Udemy, Inc.</p>
    </FooterCrd>
  );
};

export { FooterLinks, LanguageButton, CopyRight };
