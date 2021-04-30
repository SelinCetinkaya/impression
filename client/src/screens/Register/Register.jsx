import React from "react";
import SignUp from "../../components/SignUp/SignUp";

function Register(props) {
  return (
    <div className="register-screen">
      <h3>Sign up to start sharing</h3>
      <div className="register-form">
        <SignUp />
      </div>
      <img alt="nature" src="https://i.imgur.com/SPvqFJd.jpg" />
    </div>
  );
}

export default Register;
