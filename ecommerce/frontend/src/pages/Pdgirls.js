//girls product page
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
const Pdgirls = () => {
  const [heartColor, setHeartColor] = useState('black');
  
  return (
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
    <div><section className='bg-pd'>
      <div className="parent-div">
    <NavLink to="/some-path">
    <img className='g55' src="\images\g55.png" alt="description" />
    </NavLink>
    <FaHeart
  className='wishlist-icon1'
  style={{ color: heartColor,stroke: 'black' }}
  onClick={() => setHeartColor(heartColor === 'black' ? 'red' : 'black')}
/>
    <h3 className='g55h3'>Blue net frock</h3>
    <p className='g55p'>₹600</p>
    </div>
    
  </section></div>

    </div>
  )
}

export default Pdgirls