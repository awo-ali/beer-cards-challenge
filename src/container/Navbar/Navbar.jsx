import React from 'react';
import "./Navbar.scss";
import SearchBox from '../../components/SearchBox/SearchBox';
import CheckBox from '../../components/CheckBox/CheckBox';

const Navbar = () => {

    /*const getSearchInput = (event) => {
        return event.target.value;
      };
      const filterBySearch = (event) => {
        const searchTerm = getSearchInput(event);
        const filteredArray = charactersArr.filter((character) => {
            return (
              character.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              character.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              character.family.toLowerCase().includes(searchTerm.toLowerCase())
            );
          });
          characterContainer.innerHTML = createCards(filteredArray);
        };onInput={getSearchInput}*/

  return (
    <div className='navbar'>
<SearchBox />
<h1 className='navbar__title'>Beer</h1>
<CheckBox />
    </div>
  )
}

export default Navbar