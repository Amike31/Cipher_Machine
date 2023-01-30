import React from 'react';
import './Navbar.css';

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
    </div>
  );
}

export default Navbar;