import React from 'react';

const SearchBox = (props) => {
  const {handleChange, searchText} = props;

  return (
    <div className='pa2'>
      <input
        type='search'
        aria-label='Search Robots'
        placeholder='Search box'
        className='pa3 ba b--green bg-lightest-blue'
        onChange = {handleChange}
        value={searchText}
      />
    </div>
  )
}

export default SearchBox;
