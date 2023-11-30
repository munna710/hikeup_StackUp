import React, { useEffect, useState } from "react";

import { Table } from "antd";


const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Staus",
    dataIndex: "status",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const Enquiries = () => {
  
  return (
    <div>
      <h3 className="mb-4 title">Enquiries</h3>
    
     
    </div>
  );
};

export default Enquiries;