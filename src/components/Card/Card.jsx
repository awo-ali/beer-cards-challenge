import React from 'react';
import "./Card.scss";

const Card = (props) => {
    const {nameTag, tagline, beerImage, ph, abv} = props;
  return (
    <div className='card'>
    <img className='card__beerImage' src={beerImage} alt="beerImage" />
    <h1 className='card__name'> {nameTag} </h1>
    <h2 className='card__tagline'>{tagline}</h2>
   
    </div>
  )
}

export default Card