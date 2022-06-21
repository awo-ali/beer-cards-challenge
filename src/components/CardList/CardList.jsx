import React  from "react";
import "./CardList.scss";
import Card from "../Card/Card";


const CardList = (props) => {
  const { beers} = props;

  const cardArr = (beers) => {
    return beers.map((beers) => (
      <Card
        beerImage={beers.image_url}
        nameTag={beers.name}
        tagline={beers.tagline}
        beer={beers}
      />
    ));
  };

  return (
    <div className="cardsContainer" beers={beers} >
      {cardArr(beers)} 
    </div>
  );
};

export default CardList;
