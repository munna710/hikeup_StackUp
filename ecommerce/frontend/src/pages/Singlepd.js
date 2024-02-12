import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import womenProducts from '../assets/womenProduct';
import '../ui/MostLoved';
import MostLoved from '../ui/MostLoved';
import Review from '../components/Review';
import { useDispatch, useSelector } from 'react-redux';
import { getAProduct } from '../features/products/productSlice';
import ReactStars from "react-rating-stars-component";
const SingleProduct = () => {
  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector(state => state.product.product);
  useEffect(() => {
    dispatch(getAProduct(getProductId));
  }, []);

  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const product = womenProducts.find((product) => product.id === Number(id));
  const [reviews, setReviews] = useState(product ? product.reviews : []);
  const handleReviewSubmit = (reviewText, rating) => {
    setReviews([...reviews, { text: reviewText, rating }]);
  };
  const imageUrl = productState.images && productState.images[0] ? productState.images[0].url : 'defaultImageUrl';

  if (!productState) {
    return <div>Product not found</div>;
  }
 
  return (
    <div className='container border'>
      <div className='section py-5'>
        <div className='container px-4 px-lg-5 my-5 border'>
          <div className='row gx-4 gx-lg-5 align-items-center'>
            <div className='col-md-6'>
              <img className='card-img-top mb-5 mb-md-0' src={imageUrl} alt={productState.title} />
            </div>
            <div className='col-md-6'>
              <h1 className='display-5 fw-bolder'>{productState?.title}</h1>
              <div className='fs-5 mb-2'>
                <span className='text-decoration-line-through me-3 fs-8 text-danger'>₹2500</span>
                <span className='price fs-1'>₹{productState?.price}</span>
              </div>
              <div className='mt-3'>
                  
                  <ReactStars count={5} value={productState?.totalRatings} size={24} color2={'#ffd700'} edit={false} />
                </div>
              <div className='border-top'>
              
              <div className='mt-3'>
              <label className='me-2 fw-bold'>Color:</label>
              {['green', 'red', 'blue', 'black', 'brown'].map((color, index) => (
                <div key={index} style={{ backgroundColor: color, width: '20px', height: '20px', display: 'inline-block', margin: '5px', verticalAlign: 'middle' }}></div>
              ))}
            </div>
            </div>
              <div className='mt-3'>
              <label className='me-2 fw-bold'>Size:</label>
              {['S', 'M', 'L'].map((size, index) => (
                <label className="btn btn-outline-dark form-check-label me-2" key={index}>
                  <input className="form-check-input" type="radio" name="sizeOptions" value={size} style={{display: 'none'}}/>
                  {size}
                </label>
              ))}
            </div>
            <div className='mt-3'>
              <label className='me-2 fw-bold'>Availability:</label>
              <span  className='badge bg-dark text-wrap'>{productState?.quantity} in Stock</span>
            </div>
              <p dangerouslySetInnerHTML={{ __html: productState?.description }} className='text-dark'></p>
              <div className='d-flex'>
                <input className='form-control  me-3' id='inputQuantity' type='number'
                  value={quantity} onChange={e => setQuantity(e.target.value)} min="1" style={{ maxWidth: '6rem' }} />
                <button className='btn btn-outline-dark flex-shrink-0' type='button'>
                  <i className='bi-cart-fill me-1'></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <Review reviews={reviews} onReviewSubmit={handleReviewSubmit} />
        <MostLoved />
      </div>
    </div>
  );
};

export default SingleProduct;