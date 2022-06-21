
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

          <div className='beerInfo_abv-ph'>
          <h3 className='beerInfo_abv'>abv:{beer.abv}</h3>
          <h4 className='beerInfo_ph'>pH:{beer.ph}</h4>
          </div>

          <h5 className='beerInfo__tagline'> <strong> Tagline </strong> ~ {beer.tagline} </h5><br />
          <p1 className='beerInfo_description'> <strong>Description</strong> ~ {beer.description}</p1><br />
          <p2 className= 'beerInfo_food-pairings'> <strong> Food Pairings </strong> ~ {beer.food_pairing}</p2><br />

          </div>



        </div>




    </div>
  )
}

export default BeersInfo
// 