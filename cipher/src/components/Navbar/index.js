import React from 'react';

function Navbar() {
    return (
      <div class="navbar">
        <NavItem name="Vigenere Standard" />
        <NavItem name="Vigenere Auto Key" />
        <NavItem name="Vigenere Extended" />
        <NavItem name="Affine" />
        <NavItem name="Palyfair" />
        <NavItem name="Hill" />
      </div>
    );
  }
  
  function NavItem(props) {
    return(
      <div class = "navItem">
        <a href="\" class="dropbtn">{props.name}</a>
        <Dropdown name = {props.name} />
      </div>
    );
  }
  
  function Dropdown(props) {
    const name = props.name
    return(
      <div class="dropdown-content">
        <a href="\">Encrypt</a>
        <a href="\">Decrypt</a>
      </div>
    );
  }

export default Navbar;