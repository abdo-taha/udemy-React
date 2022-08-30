import fullstar from '../assets/images/star-full.png'
import halfstar from '../assets/images/star-half.png'
import emptystar from '../assets/images/star-empty.png'
function FullStar(){
    return (
        <img src={fullstar} alt = ""/> 
    )
}

function HalfStar(){
    return (
        <img src={halfstar} alt="" /> 
    )
}
function EmptyStar(){
    return (
        <img src={emptystar} alt = ""/> 
    )
}



export default function Stars({rating}){
    let left = 5;
    let stars = []
    for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(<FullStar/>)
            --left;
    }
    if (Math.floor(rating) !== Math.round(rating)) {
        --left;
        stars.push(<HalfStar />)
    }
    for (let i = 0; i < left; i++) {
        stars.push(<EmptyStar />)
    }
    return(
        <>
        {stars}
        </>
        
    )
}