import React from "react";
import styles from "./navbar.module.css";
import profileIcon from "../../assets/3135715.png";
import { Link } from "react-router-dom";
const linkstyle = {
  textDecoration: "none",
  color: "inherit",
};
function Navbar() {
  const request = 1;
  return (
    <div className={styles.navbar}>
      <a style={{ textDecoration: "none", color: "white" }} href="/">
        <p className={styles.logo}>ProJobHire</p>
      </a>
      <div
        style={{ marginRight: "4vw", paddingTop: "30px" }}
        className={styles.registration}
      >
        {request ? (
          <div style={{ display: "flex", gap: "25px" }}>
            <Link style={linkstyle} to="/login">
              <button
                style={{
                  background: "transparent",
                  color: "white",
                }}
              >
                Login
              </button>
            </Link>
            <Link style={linkstyle} to="/register">
              <button style={{ background: "white", color: "#e86066" }}>
                Register
              </button>
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "25px" }}>
            <button style={{ background: "transparent" }}>Logout</button>
            <div style={{ display: "flex", gap: "10px" }}>
              <p style={{ fontFamily: "var(--dmsans)", marginTop: "7px" }}>
                Hello Recruiter!
              </p>
              <img
                style={{ width: "33px", height: "33px", marginTop: "4px" }}
                src={profileIcon}
                alt="profileICon"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
