import React from "react";

const Color = (props) => {
  const { colorData,setColor } = props;

  return (
    <ul className="list-unstyled "style={{ display: 'inline-block' }}>
      {
        colorData && colorData.map((item, index) => {
          return (
            <li onClick={()=>setColor(item?._id)} className="d-inline-block" style={{ backgroundColor: item.title , width: '30px', height: '30px', }} key={index}></li>
          );
        })
      }
    </ul>
  );
};

export default Color;
