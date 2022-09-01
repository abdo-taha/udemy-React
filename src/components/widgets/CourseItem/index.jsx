import style from '../../../assets/styles/mainPage/courseItem.module.css'
import {Author,Price,BestSeller,Rating} from '../CourseItemWidgets'


const CourseItem = ({course})=>{
     
    return(
        <div className={style.courseItem}>
            <img className={style.courseImg} src={course.image} alt="course"/>
            <h3>{course.title}</h3>
            <Author authors={course.instructors} />
            <Rating people={course.people}  rating= {course.rating}/>
            <Price price = {course.price}/>
            <BestSeller bestseller={course.bestseller}/>
        </div>
    );
}

export default CourseItem