import React from 'react';
import Card from './Card.js';

const CardList = (props) => {
  const {robots} = props;

  return (
    <div>
      { robots.map((robot)=>{
        return <Card key={robot.id}
          id={robot.id}
          email={robot.email}
          name={robot.name}
          />
      })}
    </div>
  )
}

export default CardList;
