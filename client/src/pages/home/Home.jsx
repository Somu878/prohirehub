import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/Searchbar/searchBar";
import JobTile from "../../components/jobtile/JobTile";
function Home() {
  return (
    <div>
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
