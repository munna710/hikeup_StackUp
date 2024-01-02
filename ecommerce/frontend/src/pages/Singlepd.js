import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import womenProducts from '../assets//womenProduct';
import '../ui/MostLoved';
import MostLoved from '../ui/MostLoved';
import Review from '../components/Review';

const SingleProduct = () => {
  const { id } = useParams();
  const product = womenProducts.find((product) => product.id === Number(id));
  const [reviews, setReviews] = useState(product ? product.reviews : []);
  const handleReviewSubmit = (reviewText, rating) => {
    setReviews([...reviews, { text: reviewText, rating }]);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='container'>
      <h1>{product.name}</h1>
      <img src={product.pic1} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>Sale Price: ${product.salePrice}</p>
      <p>Description: {product.description}</p>
      
      
      <Review reviews={reviews} onReviewSubmit={handleReviewSubmit} />
      <MostLoved />
    </div>
  );
};

export default SingleProduct;