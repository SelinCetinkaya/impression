import React from "react";
import "./Register.css";
import SignUp from "../../components/SignUp/SignUp";

function Register(props) {
  return (
    <>
      <div className="register-screen">
        {/* <div className="register-form"> */}
        <SignUp />
        {/* </div> */}
        <img
          id="sign-up-image"
          alt="nature"
          src="https://i.imgur.com/SPvqFJd.jpg"
        />
      </div>
    </>
  );
}

export default Register;
