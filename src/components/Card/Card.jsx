import React from 'react';
import CardList from '../CardList/CardList';
import "./Card.scss";

const Card = (props) => {
    const {nameTag, tagline, beerImage, ph, abv} = props;
  return (
    <div className='card'>
    <img className='card__beerImage' src={beerImage} alt="" />
    <h1 className='card__name'> {nameTag} </h1>
    <h2 className='card__tagline'>{tagline}</h2>
    <div className='card__facts'>
    <h3 className='card__ph'>ph - {ph}</h3>
    <h4 className='card__abv'>ABV - {abv}</h4>
    </div>

    </div>
  )
}

export default Card