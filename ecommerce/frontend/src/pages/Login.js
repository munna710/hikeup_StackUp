import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
const Login = () => { 
  return (
    <div className='ogin-wrapper py-5 home wrapper -2 d-flex align-items-center justify-content-center'>
        <div className='row'>
            <div className='col-12'>
                <div className='login-card'>
                    <h3 className='hlo'>LOGIN</h3>
                     <form action=''>
                        <div>
                            <input type='email'name='email' placeholder='email' className='form-control'/>
                        </div>
                        <div><p></p></div>
                        <div>
                            <input type='password' name='password' placeholder='password' className='form-control'/>
                        </div>
                        <div><p></p></div>
                        <div>
                        <Link to='/Forgotpassword'>Forgot Password?</Link>
                        <div className='d-flex'> 
                        <button className='button'>LOGIN</button> 
                       
                        <Link to='/Signup' className='button-signup'>SIGNUP</Link>
                        </div>
                        </div>
                     </form>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Login