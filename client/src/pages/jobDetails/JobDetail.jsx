import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Details from "../../components/jobdetails/Details";

function JobDetail() {
  return (
    <div
      style={{
        backgroundColor: "#FFEFEF",
        height: "auto",
        paddingBottom: "50px",
      }}
    >
      <div>
        <Navbar />
      </div>
      <div style={{ marginLeft: "15vw", marginTop: "-25px" }}>
        <Details />
      </div>
    </div>
  );
}

export default JobDetail;
