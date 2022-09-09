import styled from "styled-components"

const Name = styled.div `
    margin-bottom: 0.4rem;
    text-decoration: underline;
    text-underline-offset: 0.4rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 1.9rem;
    color: #5624d0;
`


const About = styled.div `
    color: #6a6f73;
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.6rem;

`


const H2 = styled.h2 `
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
`


const Img = styled.img `
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    object-fit: cover;
    color: #fff;
    background: 0 0;
    border: 1px solid #d1d7dc;
    width: 11.2rem;
    height: 11.2rem;
    margin-right: 1.6rem;
`
const Stats = styled.div `
    margin-top: 0.8rem;
    display: flex;
    ul{
        list-style: none;
    }
    li{
        padding: 0.4rem 0;
        display: flex;
        align-items: center;
        font-weight: 400;
        line-height: 1.4;
        font-size: 1.4rem;
        color: #1c1d1f;
        img{
            height:1.4rem;
            margin-right: 1.6rem;
        }
    }

`


const ToHide = styled.div `
    max-height:${(props) => props.more ? "14.6rem" : "unset"} ;
    overflow: hidden;
    mask-image: ${(props) => props.more ? "linear-gradient(#fff,#fff,rgba(255,255,255,0))" : "none"};
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.4rem;
    margin-top: 1.6rem;
    white-space: pre-line;
`


export { Name, About, H2, Img, Stats, ToHide }