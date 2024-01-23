import React from "react";
import styles from "./navbar.module.css";
import profileIcon from "../../assets/3135715.png";
function Navbar() {
  const request = 0;
  return (
    <div className={styles.navbar}>
      <p className={styles.logo}>ProJobHire</p>
      <div
        style={{ marginRight: "4vw", paddingTop: "30px" }}
        className={styles.registration}
      >
        {request ? (
          <div style={{ display: "flex", gap: "25px" }}>
            <button
              style={{
                background: "transparent",
                color: "white",
              }}
            >
              Login
            </button>
            <button style={{ background: "white", color: "#e86066" }}>
              Register
            </button>
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
