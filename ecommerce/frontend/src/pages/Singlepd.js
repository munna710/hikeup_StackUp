import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import womenProducts from '../assets/womenProduct';
import '../ui/MostLoved';
import MostLoved from '../ui/MostLoved';
import Review from '../components/Review';
import { useDispatch, useSelector } from 'react-redux';
import { getAProduct } from '../features/products/productSlice';
import ReactStars from "react-rating-stars-component";
import Color from '../components/Color';
import Size from '../components/size';
import { addProdToCart,getUserCart } from '../features/user/userSlice';
import { toast } from 'react-toastify';

const SingleProduct = () => {
  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const productState = useSelector(state => state.product.product);
  const cartState = useSelector(state => state.auth.cartProducts);
  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
  }, []);
  useEffect(() => {
    if (cartState) {
      for(let index = 0; index < cartState.length; index++){
        if(getProductId === cartState[index]?.productId?._id){
          setAlreadyAdded(true);
        }
      }
    }
  }, []);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);
  
  const [color, setColor] = useState(null);
  console.log(color);
  const [sizes, setSize] = useState(null);

  console.log(sizes);
  const product = womenProducts.find((product) => product.id === Number(id));
  const [reviews, setReviews] = useState(product ? product.reviews : []);
  const handleReviewSubmit = (reviewText, rating) => {
    setReviews([...reviews, { text: reviewText, rating }]);
  };
  const imageUrl = productState.images && productState.images[0] ? productState.images[0].url : 'defaultImageUrl';

  if (!productState) {
    return <div>Product not found</div>;
  }
  const uploadcart = () => {
    if (color === null) {
        toast.error("Please Choose Color")
        return false
    }
    else if (sizes === null) {
      toast.error("Please Choose Size")
      return false
    }
     else {
        dispatch(addProdToCart({productId:productState._id,quantity,color,price:productState.price,sizes}))
        navigate('/cart');
    }
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
              
              <div className='mt-3 '>
              <label className='me-2 fw-bold'>Color:</label>
              <span><Color setColor={setColor} colorData={productState?.color} /></span>
              
            </div>
            </div>
              <div className='mt-3'>
              <label className='me-2 fw-bold'>Size:</label>
              <span><Size setSize={setSize} sizeData={productState?.sizes}/></span>
               
            
            </div>
            <div className='mt-3'>
              <label className='me-2 fw-bold'>Availability:</label>
              <span  className='badge bg-dark text-wrap'>{productState?.quantity} in Stock</span>
            </div>
              <p dangerouslySetInnerHTML={{ __html: productState?.description }} className='text-dark'></p>
              <div className='d-flex'>
                {alreadyAdded === false && <>
                <div>
                  
                <input className='form-control  me-3' 
                id='inputQuantity' type='number'
                  value={quantity} 
                  onChange={e => setQuantity(e.target.value)} 
                  min="1" 
                  max={productState?.quantity} 
                  style={{ maxWidth: '6rem' }} />
                </div>
                </>  }
                <button className='btn btn-outline-dark flex-shrink-0' type='button' onClick={()=>{alreadyAdded?navigate('/cart'): uploadcart()}}>
                  <i className='bi-cart-fill me-1'></i>
                  {alreadyAdded? 'Go to cart' : 'Add to cart'}
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