/* eslint-disable react/prop-types */
import React from 'react';
import "./MiniCard.css"


const MiniCard = ({country, activity}) => {
    return (
      <div className="miniCard_display">
        <div className="group_text">
          <p className="miniCard_title">{country}</p>
          <p className="miniCard_text">{activity}</p>
        </div>
        <img
          src="src/assets/logos/picto-cardDetails.png"
          alt="logo"
          className="card_logo"
        />
      </div>
    );
};

export default MiniCard;