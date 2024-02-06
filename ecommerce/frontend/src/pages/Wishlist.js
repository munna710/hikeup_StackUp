import React, { useState } from 'react';
import WishlistCard from '../components/WishlistCard';
import TextWrapper from '../components/textwrapper';
import womenProducts from '../assets/womenProduct';
const Wishlist = () => {
  return (
    <div className='container'>
            <TextWrapper category={"Wishlist"} />
            <div className='row'>
                {womenProducts.map(product => (
            < WishlistCard key={product.id} product={product} />
        ))}
        
      </div>
    </div>
  );
      
};


export default Wishlist;