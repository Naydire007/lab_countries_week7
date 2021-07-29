import React, { useEffect, useState } from 'react';

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () => {
        loadCountries()

    },[]) //adding things inside the brackets will watch that part and call the callback(arrow function) again


  
  const loadCountries = () => {
      fetch("https://restcountries.eu/rest/v2/all") // fetch the data from the request URL
      .then(response => response.json()) // look data and return it (turning it from string to JSON)
      .then(countriesData => setCountries(countriesData)) // name the data to store it in state using setCountries() 
      .catch(err => console.error); // if something goes wrong (in any of the previous steps) it will return the error message to the console in the browser
  }
  

  return (
    <p>This is the CountriesContainer</p>
  )



}
export default CountriesContainer;