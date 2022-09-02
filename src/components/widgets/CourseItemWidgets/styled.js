import styled from 'styled-components';

const RatingDiv = styled.div `
    display: flex;
    margin-bottom: 0.4rem;
`

const RatingScore = styled.div `
    color: #b4690e;
    font-weight: 700;
    margin-right: 0.4rem;
    font-size: 1.4rem;
`

const RatingN = styled.p `
    margin-left: 0.4rem;
    font-size: 1.2rem;
    color: #6a6f73;
`
const BestSellerP = styled.p `
    background-color: #eceb98;
    color: #3d3c0a;
    padding: 0.4rem 0.8rem;
    display: inline-block;
    width: fit-content;
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
`
const PriceP = styled.p `
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
`
const AuthorP = styled.p `
    font-size: 1.2rem;
    color: #1c1d1f;
    margin-bottom: 0.4rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    min-height: 1.68rem;
`
export { AuthorP, PriceP, BestSellerP, RatingN, RatingScore, RatingDiv }