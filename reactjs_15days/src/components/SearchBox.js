import React from 'react';

function SearchBox(props){  
  return (
    <div className="pa2 tc">
      <input className="pa3 ba b--green bg-lightest-blue" 
      onChange={props.onChange} type="text" placeholder="Search..." name="search" />
    </div>
  )
}

export default SearchBox;