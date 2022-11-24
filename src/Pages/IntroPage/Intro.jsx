import React from 'react'
import { NavLink } from 'react-router-dom'
import './Intro.css'

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__container">
        <img
          className="intro__img"
          src="src/assets/logos/logo-white.png"
          alt="image intro"
        />
        <NavLink className="home" to="/home">
          <button type="button" className="btn__intro">
            Prêt à voyager ?
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Intro
