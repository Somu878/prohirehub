import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import profileIcon from "../../assets/3135715.png";
import { Link, useNavigate } from "react-router-dom";
import { getUserId } from "../../apis/auth";

const linkstyle = {
  textDecoration: "none",
  color: "inherit",
};

function Navbar() {
  const [user, setUser] = useState(null);
  const [login, setlogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setUser(null);
    setlogin(false);
    navigate("/login");
  };
  const fetchUserData = async () => {
    try {
      const response = await getUserId();
      if (response) {
        setUser(response);
        setlogin(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className={styles.navbar}>
      <a style={{ textDecoration: "none", color: "white" }} href="/">
        <p className={styles.logo}>ProHireHub</p>
      </a>
      <div
        style={{ marginRight: "4vw", paddingTop: "30px" }}
        className={styles.registration}
      >
        {loading ? (
          <p>Please wait! Fetching Data</p>
        ) : !token ? (
          <div style={{ display: "flex", gap: "25px" }}>
            <Link style={linkstyle} to="/login">
              <button style={{ background: "transparent", color: "white" }}>
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
            <button
              onClick={handleLogout}
              style={{ background: "transparent" }}
            >
              Logout
            </button>
            <div style={{ display: "flex", gap: "10px" }}>
              <p style={{ fontFamily: "var(--dmsans)", marginTop: "7px" }}>
                Hello, {user?.username}!
              </p>
              <img
                style={{ width: "33px", height: "33px", marginTop: "3px" }}
                src={profileIcon}
                alt="profileIcon"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
