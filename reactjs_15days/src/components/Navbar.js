import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Navbar = ()=>{
  return(
    <nav>
      <div className="container">
        <a href="/#" className="logo">Pokemon</a>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;