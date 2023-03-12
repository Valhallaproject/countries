/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-concat */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import "./card.css";
import { Link } from "react-router-dom";

const Cards = ({ filterRegion, searchTerm }) => {
  const [country, setCountry] = useState([]);
  if(filterRegion === ""){
      filterRegion = "all"
  }
  if(searchTerm === undefined){
    searchTerm = ""
}
  
  const fetchCountry = async () => {
    await axios
      .get("https://restcountries.com/v2/" + filterRegion )
      .then((response) => {

        setCountry(response.data);
      });
  };

  useEffect(() => {
    fetchCountry();
  }, [filterRegion])   

  const renderCard = (country, index) => {
    return (
      <Link to="/country" key={index} state={{ country }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={country.flags.svg} />
          <Card.Body>
            <Card.Title>{country.name}</Card.Title>
            <Card.Text>
              Population: {country.population}
              <br />
              Region: {country.region}
              <br />
              Capital: {country.capital}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    );
  };

  return <>{country
    .filter((val) => {
      return val.name.toLowerCase().includes(searchTerm.toLowerCase())
    }).map(renderCard)}</>;
};

export default Cards;
