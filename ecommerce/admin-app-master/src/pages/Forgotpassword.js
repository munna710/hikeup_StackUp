import React from 'react'
import CustomInput from "../components/CustomInput";
const Forgotpassword = () => {
  return (
    <div className="py-5" style={{ background: '#03030A', minHeight: "100vh" }}>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="my-5 w-25 bg-black rounded-3 mx-auto p-4"
     style={{ borderColor: '#1AC2C4', borderWidth: '4px', borderStyle: 'solid' }}>
      <h3 className="text-center title text-white">Forgot Password</h3>
      <p className="text-center text-white">Please Enter your register email to get reset password mail.</p>
      <form action="">
      <CustomInput
          type="text"
          label="Email Address"
          id="email"
          name="email"/>
       <button 
          className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5 mt-3  button"
          style={{ background: "#1AC2C4" }}
          type="submit"
        >
          SEND
        </button>
      </form>
  </div>
  </div>
  )
}

export default Forgotpassword