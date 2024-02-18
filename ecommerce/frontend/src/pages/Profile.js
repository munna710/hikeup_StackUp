import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/user/userSlice';
import {FiEdit} from 'react-icons/fi'
import { Link } from 'react-router-dom';

const profileSchema = yup.object({
    firstname: yup.string().required('Required'),
    lastname: yup.string().required('Required'),
    mobile: yup.string().required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),

  });
const Profile = () => {
  const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

  const config2 = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
 
  },
};
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.auth.user);
    const [edit,setEdit] = useState(true)
  const formik = useFormik({
    enableReinitialize : true,
    initialValues: {
      firstname: userState?.firstname,
      lastname: userState?.lastname,
      email: userState?.email,
      mobile: userState?.mobile,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
    //   dispatch(registerUser (values));
        dispatch(updateProfile({data:values,config2:config2}));
        setEdit(true)
    },
  });
  return (
    <>
    <div className='container  text-light'>
        <div className="row bg-dark">
            <div className='col-12'>
                <div className='d-flex justify-content-between align items center mb-3 pt-3 border-bottom '>
                    <h3 className='my-3'>My Profile</h3>
                    <FiEdit className='fs-3' onClick={()=>setEdit(false)}/>
                </div>
            <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="example1" className="form-label">First Name</label>
                    <input type="text" name='firstname' className="form-control" disabled={edit} id="example1"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur('firstname')}/>
                    {formik.touched.firstname && formik.errors.firstname ? (
                            <div className='error'>{formik.errors.firstname}</div>
                            ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="example2" className="form-label">Last Name</label>
                    <input type="text" name='lastname' className="form-control" disabled={edit} id="example2"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur('lastname')}
                    />
                    {formik.touched.lastname && formik.errors.lastname ? (
                            <div className='error'>{formik.errors.lastname}</div>
                            ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" disabled={edit} id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                            <div className='error'>{formik.errors.email}</div>
                            ) : null}
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputmobile" className="form-label">Mobile  Number</label>
                    <input type="number" name='mobile' className="form-control" disabled={edit} id="exampleInputmobile" aria-describedby="emailHelp"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur("mobile")}
                    />
                   {formik.touched.mobile && formik.errors.mobile ? (
                            <div className='error'>{formik.errors.mobile}</div>
                            ) : null}
                </div>
               {
                 edit===false &&  <button type="submit" className="btn btn-outline-light mb-3">Save</button>

               }
                </form>
            </div>

    </div>
    <div className="row bg-secondary border-top border-light border-5 border-bottom">
        <div className='col-12'>
            <div className='row'>
                <Link to='/orders' className='no-underline'>
                <div className='border-bottom my-4 d-flex align-items-center text-white'>
                    <h3>My Orders</h3>
                </div>
                </Link>
                <Link to="/Wishlist" className='no-underline'>
                <div className='  my-4 d-flex align-items-center  text-white '>
                <h3 className='me-2 '>My Wishlist</h3>
                </div>
                </Link>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile