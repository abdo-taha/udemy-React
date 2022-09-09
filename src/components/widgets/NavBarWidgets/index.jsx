import glass from "../../../assets/images/magnifying-glass.png";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import menu from "../../../assets/images/menu.png";
import logo from "../../../assets/images/logo-udemy.svg";
import search from "../../../assets/images/search.png";
import cart from "../../../assets/images/shopping-cart.png";
import {
  SearchDiv,
  NavLinkTeachDiv,
  NavLinkBusinessDiv,
  NavLinkDiv,
  CartDiv,
  SearchSmDiv,
  LogoDiv,
  MenuDiv,
  LangBtnDiv,
  Nav,
  NavBtnDiv,
} from "./styled";

const NavBtn = ({ title, black }) => {
  return (
    <NavBtnDiv black={black}>
      <Link to="/">{title}</Link>
    </NavBtnDiv>
  );
};
const LangBtn = ({ title }) => {
  return (
    <LangBtnDiv>
      <Link to="/">{title}</Link>
    </LangBtnDiv>
  );
};

const NavLink = ({ title }) => {
  return (
    <NavLinkDiv>
      <Link to="/">{title}</Link>
    </NavLinkDiv>
  );
};

const NavLinkBusiness = ({ title }) => {
  return (
    <NavLinkBusinessDiv>
      <Link to="/">{title}</Link>
    </NavLinkBusinessDiv>
  );
};
const NavLinkTeach = ({ title }) => {
  return (
    <NavLinkTeachDiv>
      <Link to="/">{title}</Link>
    </NavLinkTeachDiv>
  );
};

const NavSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <SearchDiv>
      <form>
        <span>
          <img src={glass} alt="" />
        </span>
        <input
          autoComplete="off"
          placeholder="Search for anything"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          id="search-button"
          onClick={(e) => {
            e.preventDefault();
            navigate({
              pathname: "/",
              search: createSearchParams({ search: search }).toString(),
            });
          }}
        >
          search
        </button>
      </form>
    </SearchDiv>
  );
};

const Menu = () => {
  return (
    <MenuDiv>
      <Link to="/">
        <img src={menu} alt="" />
      </Link>
    </MenuDiv>
  );
};

const Logo = () => {
  return (
    <LogoDiv>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </LogoDiv>
  );
};

const SearchSm = () => {
  return (
    <SearchSmDiv>
      <Link to="/">
        <img src={search} alt="" />
      </Link>
    </SearchSmDiv>
  );
};
const Cart = () => {
  return (
    <CartDiv>
      <Link to="/">
        <img src={cart} alt="" />
      </Link>
    </CartDiv>
  );
};

export {
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
};
