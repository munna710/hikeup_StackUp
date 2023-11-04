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
        <div className="landingPage">
          <section className="rectangleParent" />
          <img
            className="cutAndNeedleLogo1"
            alt="logo"
            src="/cut-and-needle-logo-1@2x.png"
          />
          <header className='newInParent'>
            <div className='newIn'>NEW IN</div>
            <div className='express'>EXPRESS</div>
            <div className='girls'>GIRLS</div>
            <div className='women'>WOMEN</div>
            <div className='accessories'>ACCESSORIES</div>
            <img className='accountIcon' alt="" src="/account@2x.png" />
            <img className='wishlistIcon' alt="" src="/wishlist@2x.png" />
            <div className='searchParent'>
              <div className='search'>Search</div>
              <img className='searchicIcon' alt="" src="/searchic@2x.png" />
              <div className='searchbar' />
            </div>
            <img className='phbagThinIcon' alt="" src="/phbagthin.svg" />
            <h2 className='cutAndNeedle'>CUT_AND_NEEDLE</h2>
          </header>
        </div>
      </header>
    </>
  );
}

export default Header;
