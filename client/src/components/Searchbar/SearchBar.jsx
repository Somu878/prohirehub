import React, { useState } from "react";
import styles from "./searchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import skillset from "..//../assets/skills.json";
import { Link } from "react-router-dom";

function SearchBar({ onSearch, loggedIn }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSelect = (e) => {
    const selectedSkill = e.target.value;
    if (selectedSkill && !selectedOptions.includes(selectedSkill)) {
      setSelectedOptions((skills) => [...skills, selectedSkill]);
    }
  };

  const handleDeSelect = (selectedSkill) => {
    setSelectedOptions((skills) =>
      skills.filter((option) => option !== selectedSkill)
    );
  };
  //search on keydown Enter
  // const handleSearch = (e) => {
  //   if (e.keyCode === 13) {
  //     e.preventDefault();
  //     onSearch(inputValue, selectedOptions.join(","));
  //   }
  // };
  //seach using debouncing
  const handleSearch = () => {
    setTimeout(() => {
      onSearch(inputValue, selectedOptions.join(","));
    }, 500);
  };

  const handleClear = () => {
    setSelectedOptions([]);
  };

  return (
    <div className={styles.Container}>
      <div>
        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        <input
          type="text"
          name="searchbox"
          spellCheck="false"
          placeholder="Type any role here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      <div style={{ marginLeft: "5vw" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <select name="skills" onChange={handleSelect} defaultValue="default">
            <option value="default" disabled>
              Skills
            </option>
            {skillset.map((item) => (
              <option key={item.skill} value={item.skill}>
                {item.skill}
              </option>
            ))}
          </select>
          <div
            style={{
              color: "white",
              gap: "10px",
              display: "flex",
              flexWrap: "wrap",
              width: "60%",
            }}
          >
            {selectedOptions.map((item) => (
              <Tag key={item} data={item} onDeSelect={handleDeSelect} />
            ))}
          </div>
          <p
            style={{
              color: "#ED5353",
              fontSize: "18px",
              cursor: "pointer",
              marginTop: "50px",
              marginLeft: "-50px",
            }}
            onClick={handleClear}
          >
            Clear
          </p>
          {loggedIn ? (
            <Link
              to="/addjob"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <button className={styles.addjobtn}>+Add Job</button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

function Tag({ data, onDeSelect }) {
  return (
    <div className={styles.tag}>
      <div style={{ color: "black", marginTop: "5px" }}>{data}</div>
      <div
        style={{
          width: "30px",
          background: "#ff6b6b",
          marginLeft: "5px",
          color: "white",
          textAlign: "center",
          fontSize: "20px",
          borderBottomRightRadius: "5px",
          borderTopRightRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => onDeSelect(data)}
      >
        X
      </div>
    </div>
  );
}

export default SearchBar;
