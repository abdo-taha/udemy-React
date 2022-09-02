import styled from 'styled-components';

const Div = styled.div `
    width: 23.2rem;
    display: inline-flex;
    flex-direction: column;
    cursor: pointer;
    h3 {
        font-size: 1.6rem;
        margin-top: 0.8rem;
        margin-bottom: 0.4rem;
        max-height: 3.8rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @media screen and (min-width: 600px) {
        width: calc((100% - (2 - 1) * 1.6rem)/2);
    }

    @media screen and (min-width: 700px) {
        width: calc((100% - (3 - 1) * 1.6rem)/3);
    }

    @media screen and (min-width: 970px) {
        width: calc((100% - (4 - 1) * 1.6rem)/4);
    }

    @media screen and (min-width: 1200px) {
        width: calc((100% - (5 - 1) * 1.6rem)/5);
    }
`
export { Div }