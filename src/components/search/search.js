import React from "react";
import logoSearch from "../../assets/icons/search.png";
import "./search.css";

const search = ({searchTerm, setSearchTerm}) => {
  const handleSearchTerm = (e) => {
    let value = e.target.value;
    value.length > 1 && setSearchTerm(value);
  };
  console.log(searchTerm);

  return (
    <div className="searchBar">
      <label htmlFor="search"></label>
      <div className="logoSearch">
        <img src={logoSearch} alt="search" />
      </div>
      <input
        type="text"
        id="search"
        className="search"
        placeholder="Search for a country ..."
        onChange={handleSearchTerm}
      />
    </div>
  );
};

export default search;
