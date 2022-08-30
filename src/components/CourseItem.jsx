import style from '../assets/styles/mainPage/courseItem.module.css'
import Stars from './Stars';

export default function CourseItem({course}){
    //TODO   author  stars 
     let author = ""
    course.instructors.forEach(((instructor, index) => author += (index ? "," : "") + instructor["name"]));
    return(
        <div className={style.courseItem}>
            <img className={style.courseImg} src={course.image} alt="course"/>
            <h3>{course.title}</h3>
            <p className={style.author}>{author}</p>
            <div className={style.rating}>
                <p className={style.ratingScore}>{course.rating.toFixed(1)}</p><span className={style.star}><Stars rating={course.rating}/></span>
                <p className={style.ratingN}>({course.people.toLocaleString('en-US')})</p>
            </div>
            <p className={style.price}>E£{course.price.toLocaleString('en-US')}</p>
            {course.bestseller?<p className={style.bestseller}>Bestseller</p>:<></>}
        </div>
    );
}