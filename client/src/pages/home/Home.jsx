import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/Searchbar/searchBar";
import JobTile from "../../components/jobtile/JobTile";
import { Toaster } from "react-hot-toast";
import { getDataonMount } from "../../apis/job";
function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getDataonMount();
        if (response) {
          setData(response);
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getData();
  }, []);
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
          <SearchBar />
        </div>
      </div>
      {data &&
        data.jobs.map((item) => (
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
            access={item.refUserId === data.id}
          />
        ))}
    </div>
  );
}

export default Home;
