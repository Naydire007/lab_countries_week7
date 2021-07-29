import React from "react";

const CountryDetails = ({banana}) => {

    if (banana === null){
        return null
    }
    
    
    
    
    return (
        <div>
            <h4>Country Name: {banana.name}</h4>
            <h4>Country Population: {banana.population}</h4>
            <img src={banana.flag} width='300px'></img>
        </div>
    )
}

export default CountryDetails;