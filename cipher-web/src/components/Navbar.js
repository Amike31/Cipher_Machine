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
        <CustomLink to="/Vigenere-Standard" children="Vigenere Standard" />
        <CustomLink to="/Vigenere-AutoKey" children="Vigenere AutoKey" />
        <CustomLink to="/Vigenere-Extended" children="Vigenere Extended" />
        <CustomLink to="/Playfair" children="Playfair" />
        <CustomLink to="/Hill" children="Hill" />
        <CustomLink to="/Affine" children="Affine" />
      </ul>
    </nav>
  )
}

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} >
        {children}
      </Link>
    </li>
  )
}