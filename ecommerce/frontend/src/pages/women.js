import React,{useEffect} from 'react';
import ProductCard from '../components/productCard';
import womenProducts from '../assets/womenProduct';
import TextWrapper from '../components/textwrapper';
import { Filter } from '../ui/filter';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/products/productSlice';
import { useSearchParams } from 'react-router-dom';


function Women({ category }) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.product);

    console.log(products);
   // Add this line to set the category to 'women'
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = () => {
        dispatch(getAllProducts('women'));
    };

    return (
        <div className='container'>
    {products ? (
      <>
        <TextWrapper category={category} />
        <Filter />
        <div className='row'>
          <ProductCard data={products} />
        </div>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
    );
}

export default Women;