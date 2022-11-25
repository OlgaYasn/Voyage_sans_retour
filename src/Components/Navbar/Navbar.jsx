import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='navBar'>
            <NavLink to="/reservations"><h1>Réservations</h1></NavLink> 
        </div>
    );
};

export default Navbar;