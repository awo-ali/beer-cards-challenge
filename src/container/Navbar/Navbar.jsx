import React from 'react';
import "./Navbar.scss";
import SearchBox from '../../components/SearchBox/SearchBox';
import CheckBox from '../../components/CheckBox/CheckBox';
import beerIcon from '../../assets/images/beer-icon.png';


const Navbar = (props) => {

  const { searchBeers, classicRange, abvLessThanSix, phLowerThanFour} = props

  return (
    <div className='navbar'>
<SearchBox  searchBeers={searchBeers}  />
<div className='navbar__titleBlock'>
<h1 className='navbar__title'>BEER ON TAP</h1>
<img className="navbar__beerIcon" src={beerIcon} alt="beerImage"/>
</div>
<CheckBox classicRange={classicRange} abvLessThanSix={abvLessThanSix} phLowerThanFour={phLowerThanFour}/>

    </div>
  )
}

export default Navbar