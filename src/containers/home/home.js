/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Header from "../../components/header/header";
import Search from "../../components/search/search";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";
import "./home.css";

const home = () => {
  const [filterRegion, setFilterRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState();
  return (
    <>
      <Header />
      <div className="research">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter filterRegion={filterRegion} setFilterRegion={setFilterRegion} />
      </div>
      <div className="containerCards">
        <Card
          filterRegion={filterRegion}
          setFilterRegion={setFilterRegion}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </>
  );
};
export default home;
