import React, { useState } from "react";
import styles from "./jobTile.module.css";
import { Link } from "react-router-dom";
function JobTile({
  role,
  salary,
  type,
  location,
  logo,
  skills,
  access,
  city,
  jobid,
  companySize,
}) {
  const [select, setselect] = useState(false);
  const handleClick = () => {
    setselect(true);
  };
  return (
    <div
      className={`${styles.tile} ${select ? styles.selected : ""}`}
      onClick={handleClick}
    >
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "45px", height: "45px", margin: "30px" }}
          src={logo}
          alt="test"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "-15px",
            marginLeft: "5px",
          }}
        >
          <p
            style={{
              fontSize: "20px",
            }}
          >
            {role}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              fontSize: "16px",
              marginTop: "-20px",
            }}
          >
            <p>👥 {companySize}</p>
            <p>₹{salary}/month</p>
            <p>INDIA</p>
            <p>{city}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              marginTop: "-15px",
              color: "#ED5353",
            }}
          >
            <p>{location}</p>
            <p>{type}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "1px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            margin: "12px",
            marginBottom: "20px",
          }}
        >
          {skills?.map((item) => (
            <span
              style={{
                marginLeft: "10px ",
                background: "#FFEEEE",
                padding: "2px",
                fontSize: "15px",
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "10px",
          }}
        >
          {access ? (
            <Link to={`/editjob/${jobid}`}>
              <button style={{ color: "#ed5353" }}>Edit Job</button>
            </Link>
          ) : (
            ""
          )}
          <Link to={`/job-details/${jobid}`}>
            {" "}
            <button style={{ background: "#ed5353" }}>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobTile;
