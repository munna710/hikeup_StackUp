import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
        <div> <h2 className='cutAndNeedle'>CUT_AND_NEEDLE</h2></div>
        <nav className='navbar'>
        <div className='container-xxl'>
          <ul className='nav'>
            <li className='nav-item'>
              <NavLink to='/newin' className='nav-link' activeClassName='active-link'>
                New In
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/express' className='nav-link' activeClassName='active-link'>
                Express
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/girls' className='nav-link' activeClassName='active-link'>
                Girls
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/women' className='nav-link' activeClassName='active-link'>
                Women
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/accessories' className='nav-link' activeClassName='active-link'>
                Accessories
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      
    
    </>
  );
}

export default Header;
