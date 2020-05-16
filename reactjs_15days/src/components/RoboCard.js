import React from 'react';


function RoboCard(props){  
  const {name,age} = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow5">
      <img src={`https://robohash.org/1${age}`} alt={name} ></img>
      <h3>{name}</h3>
      <p>Lorem picsum,lorem picsum</p>
    </div>
  )
}

export default RoboCard;