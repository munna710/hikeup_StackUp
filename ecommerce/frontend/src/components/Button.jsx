import React from 'react';

export default function Button({ className, children, link, secondary, light, ...props }) {
  return (
    <button
      className={`btn ${secondary ? 'btn-secondary' : 'btn-primary'} ${light ? 'btn-light' : ''} ${link ? 'btn-link' : ''} ${props.disabled ? 'disabled' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
