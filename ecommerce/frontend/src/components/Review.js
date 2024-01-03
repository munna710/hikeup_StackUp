import React , { useState } from 'react';
import ReactStars from "react-rating-stars-component";


const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const Review = ({ reviews, onReviewSubmit }) => {
    const [showForm, setShowForm] = useState(false);  

 

  return (
    <div className='card'>
        <div class="card-body">
            <h3 className=' text-center hlo'>CUSTOMER REVIEWS</h3>
        <button onClick={() => setShowForm(!showForm)} className='btn btn-outline-dark me-2 '>
        Write a Review
      </button>
      {showForm && (
      <form >
        
      <div class="form-group d-flex flex-column">
       
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            value='5'
            edit={true}
             />
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Comments'></textarea>
        
        
        <button type="submit" className='btn btn-outline-dark me-2 mt-auto'>Submit Review</button>
        </div>
        
      </form>
        )}
        <div className=' '>
        <div class="card-body">
      {reviews.map((review, index) => (
        <div key={index} class="list-group-item">
          <h5 class="card-title">{review.user}</h5>
          <p class="card-title">{review.text}</p>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            value={review.rating}
            edit={false}
          />
        </div>
          ))}
    </div>
    </div>
    </div>
    </div>

  );
};

export default Review;