import React,{useEffect, useState} from 'react';
import ProductCard from '../components/productCard';
import womenProducts from '../assets/womenProduct';
import TextWrapper from '../components/textwrapper';
import { Filter } from '../ui/filter';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/products/productSlice';


function Women({ category }) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.product);
    const [sort, setSort] = useState(null);
    console.log(sort)
    console.log("products:",products);
   // Add this line to set the category to 'women'
    useEffect(() => {
        getProducts();
    }, [dispatch, sort]);
    const getProducts = () => {
      dispatch(getAllProducts({category:'women', sort: sort }));
    };

    return (
        <div className='container'>
    {products ? (
      <>
        <TextWrapper category={category} />
        <div className="container">
  <div className='row d-flex'> {/* Add align-items-center to vertically center the items */}
    <div className="col-1 text-center fs-5 border bg-dark text-white"> {/* Adjust the column sizes as needed */}
      <p className="mb-0">Sort By:</p>
    </div>
    <div className="col-11">
      <select
        defaultValue="manual"
        className="form-control form-select"
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="title">Alphabetically, A-Z</option>
        <option value="-title">Alphabetically, Z-A</option>
        <option value="price">Price, low to high</option>
        <option value="-price">Price, high to low</option>
        <option value="createdAt">Date, old to new</option>
        <option value="-createdAt">Date, new to old</option>
      </select>
    </div>
  </div>
</div>
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