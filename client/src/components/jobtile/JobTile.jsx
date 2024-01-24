import React from "react";
import styles from "./jobTile.module.css";
function JobTile({
  role,
  salary,
  type,
  location,
  logo,
  skills,
  jobid,
  city,
  companySize,
}) {
  return (
    <div className={styles.tile}>
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
            <p>💵 {salary}</p>
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
          display: "flex",
          flexDirection: "column",
          marginTop: "1px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "40%",
          }}
        >
          {skills?.map((item) => (
            <p
              style={{
                marginLeft: "10px ",
                background: "#FFEEEE",
                padding: "3px",
                minWidth: "70px",
                maxWidth: "auto",
              }}
            >
              {item}
            </p>
          ))}
        </div>
        <div>
          <button>view details</button>
        </div>
      </div>
    </div>
  );
}

export default JobTile;
