import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/Searchbar/searchBar";
import JobTile from "../../components/jobtile/JobTile";
import { Toaster } from "react-hot-toast";
import { getDataonMount, dataOnSearch } from "../../apis/job";
function Home() {
  const [data, setData] = useState(null);
  const curUser = localStorage.getItem("id");
  const getData = async () => {
    try {
      const response = await getDataonMount();
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
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

  useEffect(() => {
    getData();
  }, [curUser]);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SearchBar loggedIn={curUser} onSearch={onSearch} />
        </div>
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
