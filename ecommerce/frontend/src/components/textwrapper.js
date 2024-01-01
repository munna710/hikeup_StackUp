import React from 'react';
import './texwrapper.css';

const TextWrapper = ({ category }) => {
  // If category is undefined, use an empty string as the default value
  const upperCaseCategory = (category || "").toUpperCase();

  return (
    <div className='girls-product-catalogue'>
      <div className="text-wrapper">
        <h1>{upperCaseCategory}&nbsp;&nbsp;</h1>
        <h1>{upperCaseCategory}&nbsp;&nbsp;</h1>
        <h1>{upperCaseCategory}&nbsp;&nbsp;</h1>
        <h1>{upperCaseCategory}&nbsp;&nbsp;</h1>
        <h1>{upperCaseCategory}&nbsp;&nbsp;</h1>
        <h1>{upperCaseCategory}&nbsp;&nbsp;</h1>
        <h1>{upperCaseCategory}&nbsp;&nbsp;</h1>
        <h1>{upperCaseCategory}&nbsp;&nbsp;</h1>
      </div>
    </div>
  )
}

export default TextWrapper;