import React from 'react';
import RestaurentItems from './RestaurentItems';
import restaurentsList from '../utils/restaurentData';

export default function BodyComponent() {
  return (
    <div>
      <div className="body-container">
        <div className="search-container">
            <input type="text" className="search-input" placeholder="search..."/>
        </div>
        <RestaurentItems restaurentsList={restaurentsList}/>
      </div>
    </div>
  )
}
