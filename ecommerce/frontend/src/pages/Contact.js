//contact us page
import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {BiPhoneCall} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineInfoCircle} from 'react-icons/ai';
const Contact = () => {
  return (
    <>
    <div className='contact-wrapper'></div>
    <div className='container-xxl'></div>
    <div className='row'></div>
    <div className='col-12'style={{display: 'flex', justifyContent: 'center'}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62651.020615123176!2d76.02719185828745!3d11.061943149026414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64a9be29b058f%3A0x23e371e0d4c30d8e!2sMalappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1699460265667!5m2!1sen!2sin" 
      width="800" 
      height="450" 
      style={{border: '0'}} 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
      <div className='col-12 mt-5'> 
      <div className='contact-inner-wrapper d-flex justify-content-between'> 
      <div > 
      <h3 className='contact-title mb-4' >Contact</h3>
      <form action='' className=' '>
        <div>
        <input type='text' className='form-control custom-input' placeholder='Name'/>
        </div>
        <div><p></p></div>
        <div>
        <input type='email' className='form-control custom-input' placeholder='Email' />
        </div>
        <div><p></p></div>
        <div>
        <input type='tel' className='form-control custom-input' placeholder='Mobile'/>
        </div>
        <div><p></p></div>
        <div>
        <textarea name='' id='' className='form-control' cols='30' rows='4' placeholder='Comments'></textarea>
        </div>
        <div>
          <button className='button border-0'>Submit</button>
        </div>
      </form>
      </div>
      <div > 
      <h3 className='contact-description' >Get in touch with us</h3>
      <div>
        <ul className='ps-0 no-bullets'>
        <li className='mb-4 custom-li'>
        <div className='icon-content'>
      <AiOutlineHome className='fs-5' />
      <span className='text-content'>ABC INDIA</span>
      </div>
        </li>
          <li className='mb-4 '><BiPhoneCall className='fs-5'/>
          <a className='text-content' href='tel:123456789'>+123456789</a></li>
          <li className='mb-4 '>
            <AiOutlineMail className='fs-5'/>
            <a className='text-content' href='mailto:abc@gmail.com'>abc@gmail.com</a>
          </li>
          <li className='mb-4 '>
            <AiOutlineInfoCircle className='fs-5'/>
            <p className='text-content1'>Monday - Friday 10 AM - 8 PM</p>
            </li>
        </ul>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Contact