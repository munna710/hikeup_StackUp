import React from 'react';
import ProductCard from '../components/productCard';
import womenProducts from '../assets/womenProduct';
import TextWrapper from '../components/textwrapper';


function Women({ category }) {
    return (
        <div className='container'>
            <TextWrapper category={category} />
            
                <div className='row'>
                {womenProducts.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
        
      </div>
        </div>
    );
}

export default Women;