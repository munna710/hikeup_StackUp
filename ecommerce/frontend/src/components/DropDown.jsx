import React from 'react';
import clsx from 'clsx';

export default function DropDown({ children, className, ...props }) {
  return (
    <div
      className={clsx(
        'dropdown', // Bootstrap class for dropdown container
        'position-absolute top-0 start-0', // Bootstrap class for positioning
        'bg-white text-sm list-unstyled', // Bootstrap classes for styling
        'rounded shadow-lg my-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Select({ children, className, ...props }) {
  return (
    <ul
      className={clsx(
        'dropdown-menu', // Bootstrap class for dropdown menu
        'py-1',
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
}

export function Option({ children, className, ...props }) {
  return (
    <li
      className={clsx(
        'dropdown-item', // Bootstrap class for dropdown item
        'hover:bg-gray-100 text-gray-700 block px-4 py-2 truncate cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
}
