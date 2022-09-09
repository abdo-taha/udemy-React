import styled from 'styled-components'

const InfoDiv = styled.div `
    display: flex;
    line-height: 1.4rem;
    align-items: center;
    img{
        height: 1.2rem;
    }
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.4rem;
    gap: 0.4rem;
`
const Rating = styled.span `
    color: #f3ca8c;
    margin-right: 0.4rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 1.4rem;
`


const RateCount = styled.span `
    color: #cec0fc;
    text-decoration: underline;
`
const Enrolled = styled.span `
    color: white;
`


export { Rating, InfoDiv, RateCount, Enrolled }