import classNames from "classnames"
import style from '../../../assets/styles/mainPage/courses.module.css'


const CourseCategoryButton = ({title,id,_class,onClick})=>{
    return(
        <button className = {classNames(style.topicBtn,_class)} onClick = {onClick}   id={id}><span>{title}</span></button>
    )
}


export  {CourseCategoryButton}