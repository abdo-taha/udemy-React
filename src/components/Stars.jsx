import fullstar from '../assets/images/star-full.png'
import halfstar from '../assets/images/star-half.png'
import emptystar from '../assets/images/star-empty.png'



function Star({link}){
    return (
        <img src={link} alt = "" /> 
    )
}


function handleStars(rating){
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


export default function Stars({rating}){
    
    return(
        <>
        {
            handleStars(rating).map((link,key)=><Star link={link} key = {key}/>)
        }
        </>
        
    )
}