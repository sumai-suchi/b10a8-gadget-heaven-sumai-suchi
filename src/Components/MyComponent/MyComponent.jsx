import ReactStars from "react-rating-stars-component";
import React from "react";


const MyComponent = ({rating}) => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div>
          <ReactStars
    count={5}              
    value={rating}     
    onChange={ratingChanged} 
    size={24}
    isHalf={true} 
    activeColor="#ffd700"
  />
        </div>
    );
};

export default MyComponent;
