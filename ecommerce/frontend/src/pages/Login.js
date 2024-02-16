import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'; 
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import './login.css';

const loginSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().required('password is Required'),
});

const Login = () => { 
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        dispatch(loginUser (values));
        if (authState.isSuccess) {
          navigate('/');
      }
      },
    });
    useEffect(() => {
      if (authState.isSuccess) {
          navigate('/');
      }
  }, [authState.isSuccess]);
      return (
          <div className="container bg-dark">
            <div className='login-wrapper py-5 home wrapper -2 d-flex align-items-center justify-content-center'>
              <div className='row'>
                  <div className='col-12'>
                <div className='login-card'>
                    <h3 className='text-center'>LOGIN</h3>
                     <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input type='email'
                            id ='email' 
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
                              <input type='password' 
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
                            
                            <div className='forgot-password'>
                            <Link to='/Forgotpassword'>Forgot Password?</Link>
                            <div className='d-flex'> 
                            <button type='submit' className='btn btn-outline-dark me-2 mb-3'>LOGIN</button> 

                            <Link to='/Signup' className='btn btn-outline-dark me-2 mb-3'>SIGNUP</Link>
                        </div>
                        </div>
                     </form>
                </div>

            </div>

        </div>
    </div>
    </div>

  )
}

export default Login