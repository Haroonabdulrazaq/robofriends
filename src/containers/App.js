import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Errorboundry from '../components/Errorboundry';
import { setSearchField, requestRobots } from '../actions/index';
import './App.css';
import 'tachyons';


const App =(props)=> {
  const searchText = useSelector(state => state.search.searchText);
  const robot = useSelector(state => state.robot);
  const {isPending, robots} = robot;


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRobots())
  },[dispatch])

  const handleChange=(e)=>{
    dispatch(setSearchField(e.target.value))
  }

  const filteredRobot = robots.filter((robot)=>{
    return robot.name.toLowerCase().includes(searchText.toLowerCase());
  })

  if(isPending){
    return <h1 className='tc'>Loading...</h1>
  } else {
    return (
      <div className="App tc">
        <h1>RoboFriends</h1>
        <SearchBox handleChange={(e)=>handleChange(e)} searchText={searchText} />
        <Scroll>
          <Errorboundry>
            <CardList searchText={searchText} robots={filteredRobot} />
          </Errorboundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
