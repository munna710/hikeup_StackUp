import React from 'react';
import CustomInput from '../components/CustomInput';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';

let schema = yup.object().shape({
  email: yup.string().email('Email should be valid').required('Email is Required'),
  password: yup.string().required('Password is Required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const authState = useSelector((state) => state);
  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  React.useEffect(() => {
    if (isSuccess) {
      navigate('admin');
    } else {
      navigate('');
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <div className="py-5" style={{ background: '#03030A', minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        className="my-5 w-25 bg-black rounded-3 mx-auto p-4"
        style={{ borderColor: '#1AC2C4', borderWidth: '4px', borderStyle: 'solid' }}
      >
        <h3 className="text-center title text-white">LOGIN</h3>
        <p className="text-center text-white">Login to your account to continue.</p>
        <div className="error text-center">
          {message.message === 'Rejected' ? 'You are not an Admin' : ''}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Email Address"
            id="email"
            name="email"
            onChng={formik.handleChange('email')}
            onBlr={formik.handleBlur('email')}
            val={formik.values.email}
          />
          <div className="error mt-2">{formik.touched.email && formik.errors.email}</div>
          <CustomInput
            type="password"
            label="Password"
            id="pass"
            name="password"
            onChng={formik.handleChange('password')}
            onBlr={formik.handleBlur('password')}
            val={formik.values.password}
          />
          <div className="error mt-2">{formik.touched.password && formik.errors.password}</div>
          <div className="mb-2 text-end" style={{ marginTop: '1rem' }}>
            <Link to="forgot-password" className="">
              Forgot Password?
            </Link>
          </div>
          <Link to="/admin">
            <button
              className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5 mt-3  button"
              style={{ background: '#1AC2C4' }}
              type="submit"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
