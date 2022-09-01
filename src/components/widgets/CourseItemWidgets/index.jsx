import style from '../../../assets/styles/mainPage/courseItem.module.css'
import Stars from '../../atoms/Stars';

const Rating = ({people,rating}) =>{
    rating = rating.toFixed(1);
    people = (people??0).toLocaleString('en-US');
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
  
const BestSeller = ({bestseller})=>{
    return(
        bestseller?<p className={style.bestseller}>Bestseller</p>:<></>
    )
}

const Price = ({price})=>{
    price = price.toLocaleString('en-US')
    return(
        <p className={style.price}>E£{price}</p>
    )
}

const Author = ({authors})=>{
    let author = ""
    authors.forEach(((instructor, index) => author += (index ? "," : "") + instructor["name"]));
    return (
        <p className={style.author}>{author}</p>
    )
}

export {Author,Price,BestSeller,Rating}