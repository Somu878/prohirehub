import React from "react";
import Banner from "../../components/banner/Banner";
import RegisterForm from "../../components/registerForm/RegisterForm";

function Register() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "54%" }}>
        <RegisterForm />
      </div>
      <Banner />
    </div>
  );
}

export default Register;
