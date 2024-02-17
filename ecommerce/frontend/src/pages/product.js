import React,{useEffect} from 'react';
import ProductCard from '../components/productCard';
import TextWrapper from '../components/textwrapper';
import { Filter } from '../ui/filter';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts2 } from '../features/products/productSlice';

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    console.log(products);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = () => {
        dispatch(getAllProducts2());
    };
  return (
    <div className='container'>
    {products ? (
      <>
        <TextWrapper category={'all'} />
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


export default Product