import React from 'react'
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  return (
    <div className="py-5" style={{ background: '#03030A', minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-black rounded-3 mx-auto p-4"
       style={{ borderColor: '#1AC2C4', borderWidth: '4px', borderStyle: 'solid' }}>
        <h3 className="text-center title text-white">LOGIN</h3>
        <p className="text-center text-white">Login to your account to continue.</p>
        <form action="">
        <CustomInput
            type="text"
            label="Email Address"
            id="email"
            name="email"/>
        <CustomInput
            type="password"
            label="Password"
            id="pass"
            name="password"/>
        <div className="mb-2 text-end" style={{marginTop: '1rem'}}>
            <Link to="forgot-password" className="">
              Forgot Password?
            </Link>
        </div>
        <Link to="/admin">
         <button 
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5 mt-3  button"
            style={{ background: "#1AC2C4" }}
            type="submit"
          >
            Login
          </button>
          </Link>
        </form>
    </div>
    </div>
  )    
}

export default Login