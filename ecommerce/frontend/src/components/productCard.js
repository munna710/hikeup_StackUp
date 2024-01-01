import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    
        <div className="col-md-3 col-sm-6">
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <img className="pic-1" src={product.pic1} alt="Product Image" />
                <img className="pic-2" src={product.pic2} alt="Product Image" />
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
              <h3 className="title"><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
              <div class="price"><span>₹{product.price}</span> ₹{product.salePrice}</div>
            </div>
          </div>
        </div>
  

  );
};

export default ProductCard;