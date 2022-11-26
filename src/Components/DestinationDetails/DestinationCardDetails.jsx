import React from 'react'
import PropTypes from "prop-types";
import './DestinationCardDetails.css';
import { useState } from 'react';
import PopUp from '../PopUp/PopUp';

const DestinationCardDetails = ({
  activity,
  description,
  age,
  guide,
  image,
  country,
  city,
  price,
  dangerosity,
}) => {
const [popUp, setPopUp] = useState(false);

const handlePopUp = () => {
  setPopUp(!popUp)
}
  const [cancelButton, setCancelButton] = useState(true)

  const handleClick = () => {
    setCancelButton(!cancelButton);
  };


  return (
        <div className="cardDetail__container">
      {cancelButton && (
        <div>
          {
            <img
              className="cancelButton"
              onClick={handleClick}
              src="src/assets/logos/cancel2.png"
              alt="logo"
            />
          }
    <div className="cardDetail">
      {/* <img className = "cancelButton" onClick={handleClick} src="src/assets/logos/cancel.png" alt="logo" /> */}
      <img className="PictureDetails" src={image} />
      <h1 className="NameActivity">{activity}</h1>
     <img onClick={handlePopUp} className="Buy" src="./src/assets/logos/valise-white.png" />
      <div>{popUp && (<div><PopUp popUp={popUp}/><img className="check_panier" src="src/assets/logos/check-violet.png"/></div>)}</div>
      <p className="DescriptionActivity">{description}</p>
      <p className="Guide">Votre guide : {guide}</p>
      <div className="FuckingDangerosity">
        <img className="pictoDead" src="./src/assets/logos/pictoDead.png" />
        <p>Taux de dangerosité : {dangerosity}</p>
      </div>
      <p className="Age">Age recommandé : {age} ans</p>
      <p className="Price">{price} €</p>
      <p className="Country">
        {country} / {city}
           </p>
          </div>
        </div>
      )}
    </div>
  );
};
DestinationCardDetails.propTypes = {
  activity: PropTypes.func.isRequired,
  description: PropTypes.func.isRequired,
  age: PropTypes.func.isRequired,
  guide: PropTypes.arrayOf.isRequired,
  image: PropTypes.func.isRequired,
  country: PropTypes.func.isRequired,
  city: PropTypes.func.isRequired,
  price: PropTypes.arrayOf.isRequired,
  dangerosity: PropTypes.arrayOf.isRequired,
};
export default DestinationCardDetails;
