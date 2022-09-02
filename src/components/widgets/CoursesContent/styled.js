import styled from "styled-components"


const Div = styled.div `
    padding: 3.2rem;
    border-width: 1px;
    border-style: solid;
    margin: 0 2.4rem;
    border-color: #d1d7dc;
`
const CoursesContentHead = styled.div `
    margin-bottom: 3.2rem;
    p {
        max-width: 80rem;
        margin-bottom: 1.6rem;
        font-weight: 400;
        line-height: 1.4;
        font-size: 1.6rem;
    }
    h2 {
        margin-bottom: 0.8rem;
        line-height: 1.2;
        letter-spacing: -.02rem;
        font-size: 2.4rem;
        font-weight: 700;
    }
    @media screen and (max-width: 600px) {
        display: none;
    }
`
const CoursesList = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`
export { CoursesList, CoursesContentHead, Div }