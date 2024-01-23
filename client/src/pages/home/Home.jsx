import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/Searchbar/searchBar";
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
      Home Page
    </div>
  );
}

export default Home;
