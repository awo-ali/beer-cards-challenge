import React from 'react';
import "./SearchBox.scss";


const SearchBox = (props) => {
 const {searchBeers} = props
  return (
    <form className="search-box">
      <label  className="search-box__label"></label>
      <input onInput={searchBeers} type="text" placeholder="Search..." name="beer"  className="search-box__input"/>
    </form>
  )
}

export default SearchBox