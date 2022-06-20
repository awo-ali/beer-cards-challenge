
import './App.scss';
import  {useState, useEffect} from 'react'
import Navbar from './container/Navbar/Navbar';
import Main from './container/Main/Main';





const App = () => {
 
 const [beers, setBeers] = useState([])
 const [url, setUrl] = useState("https://api.punkapi.com/v2/beers")

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
console.log(beers);

  };

useEffect(() => {

  getUsers();

}, [url])

const searchBeersByName = (event) => {
  setUrl( "https://api.punkapi.com/v2/beers?beer_name=" + event.target.value  )
}

const classicRange= (event) => {
  setUrl("https://api.punkapi.com/v2/beers?brewed_before=01-2010" + event.target.checked )
}

const abvLessThanSix= (event) => {
  setUrl("https://api.punkapi.com/v2/beers?abv_gt=6.0" + event.target.checked )
}
const phLowerThanFour= (event) => {
  setUrl("https://api.punkapi.com/v2/beers?abv_lt=6.0" + event.target.checked )
}
  
console.log(beers);
  return (
    <div className="app">
   <Navbar  searchBeers={searchBeersByName} classicRange={classicRange} abvLessThanSix={abvLessThanSix} />
   <Main beers={beers}/>
</div>
  )
}

export default App

