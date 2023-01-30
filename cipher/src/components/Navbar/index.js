import React from 'react';
import './Navbar.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Cipherian
      </Link>
      <ul>
        <CustomLink to="/Vigenere-Standard">Vigenere Standard</CustomLink>
        <CustomLink to="/Vigenere-AutoKey">Vigenere AutoKey</CustomLink>
        <CustomLink to="/Vigenere-Extended">Vigenere Extended</CustomLink>
        <CustomLink to="/Playfair">Playfair</CustomLink>
        <CustomLink to="/Hill">Hill</CustomLink>
        <CustomLink to="/Affine">Affine</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}