import React, { useState } from 'react';
import BeersInfo from '../BeersInfo/BeersInfo';
import "./Card.scss";

const Card = (props) => {
  const [toggleInfo, setToggleInfo] = useState(false);
    const {nameTag, beerImage, infoCard, beer } = props;

    const toggleBeerInfo = () => {
      setToggleInfo(!toggleInfo);
    };


  return (
    <div className='card'  onClick={toggleBeerInfo}>
    {toggleInfo && <BeersInfo className="card_toggle" toggleBeerInfo={toggleBeerInfo} beer={beer}/>}  
    <img className='card__beerImage' src={beerImage} alt="beerImage" />
    <h1 className='card__name'> {nameTag} </h1>
   
   
    </div>
  )
}

export default Card