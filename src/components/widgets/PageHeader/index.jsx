import React from "react";
import header from "../../../assets/images/header.jpg";
import { Header, HeaderBox } from "./styled";

const PageHeader = () => {
  return (
    <Header>
      <div style={{ overflow: "hidden" }}>
        <img src={header} alt="new to udemy" />
      </div>
      <HeaderBox>
        <h1>New to Udemy? Lucky you.</h1>
        <p>
          Courses start at E£169.99. Get your new-student offer before it
          expires.
        </p>
      </HeaderBox>
    </Header>
  );
};

export default PageHeader;
