import styled from "styled-components"


const H2 = styled.h2 `
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 2.4rem;
    margin:  2.4rem 0;
`

const BigRate = styled.div `
    line-height: 1;
    display: flex;
    color: #b4690e;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 1.4rem;
    font-weight: 700;
`

const Stats = styled.div `
    display: flex;
    flex-direction: row;
`
const StatsDetails = styled.div `
    margin-left: 1.6rem;
    display: flex;
    flex-direction: column-reverse;
    padding-left: 2.4rem;
    flex:1;
`
const BarDiv = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.4rem 0;
    p{
        color: #5624d0;
        font-weight: 400;
        font-size: 1.4rem;
        cursor: pointer;
        text-decoration: underline;
        margin-left: 0.8rem;
        min-width: 3rem;
    }
`
const SearchDiv = styled.form `
    display: flex;
    align-items: center;
    margin-bottom: 2.4rem;
    select{
        width: 15rem;
        border-width: 2px;
        border-color: black;
        padding: 0.4rem 0.8rem;
        height: 3.2rem;
        text-align: center;
        color: gray;
    }
    
`

const Input = styled.input `
    height: 3.5rem;
    flex: 1;
    border-width: 2px;
    border-color: black;
    padding: 0.4rem 0.8rem;
    &:focus{
        outline: none;
    }
`
const IconDiv = styled.div `
    width: 3.5rem;
    background-color: black;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 1.6rem;
        filter: invert(1);
    }
    margin-right: 0.6rem;

`



export { H2, BigRate, Stats, StatsDetails, BarDiv, Input, IconDiv, SearchDiv }