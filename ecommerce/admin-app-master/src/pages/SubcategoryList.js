import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    deleteASubcategory,
    getSubcategories,
    resetState,
} from "../features/subcategory/subcategorySlice";
import CustomModal from "../components/CustomModal";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
        sorter: (a, b) => a.name.length - b.name.length,
    },

    {
        title: "Action",
        dataIndex: "action",
    },
];

const SubcategoryList = () => {
    const [open, setOpen] = useState(false);
    const [subCatId, setSubCatId] = useState("");
    const showModal = (e) => {
        setOpen(true);
        setSubCatId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetState());
        dispatch(getSubcategories());
    }, []);
    const subCatStat = useSelector((state) => state.subcategory.subcategories);
    const data1 = [];
    for (let i = 0; i < subCatStat.length; i++) {
        data1.push({
            key: i + 1,
            name: subCatStat[i].title,
            action: (
                <>
                    <Link
                        to={`/admin/subcategory/${subCatStat[i]._id}`}
                        className=" fs-3 text-danger"
                    >
                        <BiEdit />
                    </Link>
                    <button
                        className="ms-3 fs-3 text-danger bg-transparent border-0"
                        onClick={() => showModal(subCatStat[i]._id)}
                    >
                        <AiFillDelete />
                    </button>
                </>
            ),
        });
    }
    const deleteSubcategory = (e) => {
        dispatch(deleteASubcategory(e));
        setOpen(false);
        setTimeout(() => {
            dispatch(getSubcategories());
        }, 100);
    };
    return (
        <div>
            <h3 className="mb-4 title">Subcategories</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                hideModal={hideModal}
                open={open}
                performAction={() => {
                    deleteSubcategory(subCatId);
                }}
                title="Are you sure you want to delete this Subcategory?"
            />
        </div>
    );
};

export default SubcategoryList;