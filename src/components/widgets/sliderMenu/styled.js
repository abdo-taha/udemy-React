import styled from 'styled-components'

const SliderDiv = styled.div `
    position: fixed;
    width: 100%;
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.16);
    top: 0;
    padding: 1.6rem 2.4rem;
    color: #fff;
    background-color: #1c1d1f;
`
const InnerDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: baseline;
    /* width: 100%; */
`

const Name = styled.div `
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    margin-bottom: 0.4rem;
    line-height: 1.4;
    font-size: 1.6rem;
`





export { SliderDiv, InnerDiv, Name }