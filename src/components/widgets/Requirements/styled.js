import styled from "styled-components"

const RequirementsDiv = styled.div `
    margin-bottom: 3.2rem;
    h2{
        max-width: 118.4rem;
        margin-bottom: 1.6rem;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -.02rem;
        font-size: 2.4rem;
        display: block;
    }
    ul{
        max-width: 118.4rem;
        /* list-style: none; */
        font-weight: 400;
    }
    li{
        color: #1c1d1f;
        padding: 0.4rem 0;
        display: flex;
        align-items: center;
        gap:1.6rem;
        width: 100%;
        height: auto;
        text-align: left;
        letter-spacing: normal;
        white-space: normal;
        font-weight: 400;
        line-height: 1.4;
        font-size: 1.4rem; 
    }

    img{
        height: 0.7rem;
    }
`

export { RequirementsDiv }