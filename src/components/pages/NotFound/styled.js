import styled from 'styled-components'

const MainDiv = styled.div `
        display: flex;
        flex-direction: column;
        margin: 0 9rem;
        align-items: center;
        padding: 4.8rem 2.4rem 6.4rem;
    img{
        width: fit-content;
    }
    h1{
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 1.25;
        letter-spacing: -.05rem;
        max-width: 48rem;
        text-align: center;
    }
`

export { MainDiv }