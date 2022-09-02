import styled from "styled-components"



const FooterLink = styled.li `
    a {
        color: white;
        text-decoration: none;
        font-size: 1.4rem;
        line-height: 1.4;
    }   
    a:hover {
        text-decoration: underline;
    }
`

const FooterCrd = styled.div `
    padding: 6.4rem 4.8rem 3.2rem 4.8rem;
    display: flex;
    color: white;
    font-size: 1.2rem;
    align-items: center;
    justify-content: flex-end;
    img {
        height: 34.2px;
        margin-right: auto;
    }
    @media screen and (max-width: 700px) {
        flex-direction: column;
        padding-top: 3.2rem;
        padding-bottom: 3.2rem;
        padding-left: 2.4rem;
        padding-right: 2.4rem;
        p {
            margin-right: auto;
        }
        img {
            margin-bottom: 1.6rem;
        }
    }
`
const LangDIv = styled.div `
    margin-left:auto;
    @media screen and (max-width: 700px) {
        order: -1;
        margin-right: auto;
        margin-left: unset;
        padding-top: 2.4rem;
        padding-bottom: 2.4rem;
    }
`

export { LangDIv, FooterCrd, FooterLink }