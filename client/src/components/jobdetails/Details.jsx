import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./details.module.css";
import arrow from "../../assets/arrow-left-55.svg";
import { getJobData } from "../../apis/job";
function Details() {
  const { id } = useParams();
  const userid = localStorage.getItem("id");
  const [data, setdata] = useState();
  const navigate = useNavigate();
  async function getJobDetails() {
    try {
      const response = await getJobData(id);
      setdata(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getJobDetails();
  }, []);
  return (
    <div>
      <div className={styles.titleContainer}>
        <img onClick={() => navigate("/")} src={arrow} alt="arrow" />
        <p style={{ fontSize: "20px" }}>
          {data?.role} Job/Internship at {data?.company}
        </p>
      </div>
      <div className={styles.detailsContainer}>
        <div
          style={{
            display: "flex",
            gap: "30px",
            paddingTop: "15px",
            paddingLeft: "3vw",
            color: "#595959",
          }}
        >
          <p>1w ago</p>

          <p>{data?.jobType}</p>
          <img
            src={data?.companyLogoUrl}
            style={{ width: "40px", height: "40px", marginTop: "5px" }}
            alt="image"
          />
          {userid == data?.refUserId ? (
            <Link to={`/editjob/${id}`}>
              <button className={styles.editbtn}>Edit</button>
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.title}>
          <p style={{ fontSize: "40px" }}>{data?.role}</p>

          <p style={{ marginTop: "-15px", color: "#ED5353" }}>
            {data?.location} | India
          </p>

          {/* <img src={data?.companyLogoUrl} alt="logo" width={20} height={20} /> */}
        </div>
        <div className={styles.salary} style={{ display: "flex", gap: "50px" }}>
          <div>
            <p style={{ fontSize: "18px" }}>💵 Salary/Stipend</p>
            <p style={{ color: "#595959" }}>{data?.salary}/month</p>
          </div>
          <div>
            <p style={{ fontSize: "18px" }}>💻Work Mode</p>
            <p style={{ color: "#595959" }}>{data?.jobLocation}</p>
          </div>
        </div>
        <div className={styles.aboutcompany}>
          <p style={{ fontSize: "20px" }}>About Comapany</p>
          <p style={{ color: "#595959" }}>{data?.aboutCompany}</p>
        </div>
        <div className={styles.aboutjob}>
          <p style={{ fontSize: "18px" }}>About Job/Internship</p>
          <p style={{ color: "#595959" }}>{data?.jobDescription}</p>
        </div>
        <div className={styles.skills}>
          <p style={{ fontSize: "18px" }}>Skill(s) Required</p>
          <div className={styles.items}>
            {data?.skillsRequired.map((item) => (
              <p
                style={{
                  background: "#FFEEEE",
                  padding: "3px",
                  color: "#595959",
                  borderRadius: "10px",
                }}
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.addinfo}>
          <p style={{ fontSize: "18px" }}>Additional Information</p>
          <p style={{ color: "#595959" }}>{data?.otherinfo}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
