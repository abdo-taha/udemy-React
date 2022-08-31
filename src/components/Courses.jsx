import React from 'react'
import classNames from "classnames"
import CoursesContent from './CoursesContent'
import data from "../db.json"
import style from '../assets/styles/mainPage/courses.module.css'
import CourseItem from './CourseItem'


let buttonsData = [
    {"id":"btn-python", "title": "Python"},
    {"id":"btn-excel", "title": "Excel"},
    {"id":"btn-web", "title": "Web Development"},
    {"id":"btn-java", "title": "Javascript"},
    {"id":"btn-data", "title": "Data Science"},
    {"id":"btn-aws", "title": "AWS Certification"},
    {"id":"btn-drawing", "title": "Drawing"}
]

function Button({title,id,_class}){
    return(
        <button className = {classNames(style.topicBtn,_class)}  id={id}><span>{title}</span></button>
    )
}



function Courses() {

    let {header,description,category} = data


  return (
    <section className={style.courses}>
        <div className={style.topics}>
            {buttonsData.map(btn=><Button  key={btn.id} id = {btn.id} title = {btn.title}  _class = {btn.id === 'btn-python'?style.topicBtnActive:null}/>)}
        </div>
        
        <CoursesContent  header = {header} description = {description} category = {category} >
            {data.courses.map(course=><CourseItem  course = {course} key = {course.id}/>)}    
        </CoursesContent>
        

    </section>
  )
}


export default Courses