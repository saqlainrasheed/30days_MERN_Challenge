import React from 'react';


function ImageContainer(props){


  return(
    <div >
      <ul>
      {console.log(props.images)}
        <li><img alt="img" src={props.images} height="300" width="300"/></li>
      </ul>
    </div>
  )
  
}

export default ImageContainer;