import React from 'react';
import './texwrapper.css';

const TextWrapper = ({ category }) => {
  return (
    <div className='girls-product-catalogue'>
      <div className="text-wrapper">
        <h1>{category.toUpperCase() }&nbsp;&nbsp;</h1>
        <h1>{category.toUpperCase()}&nbsp;&nbsp;</h1>
        <h1>{category.toUpperCase()}&nbsp;&nbsp;</h1>
        <h1>{category.toUpperCase()}&nbsp;&nbsp;</h1>
        <h1>{category.toUpperCase()}&nbsp;&nbsp;</h1>
        <h1>{category.toUpperCase()}&nbsp;&nbsp;</h1>
        <h1>{category.toUpperCase()}&nbsp;&nbsp;</h1>
      </div>
    </div>
  )
}

export default TextWrapper;