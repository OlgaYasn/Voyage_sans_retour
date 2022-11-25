import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { NavLink } from "react-router-dom";
>>>>>>> b8487fdca128d2d1f80db9c1bf66e401272e8b21
import "./Navbar.css";

const Navbar = () => {
    return (
<<<<<<< HEAD
  <div className='navbar'>

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

  </div>
=======
        <div className='navBar'>
            <NavLink to="/reservations"><h1>Réservations</h1></NavLink> 
        </div>
>>>>>>> b8487fdca128d2d1f80db9c1bf66e401272e8b21
    );
};

export default Navbar;