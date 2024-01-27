import React from "react";
import JobForm from "../../components/jobform/JobForm";
import JobBanner from "../../components/banner/JobBanner";

function PostJob() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <JobForm method={"Add"} />
      <JobBanner method={"add"} />
    </div>
  );
}

export default PostJob;
