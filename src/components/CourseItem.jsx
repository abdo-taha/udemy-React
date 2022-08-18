import '../assets/styles/mainPage/courseItem.css'
import Stars from './Stars';

export default function CourseItem({course}){
    //TODO   author  stars 
     let author = ""
    course.instructors.forEach(((instructor, index) => author += (index ? "," : "") + instructor["name"]));
    return(
        <div className="course-item">
            <img className="course-img" src={course.image} alt="course"/>
            <h3>{course.title}</h3>
            <p className="author">{author}</p>
            <div className="rating">
                <p className="rating-score">{course.rating.toFixed(1)}</p><span className="star"><Stars rating={course.rating}/></span>
                <p className="rating-n">({course.people.toLocaleString('en-US')})</p>
            </div>
            <p className="price">E£{course.price.toLocaleString('en-US')}</p>
            {course.bestseller?<p className="bestseller">Bestseller</p>:<></>}
        </div>
    );
}