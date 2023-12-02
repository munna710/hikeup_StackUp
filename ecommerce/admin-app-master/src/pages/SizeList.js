import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSizes, deleteSize, resetState } from '../features/size/sizeSlice';
import CustomModal from '../components/CustomModal';
import { Table } from 'antd';
import { toast } from 'react-toastify';

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
  const { sizes, isSuccess, isError, errorMessage } = useSelector((state) => state.size);

  useEffect(() => {
    dispatch(getSizes());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      toast.success('Size deleted successfully');
      dispatch(resetState());
    }
    if (isError) {
      toast.error(errorMessage);
      dispatch(resetState());
    }
  }, [isSuccess, isError, errorMessage, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteSize(id));
  };

  return (
    <div>
      <h3 className="mb-4 title">Product Sizes</h3>
      <div>
        <Table columns={columns} dataSource={sizes} />
      </div>
      <CustomModal
        open={open}
        hideModal={hideModal}
        performAction={() => {
          handleDelete(sizeId);
        }}
        title="Are you sure you want to delete this Product Size?"
      />
    </div>
  );
};

export default SizeList;