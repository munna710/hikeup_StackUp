//girls product page
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const Pdgirls = () => {
  const [heartColor, setHeartColor] = useState('black');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [minPrice, setMinPrice] = useState(600);
  const [maxPrice, setMaxPrice] = useState(4600);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };
    const handleMinPriceChange = (e) => {
      setMinPrice(parseInt(e.target.value));
    };
  
    const handleMaxPriceChange = (e) => {
      setMaxPrice(parseInt(e.target.value));
    };
  const handleFilterClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleApplyFilters = () => {
    // Handle filter logic and API calls here
    // ...
  };

  
  return (
    <>
    <div className='girls-product-catalogue'>
      <div class="text-wrapper">
    <h1>GIRLS&nbsp;&nbsp;GIRLS&nbsp;&nbsp;</h1>
    <h1>GIRLS&nbsp;&nbsp;GIRLS&nbsp;&nbsp;</h1>
    <h1>GIRLS&nbsp;&nbsp;GIRLS&nbsp;&nbsp;</h1>
    <h1>GIRLS&nbsp;&nbsp;GIRLS&nbsp;&nbsp;</h1>
    <h1>GIRLS&nbsp;&nbsp;GIRLS&nbsp;&nbsp;</h1>
    <h1>GIRLS&nbsp;&nbsp;GIRLS&nbsp;&nbsp;</h1>
    <h1>GIRLS&nbsp;&nbsp;GIRLS&nbsp;&nbsp;</h1>
    </div>
    <div class="TopControl--right--Q8JAaZp">
    <div className="filter-container">
      <div className="filter-button" onClick={handleFilterClick}>
        FILTER
      </div>
      {isFilterVisible && (
        <div className="filter-dropdown">
          <div className="filter-section">
            <h3>STYLE</h3>
            <div className="filter-options">
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Casual')}
                  onChange={() => handleCategoryChange('Casual')}
                />
                Casual
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Elegant')}
                  onChange={() => handleCategoryChange('Elegant')}
                />
                Elegant
              </label>
            </div>
          </div>
          <div className="filter-section">
            <h3>Price Range: ₹{minPrice} - ₹{maxPrice}</h3>
            <div className="slider-container">
              <input
                type="range"
                min="600"
                max="4600"
                step="100"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <input
                type="range"
                min="600"
                max="4600"
                step="100"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>
          <div className="filter-section">
            <h3>Colors</h3>
            <div className="filter-options">
              <label>
                <input
                  type="checkbox"
                  checked={selectedColors.includes('Red')}
                  onChange={() => handleColorChange('Red')}
                />
                Red
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedColors.includes('Black')}
                  onChange={() => handleColorChange('Black')}
                />
                Black
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedColors.includes('White')}
                  onChange={() => handleColorChange('White')}
                />
                white
              </label>
              {/* Add more color options as needed */}
            </div>
          </div>
          <button onClick={handleApplyFilters}>Apply Filters</button>
        </div>
      )}
    </div>
    <div class="ant-dropdown-trigger TopControl--operGroup--vQmylGh">
        SORT BY
        <span role="img" aria-label="arrow-down" class="ubicon">
            
        </span>
        <div class="dropdown-content">
            <a href="#">New Arrivals</a>
            <a href="#">Recommended</a>
            <a href="#">Price: Low to High</a>
            <a href="#">Price: High to Low</a>
        </div>
    </div>
</div>
    <div><section className='bg-pd'>
      <div className="parent-div">
    <NavLink to="/some-path">
    <img className='g55' src="\images\g55.png" alt="description" />
    </NavLink>
    <FaHeart
  className='wishlist-icon1'
  style={{ color: heartColor,stroke: 'black' }}
  onClick={() => setHeartColor(heartColor === 'black' ? 'red' : 'black')}/>
    <h3 className='g55h3'>Blue net frock</h3>
    <p className='g55p'>₹600</p>
    </div>
    
  </section></div>

    </div>
    </>
  );
};

export default Pdgirls;