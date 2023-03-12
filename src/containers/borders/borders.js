/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./borders.css";

const Borders = () => {
  const location = useLocation();
  const state = location.state.country;
  const [borders, setBorders] = useState([]);

  function fetchBorders() {
    axios
      .get("https://restcountries.com/v2/alpha/" + state.alpha3Code)
      .then((response) => {
        setBorders(response.data.borders);
      });
  }
  const bordersName = (borders, index) => {
    return (
      <Link to="/" key={index}>
        <li className="border">
          {borders}
        </li>
      </Link>
    );
  };

  useEffect(() => {
    fetchBorders();
  }, []);

  return (
    <>
      <ul className="borders">{borders?.map(bordersName)}</ul>
    </>
  );
};

export default Borders;
