import React from "react";
import styles from "./loginform.module.css";
function LoginForm() {
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
          required
          spellCheck="false"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <button>Sign in</button>
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
