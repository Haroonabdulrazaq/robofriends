import React, { useState } from 'react';
import './App.css'
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots.js';
import 'tachyons';


const App =()=> {
  const [searchText, setSearchText] = useState('');
  // const [robotes, setRobots] = useState(robots);

  const handleChange=(e)=>{
    setSearchText(e.target.value);
  }

  const filteredRobot = robots.filter((robot)=>{
    return robot.name.toLowerCase().includes(searchText.toLowerCase());
  })
  return (
    <div className="App tc">
      <h1>RoboFriends</h1>
      <SearchBox handleChange={(e)=>handleChange(e)} searchText={searchText} />
      <CardList searchText={searchText} robots={filteredRobot} />
    </div>
  );
}

export default App;
