import styled from 'styled-components'

const OuterDiv = styled.div `
    margin-left: 75rem;
    display: block;
    position: ${props => props.position === 'fix' ? "fixed" : "absolute"};
    z-index: ${props => props.position === 'fix' ? "2" : "1"};
    top: ${props => props.position === 'fix' ? "3.2rem" : props.position === 'up' ? "1.6rem" : "auto"};
    bottom: ${props => props.position === 'down' ? "1.6rem" : "auto"};
    width: 34rem;
    border-bottom: 1px solid #d1d7dc;
    box-sizing: border-box;
    background-color: #fff;
    img{
        width: 100%;
        border: 1px solid #d1d7dc;
    }
    box-shadow: 0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08);
    @media (max-width: 1140px) {
        display: none;
    }
`

const InnerDiv = styled.div `
    padding: 2.4rem;
    color: #1c1d1f;
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.4rem;
    color: #1c1d1f;
    h2{
        margin-bottom: 0.8rem;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -.02rem;
        font-size: 1.6rem;
    }
    li{
        list-style: none;
        height: 2.7rem;
        display: flex;
        padding: 0.4rem 0;
        align-items: center;
        gap: 1.4rem;
    }

    img{
        height: 1.4rem;
        width: 1.4rem;
        border: none;
    }
    border-bottom: 1px solid #d1d7dc;

`

const PriceDiv = styled.div `
    font-weight: 700;
    line-height: 1;
    letter-spacing: -.02rem;
    font-size: 3.2rem;
    div{
        margin-bottom: 0.8rem;
    }
`

const Money = styled.div `
    padding: 1.6rem ;
    text-align: center;
`
const ButtonsDiv = styled.div `
    display: flex;
    column-gap: 1.6rem;
    margin-top:1.6rem;
    a{
        color: #1c1d1f;
        cursor: pointer;
        text-decoration: underline;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -.02rem;
        font-size: 1.4rem;
    }
`
const TrainDiv = styled.div `
    padding: 2.4rem;
        font-weight: 400;
    line-height: 1.4;
    font-size: 1.4rem;
`
const HideOnScroll = styled.div `
    display: ${props => props.hide ? "none" : "block"};
    position: relative;
`

const IconsDiv = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
        /* filter:invert(1); */
        height: 6rem;
        width: 6rem;
        border: none;
        margin-top: 6rem;
         margin-bottom: 2.5rem;
    }
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 1.6rem;
    color: white;
    cursor: pointer;  
    background-color  :rgb(0 0 0 / 35%); ;

`

export {
    OuterDiv,
    InnerDiv,
    PriceDiv,
    Money,
    ButtonsDiv,
    TrainDiv,
    HideOnScroll,
    IconsDiv
}