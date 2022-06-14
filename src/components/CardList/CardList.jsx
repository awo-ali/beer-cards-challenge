import React, {useState} from 'react';
import "./CardList.scss";
import Card from '../Card/Card';
import beers from '../../data/beers';



const CardList = (props) => {
    console.log(beers);
    console.log(beers[2]);
    console.log(beers[2].name);
    console.log(beers[4].image_url);

    const [ beerDisplayed, setBeerDisplayed] = useState(beers)

    const cardArr = (beers) => {  return beers.map((beers) => (
        
         <Card beerImage={beers.image_url} nameTag={beers.name}  tagline={beers.tagline} ph={beers.ph}  abv={beers.abv}  />
        
      ));
     console.log(cardArr);
    }
    
  return (
    <div className='cardsContainer'>
   {cardArr(beerDisplayed)}
    </div>
  )
}

export default CardList;