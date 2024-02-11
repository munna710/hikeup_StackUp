import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const {data} = props;
  console.log(data);
  // let location = useLocation();
  if (!Array.isArray(data)) {
    console.error('Invalid data format. Expected an array.');
    return null; // or handle the error in an appropriate way
  }
  return (
    <>
      
      {data?.map((item, index) => {
        return (
          <div className="col-md-3 col-sm-6" key={index}>
            <div className="product-grid">
              <div className="product-image">
                <a href="#" className="image">
                  <img className="pic-1" src={item?.images[0]} alt="Product Image" />
                  <img className="pic-2" src={item?.images[1]} alt="Product Image" />
                </a>
                
                <a href="#" className="product-like-icon" data-tip="Add to Wishlist">
                  <i className="far fa-heart"></i>
                </a>
                <ul className="product-links">
                  <li><a href="#"><i className="fa fa-search"></i></a></li>
                  <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                  <li><a href="#"><i className="fa fa-random"></i></a></li>
                </ul>
              </div>
              <div className="product-content">
                <h3 className="title"><Link to={`/product/${item?._id}`}>{item?.title}</Link></h3>
                <div className="price"><span>₹{item?.price}</span> ₹{item?.price}</div>
              </div>
            </div>
          </div>
        );
      })}
    
    </>
    
        

  );
};

export default ProductCard;