import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
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
              <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: "url(https://img.freepik.com/premium-photo/cute-asian-girl-kawaii-anime-avatar-ai-generative-art_225753-12246.jpg)"}}></div>
              <h3 className="text-center mb-0">Welcome</h3>
              <p className="text-center">Sign in by entering the information below</p>
              <form action="#" className="login-form">
                <div className="form-group10">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-user"></span></div>
                  <input type="text" className="form-control frm" placeholder="Email" required />
                </div>
                <div className="form-group10">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
                  <input type="password" className="form-control frm" placeholder="Password" required />
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-100 text-md-right">
                    <Link to="/Forgotpassword">Forgot Password</Link>
                  </div>
                </div>
                <div className="form-group10">
                  <button type="submit" className="btn form-control btn-primary rounded submit px-3">Get Started</button>
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
  );
};

export default Login;