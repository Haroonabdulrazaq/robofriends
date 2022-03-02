import React from 'react';
import Card from './Card.js';

const CardList = (props) => {
  const {robotes} = props;

  return (
    <div>
      { robotes.map((robot)=>{
        return <Card key={robot.id} robot={robot}/>
      })}
    </div>
  )
}

export default CardList;
