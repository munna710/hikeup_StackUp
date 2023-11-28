import React from 'react'
import CustomInput from "../components/CustomInput";
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
        <h3 className="text-center title text-white">Login</h3>
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
         <button 
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5 mt-3  button"
            style={{ background: "#1AC2C4" }}
            type="submit"
          >
            Login
          </button>
        </form>
    </div>
    </div>
  )    
}

export default Login