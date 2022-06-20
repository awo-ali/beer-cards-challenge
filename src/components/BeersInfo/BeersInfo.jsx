import React from 'react'
import "./BeersInfo.scss";
import blackCross from "../../assets/images/black-cross.png"

const BeersInfo = (props) => {
  const {toggleBeerInfo}= props

  return (

    <div className='beerInfo'>
      <img src={blackCross} alt="Close beer info" className="beerInfo__cross" onClick={toggleBeerInfo}/>
        <div className='beerInfo_content'>
          <img className='beerInfo_image' src="" alt="" />

          <div className='beerInfo_fact-sheet'>

          <h2 className='beerInfo_nameTag'>nameTag</h2>

          <div className='beerInfo_abv-ph'>
          <h3 className='beerInfo_abv'>Abv:</h3>
          <h4 className='beerInfo_ph'>pH:</h4>
          </div>

          <h5 className='beerInfo__tagline'>tagline</h5>
          <p1 className='beerInfo_description'>Description</p1>
          <p2 className= 'beerInfo_food-pairings'>Food Pairings</p2>

          </div>



        </div>




    </div>
  )
}

export default BeersInfo
// 