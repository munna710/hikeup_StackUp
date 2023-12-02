import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
    createSubcategory,
    getASubcategory,
    resetState,
    updateASubcategory,
} from "../features/subcategory/subcategorySlice";
let schema = yup.object().shape({
    title: yup.string().required("Subcategory Name is Required"),
});
const AddSubcategory = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const getSubcatId = location.pathname.split("/")[3];
    const navigate = useNavigate();
    const newSubcategory = useSelector((state) => state.subcategory);
    const {
        isSuccess,
        isError,
        isLoading,
        createdSubcategory,
        subcategoryName,
        updatedSubcategory,
    } = newSubcategory;
    useEffect(() => {
        if (getSubcatId !== undefined) {
            dispatch(getASubcategory(getSubcatId));
        } else {
            dispatch(resetState());
        }
    }, [getSubcatId]);
    useEffect(() => {
        if (isSuccess && createdSubcategory) {
            toast.success("Subcategory Added Successfully!");
        }
        if (isSuccess && updatedSubcategory) {
            toast.success("Subcategory Updated Successfully!");
            navigate("/admin/list-subcategory");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: subcategoryName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (getSubcatId !== undefined) {
                const data = { id: getSubcatId, subcatData: values };
                dispatch(updateASubcategory(data));
                dispatch(resetState());
            } else {
                dispatch(createSubcategory(values));
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
                {getSubcatId !== undefined ? "Edit" : "Add"} Subcategory
            </h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Subcategory Name"
                        onChng={formik.handleChange("title")}
                        onBlr={formik.handleBlur("title")}
                        val={formik.values.title}
                        id="subcategory"
                    />
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        {getSubcatId !== undefined ? "Edit" : "Add"} Subcategory
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddSubcategory;
