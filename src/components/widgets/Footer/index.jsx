import React from "react";
import { useRef } from "react";
import { FooterLinks, LanguageButton, CopyRight } from "../FooterWidgets";
import { MyFooter, FooterCnt } from "./styled";
import { Routes, Route } from "react-router-dom";
import { BusinessBar } from "./styled";
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

  const companies = [
    "https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/box-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/netapp-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg",
  ];

  return (
    <MyFooter>
      <Routes>
        <Route path="/" element={<></>}></Route>
        <Route
          path="*"
          element={<BusinessBar>{companies}</BusinessBar>}
        ></Route>
      </Routes>
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
