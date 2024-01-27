import React from "react";
import JobForm from "../../components/jobform/JobForm";
import JobBanner from "../../components/banner/JobBanner";
function EditJob() {
  return (
    <div style={{ display: "flex" }}>
      <JobForm method={"Edit"} />
      <JobBanner method={"edit"} />
    </div>
  );
}

export default EditJob;
