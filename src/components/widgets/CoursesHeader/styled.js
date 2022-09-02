import styled from "styled-components"

const Section = styled.section `
    padding: 0 2.4rem;
    @media screen and (max-width: 600px) {
        display: none;
    }
`
const H1 = styled.p `
    font-size: 3.2rem;
    font-weight: bold;
    letter-spacing: -.05rem;
    line-height: 1.25;
    @media screen and (max-width: 987px) {
        font-size: 2.6rem;
    }
`
const Text = styled.p `
    margin-top: 0.8rem;
    max-width: 80rem;
    font-size: 1.9rem;
    line-height: 1.4;
`
export { Section, H1, Text }