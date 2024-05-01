import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry,handleVisitedFlags }) => {
    // console.log(country);
    const [visited, setVisited] = useState();
    const handleVisited = () => {
        setVisited(!visited);
    };
    const { name, flags } = country;
    return (
        <div className={`${visited ? "visited" : "box"}`}>
            <h5>{name.common}</h5>
            <img src={flags.png} alt="" />
            <button onClick={() => handleVisitedCountry(country.name.common)}>
                Mark Visited
            </button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>
                Visited flag
            </button>
            <button onClick={handleVisited}>{visited ? "visited" : "going"}</button>
            <p>{visited ? "country is visited" : "not visited"}</p>
        </div>
    );
};

export default Country;
