import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <>
    <div className='ogin-wrapper py-5 home wrapper -2 d-flex align-items-center justify-content-center'>
        <div className='row'>
            <div className='col-12'>
                <div className='login-card'>
                    <h3 className='hlo'>Create Account</h3>
                     <form action=''>
                     <div>
                            <input type='text' name='First-name' placeholder='First Name' className='form-control'/>
                        </div>
                        <div><p></p></div>
                        <div>
                            <input type='text'name='last-name' placeholder='Last Name' className='form-control'/>
                        </div>
                        <div><p></p></div>
                        <div>
                            <input type='email'name='email' placeholder='email' className='form-control'/>
                        </div>
                        <div><p></p></div>
                        <div>
                            <input type='password' name='password' placeholder='password' className='form-control'/>
                        </div>
                        <div><p></p></div>
                        <div>
                        
                        <div className='d-flex'> 
                        <button className='button'>CREATE</button> 
                       
                        <Link to='/Login' className='button-signup'>CANCEL</Link>
                        </div>
                        </div>
                     </form>
                </div>

            </div>

        </div>
    </div>
    </>
  )
}

export default Signup