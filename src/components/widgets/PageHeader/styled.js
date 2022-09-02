import styled from 'styled-components'


const Header = styled.header `
  position: relative;
  margin-bottom: 48px;
  img {
    max-width: 100%;
  } 
  @media screen and (max-width: 870px) {
    margin-bottom: 2.4rem;
  }
`

const HeaderBox = styled.div `
  background-color: white;
  max-width: 44rem;
  position: absolute;
  top: 6.4rem;
  left: 7.2rem;
  padding: 2.4rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
  background-color: white;
  max-width: 44rem;
  position: absolute;
  top: 6.4rem;
  left: 7.2rem;
  padding: 2.4rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
  h1 {
    margin-bottom: 0.8rem;
    font-size: 3.2rem;
    line-height: 1.25;
  }
  p {
    font-size: 1.9rem;
    line-height: 1.4;
  }
  @media screen and (max-width: 1120px) {
    max-width: 35.2rem;
    top: 2.4rem;
    left: 4.8rem;
  }

  @media screen and (max-width: 987px) {
    max-width: 29.2rem;
    top: 2.4rem;
    left: 4.8rem;
  }

  @media screen and (max-width: 870px) {
    max-width: none;
    position: unset;
    box-shadow: none;
    h1 {
        font-size: 2.6rem;
    }
  }
`

export { Header, HeaderBox }