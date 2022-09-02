import styled from "styled-components"


const MyFooter = styled.footer `
    background-color: #1c1d1f;
`
const FooterCnt = styled.div `
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
`

export { MyFooter, FooterCnt }