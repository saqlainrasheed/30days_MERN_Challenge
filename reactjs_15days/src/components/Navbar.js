import React from 'react';
import NavElements from './NavElements';

function Navbar(props){
    return (
      <nav className="dt w-100 border-box pa1 ph5-ns shadow-2">
        <NavElements />
      </nav>
    )
}
export default Navbar;
