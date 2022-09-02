import React from "react";
import { useRef } from "react";
import { FooterLinks, LanguageButton, CopyRight } from "../FooterWidgets";
import { MyFooter, FooterCnt } from "./styled";

const Footer = () => {
  const data = useRef([
    [
      "Udemy Business",
      "Teach on Udemy",
      "Get the app",
      "About us",
      "Contact us",
    ],
    ["Careers", "Blog", "Help and Support", "Affiliate", "Investors"],
    [
      "Terms",
      "Privacy policy",
      "Cookie settings",
      "Sitemap",
      "Accessibility statement",
    ],
  ]);

  return (
    <MyFooter>
      <FooterCnt>
        {data.current.map((element, key) => (
          <FooterLinks data={element} key={key} />
        ))}
        <LanguageButton />
      </FooterCnt>
      <CopyRight />
    </MyFooter>
  );
};

export default Footer;
