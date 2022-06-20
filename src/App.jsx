
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
  if(event.target.value ){
  setUrl( "https://api.punkapi.com/v2/beers?beer_name=" + event.target.value  )
  }
}

const classicRange= (event) => {
  if(event.target.checked === true){
  setUrl("https://api.punkapi.com/v2/beers?brewed_before=01-2010"  )
}else if (event.target.checked === false){
  console.log(event.target.checked);
setUrl("https://api.punkapi.com/v2/beers")
}

}

const abvLessThanSix= (event) => {
if(event.target.checked === true){
  setUrl("https://api.punkapi.com/v2/beers?abv_gt=6"  )
}else if (event.target.checked === false){
  console.log(event.target.checked);
setUrl("https://api.punkapi.com/v2/beers")
}
};

const phLowerThanFour= (event) => {
  if(event.target.checked === true){
  setUrl("https://api.punkapi.com/v2/beers?ibu_lt=4")
}else if (event.target.checked === false){
  console.log(event.target.checked);
setUrl("https://api.punkapi.com/v2/beers")
}
};




  
console.log(beers);
  return (
    <div className="app">
   <Navbar  searchBeers={searchBeersByName} classicRange={classicRange} abvLessThanSix={abvLessThanSix} phLowerThanFour={phLowerThanFour} />
   <Main beers={beers}/>
</div>
  )
}

export default App

