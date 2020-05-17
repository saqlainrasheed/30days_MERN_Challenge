import React from 'react';
function NavElements(props){
    return (
      <ul style={{display:"flex",listStyleType:"none"}}>
        <li className="dtc v-mid mid-gray link dim w-25">
          <a href='/#' style={{fontSize:"2rem"}} className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">PexMeg</a>
        </li>
        <li className="dtc v-mid w-75 tr">
          <input type="text" placeholder="Search" className=" br3 input-reset  b--black-20 pa2  w-200" />
        </li>  
      </ul>
    )
}
export default NavElements;