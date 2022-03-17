import React from 'react';

const Card = (props) => {
  const { id, name, email } = props.robot
  return (
    <div key={id} className='tc grow bg-light-green br3 pa3 dib ma2 bw2 shadow-5'>
      <img alt={name} src={`https://robohash.org/${id}?size=100x100`} />
      <h2>{name}</h2>
      <h3>{email}</h3>
    </div>
  )
}

export default Card
