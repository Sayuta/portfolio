import react from 'react'

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }

const Stars = (props) => {
    var temp = "";
    var filledStars = clamp(props.amount, 1, 5);
    var emptyStars = -(filledStars - 5);

    for(var i = 0; i < filledStars; i++){
        temp += "★";
    }
    for(var i = 0; i < emptyStars; i++){
        temp += "☆";
    }

    return(<span>{temp}</span>)
}

export default Stars;