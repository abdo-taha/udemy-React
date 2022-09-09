import styled from "styled-components"

const OuterDiv = styled.div `
    margin-bottom: 3.2rem;
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.4rem;
    h2{
        margin-bottom: 1.6rem;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -.02rem;
        font-size: 2.4rem;
    }
    ul{
        margin-top: 0.8rem;
        padding-left: 2.4rem;
    }
    li{
        padding-left: 0.8rem;
        margin-top: 0.4rem;
    }
    P{
        margin-top: 0.8rem;
    }
`


const ToHide = styled.div `
    max-height:${(props) => props.more ? "22.1rem" : "unset"} ;
    overflow: hidden;
    mask-image: ${(props) => props.more ? "linear-gradient(#fff,#fff,rgba(255,255,255,0))" : "none"};
`



export { OuterDiv, ToHide }