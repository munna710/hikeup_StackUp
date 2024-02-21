// Blogcard.js
import React from 'react';
import './blogcard.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Blogcard = (props) => {
  const {id,title,description,image,date} = props;

  return (
    <div className='container'>
      <div className='blog-card' style={{ width: '100%' }}>
        <div className='card-image'>
          <img src={image} alt='Blog Image' className='img-fluid w-100 blog-card-image' />
        </div>
        <div className='card-body'>
          <p className='date'>{date}</p>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text' dangerouslySetInnerHTML={{ __html: description }} />
          <Link to={`/Blog/${id}`} className='btn btn-outline-dark me-2'>Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default Blogcard;
