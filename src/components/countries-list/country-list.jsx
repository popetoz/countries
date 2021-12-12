import React from "react";
import CountryCard from "../country-card/country-card";

const CountriesList = (props) => {
  // return an array of CountryCard component
  return props.countries.map((country) => {
    return <CountryCard key={country.id} country={country} />;
  });
};

export default CountriesList;
