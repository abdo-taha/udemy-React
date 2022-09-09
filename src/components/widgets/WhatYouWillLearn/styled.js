import styled from "styled-components"

const Frame = styled.div `
    border: 1px solid #d1d7dc;
    padding-top: 2.4rem;
    padding-bottom: 1.6rem;
    margin-bottom: 3.2rem;
`
const H2 = styled.h2 `
    margin: 0 2.4rem 1.6rem;
    display: block;
    max-width: 118.4rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 2.4rem;
`
const Objectives = styled.div `
    margin: 0 2.4rem;
    ul{
        max-width: 118.4rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        list-style: none;
    }
`
const Objective = styled.div `
    padding: 0.4rem 0;
    display: flex;
    align-items: center;
    img{
        height: 1.4rem;
        margin-right: 1.6rem;
    }

    font-weight: 400;
    line-height: 1.4;
    font-size: 1.4rem;

`


export { Frame, H2, Objectives, Objective }