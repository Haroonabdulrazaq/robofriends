import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflowY:'scroll', border:'5px solid black', height: '80vh', width: '80%', margin:'0 auto' }}>
      {props.children}
    </div>
  )
}

export default Scroll;
