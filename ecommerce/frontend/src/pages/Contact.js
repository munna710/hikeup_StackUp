import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {BiPhoneCall} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { createQuery } from '../features/contacts/contactSlice';


const Contact = () => {
  const dispatch = useDispatch();
  const contactSchema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup.string().nullable().email("Email should be valid.").required("Email is Required"),
    mobile: yup.string().default("").nullable().required("Mobile Number is Required."),
    comment: yup.string().default("").nullable().required("Comment is Required.")
});
  const formik = useFormik({
    initialValues: {
        name: '',
        mobile: '',
        email: '',
        comment:''
    },
    validationSchema: contactSchema,
    onSubmit: values => {
      dispatch(createQuery (values));
     
    },
});

  return (
    <>
    <div className=''>
    <div className='container-xxl shadow p-3 mb-5 bg-body rounded'>
    <div className='row'>
    <div className=' container-fluid col-12 bg-dark d-flex justify-content-center mb-3'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62651.020615123176!2d76.02719185828745!3d11.061943149026414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64a9be29b058f%3A0x23e371e0d4c30d8e!2sMalappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1699460265667!5m2!1sen!2sin" 
      width="800" 
      height="450" 
      style={{border: '0'}} 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
      <div className="container">
      <div className="row">
      <div className='col-6 '> 
      <div className='d-flex justify-content-between'> 
      <div > 
      <h3 className='contact-title mb-4' >Contact</h3>
      <form onSubmit={formik.handleSubmit} className=' '>
      <div>
  <input type='text' className='form-control ' placeholder='Name'
    name='name'
    value={formik.values.name}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur('name')}
  />
  {formik.touched.name && formik.errors.name ? (
    <div className='error'>{formik.errors.name}</div>
  ) : null}
</div>
<div><p></p></div>
<div>
  <input type='email' className='form-control ' placeholder='Email' 
    name='email'
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur('email')}
  />
  {formik.touched.email && formik.errors.email? (
    <div className='error'>{formik.errors.email}</div>
  ) : null}
</div>
<div><p></p></div>
<div>
  <input type='tel' className='form-control ' placeholder='Mobile'
    name='mobile'
    value={formik.values.mobile}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur('mobile')}
  />
  {formik.touched.mobile && formik.errors.mobile? (
    <div className='error'>{formik.errors.mobile}</div>
  ) : null}
</div>
<div><p></p></div>
<div>
  <textarea  className='form-control' cols='30' rows='4' placeholder='Comments'
    name='comment'
    value={formik.values.comment}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur('comment')}
  ></textarea>
  {formik.touched.comment && formik.errors.comment? (
    <div className='error'>{formik.errors.comment}</div>
  ) : null}
</div>
        <div>
          <button type='submit' className='btn btn-outline-dark me-2'>Submit</button>
        </div>
        
      </form>
      </div>
      </div>
      </div>
      <div className='col-6' > 
      <h3 className='contact-title mb-4' >Get in touch with us</h3>
      <div className='d-flex justify-content-between'>
        <ul className='ps-3 no-bullets'>
        <li className='mb-4 custom-li'>
        <div className='icon-content'>
      <AiOutlineHome className='fs-5' />
      <span className='ps-3 text-content'>ABC INDIA</span>
      </div>
        </li>
          <li className='mb-4 '><BiPhoneCall className='fs-5'/>
          <a className='ps-3 text-content' href='tel:123456789'>+123456789</a></li>
          <li className='mb-4 '>
            <AiOutlineMail className='fs-5'/>
            <a className='ps-3 text-content' href='mailto:abc@gmail.com'>abc@gmail.com</a>
          </li>
          <li className='mb-4 '>
            <AiOutlineInfoCircle className='fs-5'/>
            <span className=' ps-3 text-content1'>Monday - Friday 10 AM - 8 PM</span>
            </li>
        </ul>
      </div>
      </div>
      
      </div>
      </div>
      </div>
      </div>
      </div>
      
      


    </>
  )
}

export default Contact