import styled from "styled-components";

const CatItem = styled.div `
    margin: 0 1.6rem 1.6rem 0;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items: flex-start;
    cursor: pointer;
    img {
        max-width: 100%;
        height: auto;
    }
    img:hover {
        transform: scale(1.05);
        transition: transform 150ms cubic-bezier(0, 0, .38, .9);
    }
    div{
        overflow: hidden;
    }
    max-width: calc(100%/3 - 1.6rem);
    @media (min-width: 44rem) {
        
        max-width: calc(100%/4 - 1.6rem);
    }

`

const Title = styled.div `
    color: #1c1d1f;
    padding: 0.8rem 0 1.6rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 1.6rem;
`

const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const Outer = styled.div `
    margin-left: 2.4rem;
    h2{
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -.02rem;
        font-size: 2.4rem;
        margin-bottom: 2.4rem;
    }
`

export { CatItem, Title, Container, Outer }