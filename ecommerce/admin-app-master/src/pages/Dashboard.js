import React, { useEffect, useState } from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { getMonthlyData, getOrders, getYearlyData } from "../features/auth/authSlice";

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
    title: "Product Count",
    dataIndex: "product",
  },
  {
    title: "Total Price",
    dataIndex: "price",
  },
  {
    title: "Total Price After Discount",
    dataIndex: "dprice",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const Dashboard = () => {
  const dispatch = useDispatch();
  const [monthlyData, setMonthlyData] = useState([]);
  const monthlyDataState = useSelector((state) => state?.auth?.monthlyData);
  const yearlyDataState = useSelector((state) => state?.auth?.yearlyData);
  const orderState = useSelector((state) => state?.auth?.orders?.orders);
  const [monthlyDataSales, setMonthlyDataSales] = useState([]);
  const [orderdData, setOrderedData] = useState([]);
  

  useEffect(() => {
    dispatch(getMonthlyData());
    dispatch(getYearlyData());
    dispatch(getOrders())
  }, []);
  
  useEffect(() => {
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    let data = [];
    let monthlyOrderCount = [];
    for(let index = 0; index < monthlyDataState?.length; index++){
      const element = monthlyDataState[index];
      // Use (element?._id?.month + 1) to account for zero-based months
      data.push({type: monthNames[element?._id?.month-1], income: element?.amount});
      monthlyOrderCount.push({type: monthNames[element?._id?.month-1], sales: element?.count});
    }

    // Set the transformed data in state
    setMonthlyData(data);
    setMonthlyDataSales(monthlyOrderCount);
    const data1 = [];
    for (let i = 0; i < orderState?.length; i++) {
      data1.push({
        key: i,
        name: orderState[i]?.user?.firstname + " "+ orderState[i]?.user?.lastname,
        product: orderState[i]?.orderItems?.length,
        price:orderState[i]?.totalPrice,
        dprice:orderState[i]?.totalPriceAfterDiscount,
        status: orderState[i]?.orderStatus,
      });
}
    setOrderedData(data1);
  }, [monthlyDataState]);


  console.log(monthlyDataState);
  console.log(monthlyData);
  console.log(orderState)
  // Rest of your component JSX

  // const data = [
  //   {
  //     type: "Jan",
  //     sales: 38,
  //   },
  //   {
  //     type: "Feb",
  //     sales: 52,
  //   },
  //   {
  //     type: "Mar",
  //     sales: 61,
  //   },
  //   {
  //     type: "Apr",
  //     sales: 145,
  //   },
  //   {
  //     type: "May",
  //     sales: 48,
  //   },
  //   {
  //     type: "Jun",
  //     sales: 38,
  //   },
  //   {
  //     type: "July",
  //     sales: 38,
  //   },
  //   {
  //     type: "Aug",
  //     sales: 38,
  //   },
  //   {
  //     type: "Sept",
  //     sales: 38,
  //   },
  //   {
  //     type: "Oct",
  //     sales: 38,
  //   },
  //   {
  //     type: "Nov",
  //     sales: 38,
  //   },
  //   {
  //     type: "Dec",
  //     sales: 38,
  //   },
  // ];
  const config = {
    data: monthlyData,
    xField: "type",
    yField: "income",
    color: ({ type }) => {
      return "#0f065c";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  const config2= {
    data: monthlyDataSales,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#0f065c";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "sales",
      },
    },
  };
  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total Income</p>
            <h4 className="mb-0 sub-title">₹{yearlyDataState && yearlyDataState[0]?.amount} </h4>
          </div>
          <div className="d-flex flex-column align-items-end">
           
            <p className="mb-0  desc">Yearly Total Income</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total Sales</p>
            <h4 className="mb-0 sub-title">{yearlyDataState && yearlyDataState[0]?.count} </h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            
            <p className="mb-0  desc">Yearly Total Sales</p>
          </div>
        </div>
        {/* <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowUpRight /> 32%
            </h6>
            <p className="mb-0 desc">Compared To April 2022</p>
          </div>
        </div> */}
      </div>
     <div className="d-flex justify-content-between gap-3">
     <div className="mt-4 flex-grow-1 w-50">
        <h3 className="mb-5 title">Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-4 flex-grow-1 w-50">
        <h3 className="mb-5 title">Sales Statics</h3>
        <div>
          <Column {...config2} />
        </div>
      </div>

     </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={orderdData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;