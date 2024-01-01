import React from 'react';
import './blogcard.css';

const Blogcard = ({ blog }) => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>
      <div className='blog-card'> 
        <div className='card-image'>
          <img src={blog.image} alt='Blog Image' className='img-fluid' />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{blog.title}</h5>
          <p className='card-text'>{blog.text}</p>
          <a href={blog.link} className='btn btn-outline-dark me-2'>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Blogcard;