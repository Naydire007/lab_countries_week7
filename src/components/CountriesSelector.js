import React from "react";

// we have destructured the props object, to take out the bunny and countrySelected variables
//if we didn't we would have to use props.bunny or props.countrySelected
const CountriesSelector = ({ bunny, countrySelected}) => {


  const pickCountry = bunny.map((country) => {
    return <option key={country.alpha3Code} value={country.alpha3Code}>{country.name}</option>
  })

  //the select we've made has a change eventListener on it. When a new option is picked it invokes(calls) the countrySelected function in CountriesContainer and passes it the event that happened (change event)
    return (
        <select onChange={countrySelected} >
            <option selected disabled>Choose a country</option>
            {pickCountry}
        </select>
    )
}

export default CountriesSelector;