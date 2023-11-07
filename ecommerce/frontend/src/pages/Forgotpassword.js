import React from 'react'
import { Link } from 'react-router-dom';
const Forgotpassword = () => {
  return (
    <div className='ogin-wrapper py-5 home wrapper -2 d-flex align-items-center justify-content-center'>
        <div className='row'>
            <div className='col-12'>
                <div className='login-card'>
                     
                    <h3 className='hlo'>Reset your Password</h3>
                    <div><p className='pfo'>we will send you an e-mail to reset your password </p></div>
                     <form action=''>
                        <div>
                            <input type='email'name='email' placeholder='email' className='form-control'/>
                        </div>
                        <div><p></p></div>
                        
                        <div><p></p></div>
                        <div>
                        
                        <div className='d-flex'> 
                        <button className='button' type='submit' >SUBMIT</button> 
                       
                        <Link to='/Login' className='button-signup'>CANCEL</Link>
                        </div>
                        </div>
                     </form>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Forgotpassword