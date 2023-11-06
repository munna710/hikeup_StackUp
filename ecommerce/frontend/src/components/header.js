import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsSearch, BsBag, BsPerson, BsHeart } from 'react-icons/bs';


const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [showWomenCategories, setShowWomenCategories] = useState(false);
  const [showAccessoriesCategories, setShowAccessoriesCategories] = useState(false);
  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
      <header className='header-top-strip'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white'>
                Free Shipping Over ₹600 and Free Returns
              </p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white'>
                Hotline: <a className='text-white' href='tel:+9845637321'>+9845637321</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className='header-main'>
        <div className='container-xxl'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-auto'>
              <h2 className='cutAndNeedle'>CUT_AND_NEEDLE</h2>
            </div>

            <div className='col-auto'>
              <div className='search-icon-container' onClick={toggleSearchBar}>
                <BsSearch className='search-icon-img' />
              </div>
              {isSearchVisible && (
                <div className='search-bar'>
                  <input type='text' placeholder='Search...' />
                  {/* Additional search bar content */}
                </div>
              )}
            </div>

            <div className='col-auto'>
              <nav className='navbar'>
                <div className='nav-container'>
                  <ul className='nav'>
                    <li className='nav-item'>
                      <NavLink to='/newin' className='nav-link' activeClassName='active-link'>
                        NEW IN
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink to='/express' className='nav-link' activeClassName='active-link'>
                        EXPRESS
                      </NavLink>
                    </li>
                    <li className='nav-item' onMouseEnter={() => setShowWomenCategories(true)} onMouseLeave={() => setShowWomenCategories(false)}>
                      <NavLink to='/women' className='nav-link women-link' activeClassName='active-link'>
                        WOMEN
                      </NavLink>
                      {showWomenCategories && (
                      <ul className='women-categories'>
                        <li><NavLink to='/women/casual' className='nav-link'>Casual</NavLink></li>
                        <li><NavLink to='/women/chic' className='nav-link'>Chic</NavLink></li>
                       {/* Add more categories as needed */}
                        </ul>
                        )}
                    </li>
                    <li className='nav-item'>
                      <NavLink to='/girls' className='nav-link' activeClassName='active-link'>
                        GIRLS
                      </NavLink>
                    </li>
                    <li className='nav-item' onMouseEnter={() => setShowAccessoriesCategories(true)} onMouseLeave={() => setShowAccessoriesCategories(false)}>
                      <NavLink to='/accessories' className='nav-link' activeClassName='active-link'>
                        ACCESSORIES
                      </NavLink>
                      {showAccessoriesCategories && (
                        <ul className='accessories-categories'>
                          <li><NavLink to='/accessories/scrunchies' className='nav-link'>Scrunchies</NavLink></li>
                          <li><NavLink to='/accessories/bags' className='nav-link'>Bags</NavLink></li>
                          {/* Add more categories as needed */}
                        </ul>
                      )}
                    </li>
                    <li className='nav-item'>
                      <NavLink to='/account' className='nav-link'>
                        <BsPerson className='account-icon' /> {/* Use BsPerson for account icon */}
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink to='/wishlist' className='nav-link'>
                        <BsHeart className='wishlist-icon' /> {/* Use BsHeart for wishlist icon */}
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink to='/bag' className='nav-link'>
                        <BsBag className='bag-icon' /> {/* Use BsBag for bag icon */}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
