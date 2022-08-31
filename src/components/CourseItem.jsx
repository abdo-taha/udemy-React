import style from '../assets/styles/mainPage/courseItem.module.css'
import Stars from './Stars';




function Rating({people,rating}) {
  rating = rating.toFixed(1);
  people = people.toLocaleString('en-US');
  return (
    <div className={style.rating}>
        <p className={style.ratingScore}>{rating}</p>
        <span className={style.star}>
            <Stars rating={rating}/>
        </span>
        <p className={style.ratingN}>({people})</p>
    </div>
  )
}

function BestSeller({bestseller}){
    return(
        bestseller?<p className={style.bestseller}>Bestseller</p>:<></>
    )
}

function Price({price}){
    price = price.toLocaleString('en-US')
    return(
        <p className={style.price}>E£{price}</p>
    )
}

function Author({authors}){
    let author = ""
    authors.forEach(((instructor, index) => author += (index ? "," : "") + instructor["name"]));
    return (
        <p className={style.author}>{author}</p>
    )
}



export default function CourseItem({course}){
     
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