import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/Searchbar/SearchBar";
import JobTile from "../../components/jobtile/JobTile";
import { Toaster } from "react-hot-toast";
import { getUserId } from "../../apis/auth";
import { dataOnSearch } from "../../apis/job";
function Home() {
  const [data, setData] = useState(null);
  const [curUser, setcurUser] = useState(null);
  // const curUser = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const getId = async () => {
    try {
      const response = await getUserId();
      setcurUser(response.id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      getId();
    }
  });
  const getDataFromSearch = async (role, skills) => {
    try {
      const response = await dataOnSearch(role, skills);
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onSearch = (role, skills) => {
    getDataFromSearch(role, skills);
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <div style={{ position: "fixed", width: "100%", zIndex: "2" }}>
        {" "}
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "15vh",
        }}
      >
        <SearchBar loggedIn={curUser} onSearch={onSearch} />
      </div>

      {data &&
        data.map((item) => (
          <JobTile
            key={item._id}
            role={item.role}
            salary={item.salary}
            type={item.jobType}
            location={item.jobLocation}
            logo={item.companyLogoUrl}
            companySize={item.companySize}
            skills={item.skillsRequired}
            jobid={item._id}
            access={item.refUserId === curUser}
            joblocation={item.location}
          />
        ))}
    </div>
  );
}

export default Home;
