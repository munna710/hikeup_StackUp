import React from 'react'
import CustomInput from "../components/CustomInput";
const Resetpassword = () => {
  return (
    <div className="py-5" style={{ background: '#03030A', minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-black rounded-3 mx-auto p-4"
       style={{ borderColor: '#1AC2C4', borderWidth: '4px', borderStyle: 'solid' }}>
        <h3 className="text-center title text-white">Reset Password</h3>
        <p className="text-center text-white">Please Enter your new password.</p>
        <form action="">
        <CustomInput
            type="password"
            label="New Password"
            id="pass"
            name="password"/>
        <CustomInput
            type="password"
            label="Confirm Password"
            id="confirmpass"
            name="password"/>
         <button 
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5 mt-3  button"
            style={{ background: "#1AC2C4" }}
            type="submit"
          >
            Reset password
          </button>
        </form>
    </div>
    </div>
  )
}

export default Resetpassword