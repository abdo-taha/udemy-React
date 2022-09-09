import styled from "styled-components"

const MenuDiv = styled.div `
    display: none;
    @media screen and (max-width: 870px) {
        margin-right: 5rem;
        display: inline-flex;
        img {
            width: 26px;
            height: 24px;
        }
    }
`
const LogoDiv = styled.div `
 padding-right: 0.8rem;
a {
    display: flex;
}

img {
    width: 91px;
    height: 34px;
}
@media screen and (max-width: 870px) {
    margin-left: auto;
    img {
        width: 75px;
    }
}
`
const SearchSmDiv = styled.div `
display: none;
margin: 1rem;
margin-left: auto;
img {
    height: 2rem;
}
@media screen and (max-width: 870px) {
    display: inline-flex;
}
`
const CartDiv = styled.div `
margin: 1.2rem 0;
img {
    height: 2.4rem;
    width: 2.4rem;
}
&:hover img {
    color: blueviolet;
}
a {
    display: flex;
    margin: 1.2rem;
}
@media screen and (max-width: 870px) {
    order: 1;
}
`



const NavLinkDiv = styled.div `
    font-size: 1.4rem;
letter-spacing: -.02rem;
font-weight: 400;
text-align: center;
white-space: nowrap;
justify-content: center;
display: inline-flex;
cursor: pointer;
align-items: center;
height: 4.8rem;
padding: 0 1.2rem;
a {
    text-decoration: none;
    color: #1c1d1f;
}
&:hover a {
    color: #401b9c;
}
@media screen and (max-width: 870px) {
    display: none;
}
`

const NavLinkBusinessDiv = styled(NavLinkDiv)
`
@media screen and (max-width: 1120px) {
    display: none;
}
`
const NavLinkTeachDiv = styled(NavLinkDiv)
`
@media screen and (max-width: 987px) {
    display: none;
}
`

const SearchDiv = styled.div `
border-style: solid;
height: 4.8rem;
display: inline-flex;
align-items: center;
border-radius: 9999px;
border-width: 1px;
flex-grow: 1;
background-color: #f7f9fa;
margin: 0 1.2rem;
form {
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
    padding: 0 2.4rem 0 0;
}
span {
    height: 4.8rem;
    width: 4.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
form input {
    flex-grow: 1;
    border: none;
    background-color: transparent;
    font-size: 1.4rem;
    height: 3.4rem;
    padding-left: 0.4rem;
}
form input:focus {
    outline: none;
}
form button {
    border-width: 1px;
    border: none;
    padding: 0.5rem;
    border-radius: 1.3rem;
    border-color: rgb(0 0 0 / 40%);
    background-color: transparent;
}
form button:hover {
    background-color: rgb(0 0 0 / 5%);
}
img {
    width: 2.4rem;
    height: 2.4rem;
    opacity: 50%;
    padding: 0.4rem;
}
@media screen and (max-width: 870px) {
    display: none;
}
`

const Nav = styled.div `
    display: flex;
    padding: 0 2.4rem;
    align-items: center;
    height: 7.2rem;
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
    align-content: center;
    position: relative;
    z-index: 1010;
    font-size: 1.4rem;
    background-color: white;
    @media screen and (max-width: 870px) {
        padding: 1rem;
    }
`



const NavBtnDiv = styled.div `
    border-style: ${props => props.black ? "none" : "solid"};;
    height: 4rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.8rem;
    border-width: 1px;
    font-weight: bold;
    font-size: smaller;
    font-size: 1.4rem;
    min-width: 8rem;
    white-space: nowrap;
    background-color: ${props => props.black ? "#1c1d1f" : "white"};
    a {
        text-decoration: none;
        color: ${props => props.black ? "white" : "#1c1d1f"};
    }
    &:hover {
        background-color: ${props => props.black ? "black" : "rgba(0, 0, 0, .04)"};
    }
    img {
        height: 15px;
        width: 15px;
        display: block;
    }
    @media screen and (max-width: 870px) {
        display: none;
    }
`
const LangBtnDiv = styled(NavBtnDiv)
`
    padding: 0 1rem;
    min-width: auto;
    width: 4rem;
    @media screen and (max-width: 870px) {
        display: none;
    }

`

export {
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
    NavBtnDiv
}