import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'
const Forgotpassword = () => {
  return (
    <section className="ftco-section">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap py-5">
              <h3 className="text-center mb-0">Reset password</h3>
              <p className="text-center">we will sent you an e-mail to reset password</p>
              <form action="#" className="login-form">
                <div className="form-group10">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-user"></span></div>
                  <input type="text" className="form-control frm" placeholder="Email" required />
                </div>
                
                
                <div className="form-group10">
                  <button type="submit" className="btn form-control btn-primary rounded submit px-3">SUBMIT</button>
                </div>
              </form>
              <div className="w-100 text-center mt-4 text">
                <p className="mb-0">Don't have an account?</p>
                <Link to="/Signup">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Forgotpassword