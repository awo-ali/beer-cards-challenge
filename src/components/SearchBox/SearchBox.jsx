import React from 'react';
import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <form className="search-box">
      <label  className="search-box__label"></label>
      <input type="text" placeholder="Search..." name="beer"  className="search-box__input"/>
    </form>
  )
}

export default SearchBox