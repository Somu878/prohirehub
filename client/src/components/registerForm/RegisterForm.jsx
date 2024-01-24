import React, { useState } from "react";
import styles from "./form.module.css";
import { registerUser } from "../../apis/auth";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(
        registerData.name,
        registerData.email,
        registerData.mobileNumber,
        registerData.password
      );
      if (response.data.message === "Registration successful!") {
        navigate("/");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <div className={styles.register}>
      <form onSubmit={handleSubmit}>
        <p style={{ fontSize: "38px" }}>Create an account</p>
        <p style={{ marginTop: "-35px", fontSize: "16px", color: "#525252" }}>
          Your personal job finder is here
        </p>
        <div
          className={styles.inputContainer}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            spellCheck="false"
            value={registerData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            spellCheck="false"
            value={registerData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile"
            required
            spellCheck="false"
            value={registerData.mobileNumber}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={registerData.password}
            onChange={handleInputChange}
          />
        </div>
        <input
          style={{ width: "15px", height: "15px" }}
          type="checkbox"
          name="check"
          required
        />
        <span style={{ fontSize: "15px", color: "#525252" }}>
          By creating an account, I agree to our terms of use and privacy policy
        </span>{" "}
        <br />
        <button type="submit">Create account</button>
      </form>
      <p>
        Already have an account?{" "}
        <span>
          <a style={{ color: "black" }} href="/login">
            Login
          </a>
        </span>
      </p>
    </div>
  );
}

export default RegisterForm;
