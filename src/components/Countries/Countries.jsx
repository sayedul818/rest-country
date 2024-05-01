import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags,setVisitedFlags]=useState([]);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries=[...visitedCountries,country];
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedFlags = (flags) => {
    const newVisitedFlags=[...visitedFlags,flags];
    setVisitedFlags(newVisitedFlags);
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h4>Total Country : {countries.length}</h4>
      <div>
        <ul>
          {
            visitedCountries.map(country=>
            <li key={country.cca3}>Country Name : {country}</li>           
          )}          
        </ul>
      </div>
      <div className="flags-container">
          {
            visitedFlags.map(flag=>
            <img key={flag.cca3} src={flag} alt="" />           
          )}          
      </div>
      <div id="box-container">
        {countries.map((country) => (
          <Country 
          key={country.cca3} 
          country={country}
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
