
import React from 'react'
import "./BeersInfo.scss";
import blackCross from "../../assets/images/black-cross.png"


const BeersInfo = (props) => {
  const {toggleBeerInfo, beer}= props
  


  return (

    <div className='beerInfo'>
      <img src={blackCross} alt="Close beer info" className="beerInfo__cross" onClick={toggleBeerInfo}/>

        <div className='beerInfo_content'>

          <img className='beerInfo_image' src={beer.image_url} alt="" />

          <div className='beerInfo_fact-sheet'>

          <h2 className='beerInfo_nameTag'>{beer.name}</h2>

          <p1 className='beerInfo_tagline'>{beer.tagline} </p1><br />

          <p2 className='beerInfo_description'> <strong>Description</strong> ~ {beer.description}</p2><br />
          <p3 className= 'beerInfo_food-pairings'> <strong> Food Pairings </strong> ~ {beer.food_pairing}</p3><br />

          
          <div className='beerInfo_values'>
          <h3 className='beerInfo_abv'>  ABV - {beer.abv}</h3>
          <h4 className='beerInfo_ph'>PH - {beer.ph}</h4>
          </div>

          </div>



        </div>




    </div>
  )
}

export default BeersInfo
// 