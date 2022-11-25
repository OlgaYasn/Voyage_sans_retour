import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="navbar__img"
          src="src/assets/logos/logo-inline-white.png"
          alt="image intro"
        />
      </Link>
      <img
        className="navbar__img__valise"
        src="src/assets/logos/valise-white.png"
        alt="image intro"
      />
      <div className="navBar">
        <Link to="/reservations">
          <h1 className='navbar_title'>Réservations</h1>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
