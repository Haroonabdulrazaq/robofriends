import React, { useState, useEffect } from 'react';
import './App.css'
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import 'tachyons';


const App =()=> {
  const [searchText, setSearchText] = useState('');
  const [robots, setRobots] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => {
        return result.json()
      })
      .then((users)=>{
        setRobots(users)
        setLoader(false)
      })
  },[])

  const handleChange=(e)=>{
    setSearchText(e.target.value);
  }

  const filteredRobot = robots.filter((robot)=>{
    return robot.name.toLowerCase().includes(searchText.toLowerCase());
  })
  if(loader){
    return <h1 className='tc'>Loading...</h1>
  } else {
    return (
      <div className="App tc">
        <h1>RoboFriends</h1>
        <SearchBox handleChange={(e)=>handleChange(e)} searchText={searchText} />
        <Scroll>
          <CardList searchText={searchText} robots={filteredRobot} />
        </Scroll>
      </div>
    );
  }
}

export default App;
