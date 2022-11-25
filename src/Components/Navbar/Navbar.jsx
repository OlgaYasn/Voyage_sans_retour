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
      <Link className='link__valise' to="/reservations">
        <img
          className="navbar__img__valise"
          src="src/assets/logos/valise-white.png"
          alt="image intro"
        />{" "}
      </Link>
    </div>
  );
}

export default Navbar
