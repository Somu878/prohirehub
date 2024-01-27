import React from "react";
import styles from "./banner.module.css";
function JobBanner({ method }) {
  return (
    <div className={styles.container2}>
      <p>Recruiter {method} job details here</p>
    </div>
  );
}

export default JobBanner;
