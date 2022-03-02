import React from 'react'

const SearchBox = (props) => {
  const {handleChange, searchText} = props;

  return (
    <div className='pa2'>
      <input
        type='search' 
        placeholder='Search box'
        className='pa3 ba b--green bg-lightest-blue'
        onChange = {(e)=>handleChange(e)}
        value={searchText}
      />
    </div>
  )
}

export default SearchBox;
