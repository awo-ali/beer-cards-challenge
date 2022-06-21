import React from 'react';
import "./Main.scss";
import CardList from '../../components/CardList/CardList';

const Main = (props) => {
  const {beers} = props
  return (
    <div className='main'>
        <CardList beers={beers} />
    </div>
  )
}

export default Main