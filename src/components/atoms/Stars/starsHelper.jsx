import fullstar from '../../../assets/images/star-full.png'
import halfstar from '../../../assets/images/star-half.png'
import emptystar from '../../../assets/images/star-empty.png'


const Star = ({link})=>{
    return (
        <img src={link} alt = "" /> 
    )
}


const handleStars = (rating)=>{
    let left = 5;
    let stars = []
    for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(fullstar)
            --left;
    }
    if (Math.floor(rating) !== Math.round(rating)) {
        --left;
        stars.push(halfstar)
    }
    for (let i = 0; i < left; i++) {
        stars.push(emptystar)
    }
    return stars
}

export {Star,handleStars}