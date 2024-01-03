import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import womenProducts from '../assets/womenProduct';
import '../ui/MostLoved';
import MostLoved from '../ui/MostLoved';
import Review from '../components/Review';


const SingleProduct = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const product = womenProducts.find((product) => product.id === Number(id));
  const [reviews, setReviews] = useState(product ? product.reviews : []);
  const handleReviewSubmit = (reviewText, rating) => {
    setReviews([...reviews, { text: reviewText, rating }]);
  };

  if (!product) {
    return <div>Product not found</div>;
  }
  const colors = product.colors || [];
  return (
    <div className='container'>
      <div className='section py-5'>
  <div className='container px-4 px-lg-5 my-5'>
    <div className='row gx-4 gx-lg-5 align-items-center'>
      <div className='col-md-6'>
        <img className='card-img-top mb-5 mb-md-0' src={product.pic1} alt={product.name} />
      </div>
      

      <div className='col-md-6'>
        
        <h1 className='display-5 fw-bolder'>{product.name}</h1>
        <div className='fs-5 mb-5'>
          <span className='text-decoration-line-through me-3'>₹{product.price}</span>
          <span>₹{product.salePrice}</span>
        </div>
        
  <div className=''>
  <label className='me-2'>Color:</label>
  <span>{product.color}</span>
</div>

<div className='mt-3'>
  <label className='me-2'>Size:</label>
  {product.sizes.map((size, index) => (
    <label className="btn btn-outline-dark form-check-label me-2" key={index}>
      <input className="form-check-input" type="radio" name="sizeOptions" id={`size${size}`} value={size} checked={size === size} onChange={e => setSize(e.target.value)} style={{display: 'none'}} />
      {size}
    </label>
  ))}
</div>
        <p className='lead'>{product.description}</p>
        <div className='d-flex'>
        <input className='form-control  me-3' id='inputQuantity' type='number' 
        value={quantity} onChange={e => setQuantity(e.target.value)} min="1" style={{maxWidth: '6rem'}} />          
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