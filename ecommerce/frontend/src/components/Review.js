import React , { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addRating } from '../features/products/productSlice';
import { useLocation } from 'react-router-dom';


const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const Review = ({ reviews, onReviewSubmit }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const getProductId = location.pathname.split("/")[2];
    const productState = useSelector(state => state.product.product);

    const [showForm, setShowForm] = useState(false);  
    const [star,setStar] = useState(null)
    const [comment,setComment] = useState(null)
    const addRatingToProduct = () => {
      if (star === null) {
          toast.error("Please add star rating")
          return false
      } else if (comment === null) {
          toast.error("Please Write Review About the Product.")
          return false
      } else {
          dispatch(addRating({star: star, comment: comment, prodId: getProductId}))
      }
  }
  

  return (
    <div className='card'>
        <div class="card-body">
            <h3 className=' text-center hlo'>CUSTOMER REVIEWS</h3>
        <button onClick={() => setShowForm(!showForm)} className='btn btn-outline-dark me-2 '>
        Write a Review
      </button>
      {showForm && (
      
        
      <div class="form-group d-flex flex-column">
       
        <ReactStars
            count={5}
            onChange={
              (e) => {setStar(e)
              }
            }
            size={24}
            activeColor="#ffd700"
            value='5'
            edit={true}
             />
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Comments'
        onChange={
          (e) => {setComment(e.target.value)
      
          }
        }></textarea>
        
        
        <button type="button" onClick={addRatingToProduct} className='btn btn-outline-dark me-2 mt-auto'>Submit Review</button>
        </div>
        
  
        )}
        <div className=' '>
        <div class="card-body">
     
        {
          productState && productState.ratings?.map((item,index)=>{
            return(
              <div key={index} class="list-group-item">

              <p class="card-title"></p>
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                value={item?.star}
                edit={false}
              />
              <p className='mt-3'>{item?.comment}</p>
            </div>
            )
          })
        }
   
    </div>
    </div>
    </div>
    </div>

  );
};

export default Review;