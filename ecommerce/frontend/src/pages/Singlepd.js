import React from 'react';
import { useParams } from 'react-router-dom';
import womenProducts from '../assets//womenProduct';

const SingleProduct = () => {
  const { id } = useParams();
  const product = womenProducts.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.pic1} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>Sale Price: ${product.salePrice}</p>
    </div>
  );
};

export default SingleProduct;