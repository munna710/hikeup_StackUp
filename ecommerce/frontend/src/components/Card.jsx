import React from 'react';

export default function Card({ imgSrc, children, className }) {
  return (
    <div className={`card ${className}`}>
      <img
        className="card-img-top object-cover transition duration-500 ease-out transform"
        src={imgSrc}
        alt=""
      />
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}
