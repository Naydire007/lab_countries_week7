import React, { useEffect, useState } from 'react';
import CountriesTotal from '../components/CountriesTotal';
import CountriesSelector from '../components/CountriesSelector';
import CountryDetails from '../components/CountryDetails';

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState (null);

    useEffect( () => {
        loadCountries()

    },[]) //adding things inside the brackets will watch that part and call the callback(arrow function) again


  
  const loadCountries = () => {
      fetch("https://restcountries.eu/rest/v2/all") // fetch the data from the request URL
      .then(response => response.json()) // look data and return it (turning it from string to JSON)
      .then(countriesData => setCountries(countriesData)) // name the data to store it in state using setCountries() 
      .catch(err => console.error); // if something goes wrong (in any of the previous steps) it will return the error message to the console in the browser
  }

  const countrySelected = (event) => { // event.target.value will be the alpha3Code chosen in CountriesSelector.js
    //we need to find the right country object from our array, we'll use a .find(()=>{}) to get it
      const countryObject = countries.find((country)=> { //find starts looping through all the countries, calling each one country as it looks at it
          return country.alpha3Code === event.target.value //as soon as this is true, it will return the whole object it was looking at (country) into the countryObject variable
      })

      // console.log(countryObject); //once it's found it, log it out to the console.
      setSelectedCountry(countryObject);
  }
  
//CountriesSelector is passed 2 props (bunny which is our countries array and countrySelected which is our function)
  return (
    <>
        <p>This is the CountriesContainer</p>
        <CountriesTotal flower={countries}/>
        <CountriesSelector bunny={countries} countrySelected={countrySelected}/> 
        <CountryDetails banana={selectedCountry}/>
    </>
  )

}
export default CountriesContainer;