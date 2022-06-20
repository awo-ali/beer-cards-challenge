import React from 'react';
import "./Card.scss";

const Card = (props) => {
  
    const {nameTag, beerImage, toggleBeerInfo} = props;

 


  return (
    <div className='card' onClick={toggleBeerInfo}>
    <img className='card__beerImage' src={beerImage} alt="beerImage" />
    <h1 className='card__name'> {nameTag} </h1>
   
   
    </div>
  )
}

export default Card