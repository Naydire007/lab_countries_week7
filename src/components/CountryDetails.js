import React from "react";

const CountryDetails = ({banana, addToFavourites}) => {

    if (banana === null){
        return null
    }
    
    
    return (
        <div>
            <h4>Country Name: {banana.name}</h4>
            <h4>Country Population: {banana.population}</h4>
            <img src={banana.flag} width='300px'></img>
            <button onClick={() => addToFavourites(country)}>Add To Favourites</button>
        </div>
    )
}

export default CountryDetails;