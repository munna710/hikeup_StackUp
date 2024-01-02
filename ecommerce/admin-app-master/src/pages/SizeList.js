import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSizes, deleteASize,resetState } from '../features/size/sizeSlice';
import CustomModal from '../components/CustomModal';
import { Table } from 'antd';



import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];

const SizeList = () => {
  const [open, setOpen] = useState(false);
  const [sizeId, setSizeId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setSizeId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getSizes());

  }
  , []);
  const sizeState = useSelector((state) => state.size.sizes);
  const data1 = [];
  for (let i = 0; i < sizeState.length; i++) {
    data1.push({
      key: i + 1,
      name: sizeState[i].name,
      action: (
        <>
          <Link
            to={`/admin/size/${sizeState[i]._id}`}
            className=" fs-3 text-danger"
          >
           
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(sizeState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const deleteSize = (e) => {
    dispatch(deleteASize(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getSizes());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Product Sizes</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
       hideModal={hideModal}
       open={open}
       performAction={() => {
         deleteSize(sizeId);
       }}
       title="Are you sure you want to delete this brand?"
      />
    </div>
  );
};

export default SizeList;