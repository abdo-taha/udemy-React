import styled from "styled-components"


const Outer = styled.div `
    min-width: 7.5rem;
    background: #d1d7dc;
    height: 0.8rem;
    width: 100%;
    flex: 1;
    margin-right:  1.6rem ;
`

const Progress = styled.span `
    background: #6a6f73;
    display: block;
    height: 100%;
    width: ${(props) => `${props.percent}%` || 0};
`

export { Progress, Outer }