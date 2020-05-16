import React from 'react';
import RoboCard from './RoboCard';


function CardList({ users }){  
  const renderCards = users.map(i => {
    return(<RoboCard key={i.age.toString()} age={i.age} name={i.name}/>);
  })
  return (
    <div className="tc bg-white" >
      {renderCards}
    </div>
  )
}

export default CardList;