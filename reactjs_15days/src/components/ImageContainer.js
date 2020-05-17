import React from 'react';



function ImageContainer(props){
  console.log(props)
  return(
    <div >
      <ul>
        <li><img alt="img" src={props.images[0]} height="300" width="300"/></li>
      </ul>
    </div>
  )
}

export default ImageContainer;