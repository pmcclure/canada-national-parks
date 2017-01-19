import React from 'react';
import Card from './Card';

const CardList = ({parks}) => (
  <div id="search-results" className="flex one two-900 three-1500">
    {parks.map((row, key) => <Card data={row} key={key} />)}
    
  </div>
)

 
export default CardList;