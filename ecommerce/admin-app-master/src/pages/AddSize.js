import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
    createSize,
    getASize,
    resetState,
    updateSize,
} from "../features/size/sizeSlice";

let schema = yup.object().shape({
    title: yup.string().required("Size Name is Required"),
});

const AddSize = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const sizeId = location.pathname.split("/")[3];
    const navigate = useNavigate();
    const newSize = useSelector((state) => state.size);
    const {
        isSuccess,
        isError,
        isLoading,
        createdSize,
        sizeName,
        updatedSize,
    } = newSize;

    useEffect(() => {
        if (sizeId !== undefined) {
            dispatch(getASize(sizeId));
        } else {
            dispatch(resetState());
        }
    }, [sizeId]);

    useEffect(() => {
        if (isSuccess && createdSize) {
            toast.success("Size Added Successfully!");
        }
        if (isSuccess && updatedSize) {
            toast.success("Size Updated Successfully!");
            navigate("/admin/list-size");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: sizeName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (sizeId !== undefined) {
                const data = { id: sizeId, SizeData: values };
                dispatch(updateSize(data));
                dispatch(resetState());
            } else {
                dispatch(createSize(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                }, 300);
            }
        },
    });

    return (
        <div>
            <h3 className="mb-4  title">
                {sizeId !== undefined ? "Edit" : "Add"} Size
            </h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Product Size"
                        onChng={formik.handleChange("title")}
                        onBlr={formik.handleBlur("title")}
                        val={formik.values.title}
                        id="brand"
                    />
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        {sizeId !== undefined ? "Edit" : "Add"} Size
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddSize;