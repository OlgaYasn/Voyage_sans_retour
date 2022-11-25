/* eslint-disable react/prop-types */
<<<<<<< HEAD
import React from 'react';
import "./MiniCard.css"
=======
import React from 'react'
>>>>>>> 726248fe25354517f510d4454e72f807ae257f05

const MiniCard = ({ country, activity }) => {
  return (
    <div>
      <p>{country}</p>
      <p>{activity}</p>
    </div>
  )
}

<<<<<<< HEAD
const MiniCard = ({country, activity}) => {
    return (
      <div className="miniCard_display">
        <div className="group_text">
          <p className="miniCard_title">{country}</p>
          <p className="miniCard_text">{activity}</p>
        </div>
        <img
          src="../src/assets/logos/pictoDead.png"
          alt="image"
          className="card_logo"
        />
      </div>
    );
};

export default MiniCard;
=======
export default MiniCard
>>>>>>> 726248fe25354517f510d4454e72f807ae257f05
