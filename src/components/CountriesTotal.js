import React from "react";


const CountriesTotal = ({flower}) => {

  const totalPopulation = flower.reduce((runningTotal, batman) => {
    return runningTotal + batman.population
  }, 0)


    return (
        <h3>Total population of the world: {totalPopulation}</h3>
    )
}


export default CountriesTotal;

// Traveller.prototype.calculateTotalDistanceTravelled = function () {
//     return this.journeys.reduce((total, journey) => total += journey.distance ,0);