import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Borders from "../borders/borders";
import "./country.css";

const Country = () => {
  const location = useLocation();
  const state = location.state.country;
  return (
    <>
      <Header />
      <div className="button">
        <Link to="/" className="back">
          Back
        </Link>
      </div>
      <div className="country">
        <div className="countryFlag">
          <img src={state.flags.svg} alt="flag" />
        </div>
        <div className="description">
          <div className="title">
            <h1>{state.name}</h1>
          </div>
          <div className="items">
            <div className="info">
              <div className="left">
                <h3>Native Name: <span>{state.nativeName}</span></h3>
                <h3>Population: <span>{state.population}</span></h3>
                <h3>Region: <span>{state.region}</span></h3>
                <h3>Sub Region: <span>{state.subregion}</span></h3>
                <h3>Capital: <span>{state.capital}</span></h3>
              </div>
              <div className="right">
                <h3>Top level domain: <span>{state.topLevelDomain}</span></h3>
                <h3>Currencies: <span>{state.currencies[0].name}</span></h3>
                <h3>Languages: <span>{state.languages[0].name}</span></h3>
              </div>
            </div>
            <div className="bordersCard">
              <h3>Border Countries : </h3>
              <Borders />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
