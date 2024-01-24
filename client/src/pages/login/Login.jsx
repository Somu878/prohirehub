import React from "react";
import Banner from "../../components/banner/Banner";
import styles from "../../components/registerForm/form.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
function Login() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "54%" }}>
        <LoginForm />
      </div>
      <Banner />
    </div>
  );
}

export default Login;
