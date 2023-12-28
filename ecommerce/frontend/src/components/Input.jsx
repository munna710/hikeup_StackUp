import React from 'react';

export default function Input({ icon, className, ...props }) {
  const input = (
    <input
      type="text"
      className={`form-control ${props.disabled ? 'text-gray-600 bg-gray-200' : ''} ${className}`}
      {...props}
    />
  );

  if (icon) {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">{icon}</span>
        </div>
        {input}
      </div>
    );
  } else {
    return input;
  }
}
