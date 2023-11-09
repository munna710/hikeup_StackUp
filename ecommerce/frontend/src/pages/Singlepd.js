// single product
//means when you click the product it will go to that product details,price,and there is a add to car option
import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import products from './Products.json';
function Singlepd() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      const product = products.find(product => product.name === 'Blue net frock');
  return (
    <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
        <div className='col6'>
        <div className='col6'>
        <div className="product-grid">
                <div>
                  <NavLink to={{ pathname: '/product-detail', state: { product } }}>
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                  </NavLink>
                </div>
              </div>
        <section class="trending-now">
  <h2 className='htd'>Trending Now</h2>
  <div class="product-grid">
    <div class="product">
      <NavLink to="/product1">
        <img className='g1' src="\images\girls\g1.png" alt="Product"/>
      </NavLink>
      <h3 className='p1h3'>Product</h3>
      <p className='p1p1'> ₹600</p>
      <div className='rating'>
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
      value='4'
      edit={false}
    />
  </div>
    </div>
    <div class="product">
      <NavLink to="/product2">
        <img className='g2' src="\images\girls\g2.png" alt="Product 2"/>
      </NavLink>
      <h3 className='p2h3'>Product </h3>
      <p className='p1p2'>₹600</p>
      <div className='rating2'>
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
      value='4'
      edit={false}
    />
  </div>
    </div>
    <div class="product">
      <NavLink to="/product3">
        <img className='g3' src="\images\girls\g3.png" alt="Product 2"/>
      </NavLink>
      <h3 className='p3h3'>Product</h3>
      <p className='p1p3'>₹600</p>
      <div className='rating3'>
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
      value='4'
      edit={false}
    />
  </div>
    </div>
    <div class="product">
      <NavLink to="/product4">
        <img className='g4' src="\images\girls\g7.png" alt="Product 2"/>
      </NavLink>
      <h3 className='p4h3'>Product</h3>
      <p className='p1p4'>₹600</p>
      <div className='rating4'>
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
      value='4'
      edit={false}
    />
  </div>
    </div>
    

  
  </div>
</section>
            
        
            </div>
        
        </div>
        
        </div>
        
        </div>
    </div>
  )
}

export default Singlepd