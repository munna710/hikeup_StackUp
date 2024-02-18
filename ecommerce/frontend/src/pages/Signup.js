import React, { useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import './login.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/user/userSlice';

const signUpSchema = yup.object({
  firstname: yup.string().required('Required'),
  lastname: yup.string().required('Required'),
  mobile: yup.string().required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().min(8, 'Must be 8 characters or more').required('Required'),
});

const Signup = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(registerUser (values));
      resetForm();
    },
  });
  useEffect(() => {
          if(authState.createdUser !== null && authState.isSuccess === true){
          navigate('/login');
          } },[authState])
  return (
    <>
    <div className="container">
    <div className='login-wrapper py-5 home wrapper -2 d-flex align-items-center justify-content-center'>
        <div className='row'>
            <div className='col-12'>
                <div className='login-card border border-dark'>
                    <h3 className='text-center'>Create Account</h3>
                     <form onSubmit={formik.handleSubmit} >
                     <div>
                            <input 
                            type='text' 
                            id='firstname' 
                            placeholder='First Name' 
                            className='form-control'
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur('firstname')}

                            />
                            {formik.touched.firstname && formik.errors.firstname ? (
                            <div className='error'>{formik.errors.firstname}</div>
                            ) : null}
                        </div>
                        <div></div>
                        <div>
                            <input 
                            type='text'
                            id='lastname' 
                            placeholder='Last Name' 
                            className='form-control'
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur('lastname')}
                            
                            />
                            {formik.touched.lastname && formik.errors.lastname ? (
                            <div className='error'>{formik.errors.lastname}</div>
                            ) : null}
                      
                        </div>
                        <div></div>
                        <div>
                            <input 
                            type='email'
                            id='email' 
                            placeholder='email' 
                            className='form-control'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur("email")}
                            />
                            {formik.touched.email && formik.errors.email ? (
                            <div className='error'>{formik.errors.email}</div>
                            ) : null}
              
                        </div>
                        <div>
                            <input 
                            type='tel'
                            id='mobile' 
                            placeholder='mobile number' 
                            className='form-control'
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur("mobile")}
                            />
                            {formik.touched.mobile && formik.errors.mobile ? (
                            <div className='error'>{formik.errors.mobile}</div>
                            ) : null}
                        </div>

                        <div></div>
                        <div>
                        <input 
                          type='password' 
                          id='password' 
                          placeholder='password' 
                          className='form-control'
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur("password")}
                          />
                          {formik.touched.password && formik.errors.password ? (
                            <div className='error'>{formik.errors.password}</div>
                            ) : null}    
                        </div>
                        <div></div>
                        <div>

                        <div className='d-flex'> 
                        <button type='submit' className='btn btn-outline-dark me-2 mb-3 '>CREATE</button> 
                          <Link to='/Login' className='btn btn-outline-dark me-2 mb-3 '>CANCEL</Link>
                          </div>
                        </div>
                     </form>
                </div>

            </div>

        </div>
    </div>
    </div>
    </>
  )
}
export default Signup;