import React from "react";

const CountriesSelector = ({bunny}) => {

    
  const pickCountry = bunny.map((country) => {
    return <option key={country.alpha3Code} value={country.alpha3Code}>{country.name}</option>
  })

  
    return (
        <select>
            <option selected disabled>Choose a country</option>
            {pickCountry}
        </select>
    )
}

export default CountriesSelector;