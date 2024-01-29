import React, { useState } from "react";
import styles from "./loginform.module.css";
import { LoginUser } from "../../apis/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginUser(loginData.email, loginData.password);
      if (response.status === "success") {
        toast.success(`Logged in as ${response.username}`);
        localStorage.setItem("token", response.token);
        localStorage.setItem("id", response.id);
        const check = localStorage.getItem("token");
        if (check) {
          navigate("/");
        }
      } else if (response.status === "invalid") {
        toast.error("Invalid Password");
      } else if (response.status === "not found") {
        toast.error("Email not found,Please register!");
        navigate("/register");
      }
    } catch (error) {
      toast.error("Please try again!");
      console.error("Login failed:", error);
    }
  };

  return (
    <div className={styles.login}>
      <p style={{ fontSize: "35px" }}>Already have an account?</p>
      <p style={{ marginTop: "-30px", fontSize: "16px", color: "#525252" }}>
        Your personal job finder is here
      </p>
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleInputChange}
          required
          spellCheck="false"
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
      </div>
      <button onClick={handleLogin}>Sign in</button>
      <p>
        Don’t have an account?{" "}
        <a style={{ color: "black" }} href="/register">
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default LoginForm;
