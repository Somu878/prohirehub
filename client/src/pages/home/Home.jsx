import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/Searchbar/searchBar";
import JobTile from "../../components/jobtile/JobTile";
import { Toaster } from "react-hot-toast";
function Home() {
  return (
    <div>
      <Toaster position="top-center" gutter={20} reverseOrder={false} />
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
      <JobTile />
    </div>
  );
}

export default Home;
