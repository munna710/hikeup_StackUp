import React, { useState } from 'react';
import './filter.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export const Filter = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [color, setColor] = useState('');
  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black'];
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const [value, setValue] = useState({ min: 100, max: 2000 });
  const [sort, setSort] = useState('');
  const sortOptions = ['New Arrivals', 'Price: High to Low', 'Price: Low to High'];

  return (
    <div className='d-flex justify-content-between  position-relative'>
      <button onClick={toggleDropdown} className='btn btn-outline-dark me-2 mb-button'>Filter</button>
      {showDropdown && (
        <div className='container bg-light '>
        <div className=' container dropdown' style={{ position: 'absolute', zIndex: 1, backgroundColor:"white",border:'1px' }}>

          <div className='filter-option mb-3'>
            <label htmlFor="customRange1" className="form-label mb-3">Price Range</label>
            <InputRange
              maxValue={2000}
              minValue={400}
              step={100}
              value={value}
              onChange={value => setValue(value)} />
          </div>
          <div className='filter-option'>
            <label className="form-label">Color</label>
            {colors.map((colorOption, index) => (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  id={`color-${index}`}
                  name="color"
                  value={colorOption}
                  checked={color === colorOption}
                  onChange={e => setColor(e.target.value)} />
                <label className="form-check-label" htmlFor={`color-${index}`}>
                  {colorOption}
                </label>
              </div>
            ))}
          </div>
          
        </div>
        </div>
      )}

<div className="d-flex justify-content-end">
  <div className="dropdown">
    <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Sort
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      {sortOptions.map((sortOption, index) => (
        <li key={index}>
          <button className="dropdown-item" onClick={() => setSort(sortOption)}>
            {sortOption}
          </button>
        </li>
      ))}
    </ul>
  </div>
</div>
    </div>
    
  );
};
