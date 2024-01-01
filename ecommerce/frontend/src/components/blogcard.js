// Blogcard.js
import React from 'react';
import './blogcard.css';

const Blogcard = ({ blog }) => {
  return (
    <div className='container'>
      <div className='blog-card' style={{ width: '100%' }}>
        <div className='card-image'>
          <img src={blog.image} alt='Blog Image' className='img-fluid w-100 blog-card-image' />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{blog.title}</h5>
          <p className='card-text'>{blog.text}</p>
          <a href={blog.link} className='btn btn-outline-dark me-2'>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default Blogcard;
