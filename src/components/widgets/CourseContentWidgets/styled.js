import styled from "styled-components"


const MainDiv = styled.div `
    padding: 0.8rem 0;
    display: flex;
    cursor: ${props => props.link ? "pointer" : "auto"};
    img{
        height: 1.6rem;
        margin-right: 1.6rem;
    }
    div{
        display: flex;
        align-items: center;
    }
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.4rem;

`
const RightDiv = styled.div `
    margin-left: auto;
`
const Preview = styled.span `
    display: ${props => props.link ? "block" : "none"};
`
const Time = styled.span `
    color: #6a6f73;
    text-decoration-line: none;
    margin-left: 1.6rem;
`
const Text = styled.p `
    text-decoration: ${props => props.link ? "underline" : "none"};
    color: ${props => props.link ? "#5624d0" : "black"};
`

const H2 = styled.h2 `
    max-width: 118.4rem;
    margin-bottom: 1.6rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 2.4rem;
`
const TotalInfDiv = styled.div `
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
`

const Expand = styled.span `
    margin-left: auto;
    color: #5624d0;
    cursor: pointer;
    font-weight: 700;
`


export { MainDiv, RightDiv, Preview, Time, Text, H2, TotalInfDiv, Expand }