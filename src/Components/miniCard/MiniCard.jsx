/* eslint-disable react/prop-types */
import React from 'react'
import './MiniCard.css'

const MiniCard = ({ activity }) => {
  return (
    <div className="miniCard_display">
      <div className="group_text">

        <p className="miniCard_text">{activity}</p>
      </div>
      <img
        src="../src/assets/logos/pictoDead.png"
        alt="image"
        className="card_logo"
      />
    </div>
  )
}

export default MiniCard
