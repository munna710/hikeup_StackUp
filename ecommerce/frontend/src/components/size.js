import React from "react";

const Size = ({ sizeData, setSize }) => {
  const handleSizeClick = (sizeId) => {
    setSize(sizeId);
  };

  return (
    <ul className="list-unstyled" style={{ display: 'inline-block' }}>
      {sizeData && sizeData.map((item, index) => (
        <li
          key={index}
          className='btn btn-outline-dark me-2 h1'
          onClick={() => handleSizeClick(item._id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Size;
