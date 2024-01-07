import React from 'react';
import ProductCard from '../components/productCard';
import girlsProducts from '../assets/girlsProduct';
import TextWrapper from '../components/textwrapper';
import { Filter } from '../ui/filter';


function Girls({ category }) {
    return (
        <div className='container'>
            <TextWrapper category={category} />
                <Filter />
                <div className='row'>
                {girlsProducts.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
        
      </div>
        </div>
    );
}

export default Girls;