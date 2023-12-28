import React from 'react';
import { FaSquareFacebook, FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
export const Footer = () => {
  return (
    <>
      <footer className='footer-strip'>
        <div className='col-auto'>
            <h2 className='cutAndNeedle7'>CUT_AND_NEEDLE</h2>
            </div>
        <div>
          <p className='pff'>FOLLOW US</p>
          <div className="social-icons">
            <NavLink to="/facebook">
              <FaSquareFacebook className="icon" style={{ fontSize: '44px' }}/>
            </NavLink>
            <NavLink to="/twitter">
              <FaSquareXTwitter className="icon" style={{ fontSize: '44px' }}/>
            </NavLink>
            <NavLink to="/instagram">
              <FaSquareInstagram className="icon" style={{ fontSize: '44px' }}/>
            </NavLink>
          </div>
        </div>
        <div><p> </p></div>
        <div>
          <NavLink to="/about">
            <p className='pff'>ABOUT US</p>
          </NavLink>
        </div>
        <div>
          <p className='pff'>
            <NavLink to="/contact">
              CONTACT US
            </NavLink>
          </p>
        </div>
        <div>
        <div>
          <p>© 2023 CUT_AND_NEEDLE. All rights reserved.</p>
        </div>
        <div className='developer'>
    Developed by HikeUp
  </div>
        </div>
      </footer>
    </>
  )
}


       
        
 

export default Footer;