import React from "react";
import world from "../../../assets/images/world.png";
import {
  NavBtn,
  LangBtn,
  NavLink,
  NavLinkBusiness,
  NavLinkTeach,
  NavSearch,
  Menu,
  Logo,
  SearchSm,
  Cart,
  Nav,
} from "../NavBarWidgets";

const NavBar = () => {
  return (
    <Nav>
      <Menu />
      <Logo />
      <NavLink title="Categories" />
      <NavSearch />
      <NavLinkBusiness title="Udemy Business" />
      <NavLinkTeach title="Teach on Udemy" />
      <SearchSm />
      <Cart />
      <NavBtn title="Log in" />
      <NavBtn title="Sign up" black />
      <LangBtn title={<img src={world} alt="" />} />
    </Nav>
  );
};

export default NavBar;
