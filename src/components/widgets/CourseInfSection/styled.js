import styled from "styled-components"


const SectionOut = styled.div `
    background-color: #1c1d1f;
    padding-bottom: 3.2rem;
    padding-top: 3.2rem;
`
const SectionIn = styled.div `
    max-width: 118.4rem;
    margin: 0 auto;
`
const CourseCategory = styled.div `
    max-width: 70rem;
    margin: 0 4.8rem;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0.4rem;
    a {
        color: #cec0fc;
        text-decoration: none;
        padding: 0.4rem 0;
        white-space: nowrap;
        scroll-snap-align: start;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -.02rem;
        font-size: 1.4rem;
    }
    img{
        height: 0.8rem;
        filter: invert(1);  
        margin: 0 0.8rem;
    }
`

const CourseMainContent = styled.div `
    max-width: 70rem;
    margin: 0 4.8rem;
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.4rem;
    color: white;
    h1{
        font-size: 3.2rem;
        margin-bottom: 0.8rem;
        display: block;
        line-height: 1.2;
        margin-top: 1rem;
    }
`

const CourseText = styled.div `
        font-size: 1.9rem;
    margin-bottom: 1.6rem;
`

const Instructor = styled.div `
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.4rem;
    a{
        color: #cec0fc;
        margin-right:0.8rem;
    }
    margin: 0.5rem 0;
`

const MetaDiv = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    margin-top:0.8rem;
    div{
        margin-bottom: 0.8rem;
        margin-right: 1.6rem;
        display: flex;
        align-items: center;
    }
    img{
        height: 1.6rem;
        margin-right:0.8rem;
        filter: invert(1); 
    }
`

const SmallImg = styled.div `
    @media (min-width: 1140px) {
        display: none;
    }
    
    display: flex;
    justify-content: center;
    position: relative;
    img{
        height: 33.5rem;
        width: 60rem;
        filter: brightness(0.5);
    }
    
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
    
    ;

`


export { SectionOut, SectionIn, CourseCategory, CourseMainContent, CourseText, Instructor, MetaDiv, SmallImg, IconsDiv }