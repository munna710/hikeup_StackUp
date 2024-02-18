import React, { useState } from 'react';
import './filter.css';
import RangeSlider from 'react-range-slider-input';

export const Filter = () => {

  const [sort, setSort] = useState(null);
  console.log(sort)

  return (
        <div className="container">
              <div className='row'>
            <p className="mb-0 d-block" >
                Sort By:
            </p>
            <select
                name=""
                defaultValue="manual"
                className="form-control form-select"
                id=""
                onChange={(e) => setSort(e.target.value)}
                
            >
           
            <option value="title">Alphabetically, A-Z</option>
            <option value="-title">
                Alphabetically, Z-A
            </option>
            <option value="price">Price, low to high</option>
            <option value="-price">Price, high to low</option>
            <option value="createdAt">Date, old to new</option>
            <option value="-createdAt">Date, new to old</option>
            </select></div>
            </div>



    
  );
};
