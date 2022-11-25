import React from "react";
import "./PopUpReservation.css";
import { useState } from "react";

const PopUpReservation = () => {
  const [check, setCheck] = useState(true);
  const handleClick = () => {
    setCheck(!check)
  };
  return (
    check && <div className="popUpReservation">
        <h1 className="popUpTitleReservation">Merci pour votre achat, nous vous souhaitons un dangereux voyage !</h1>
        <img onClick={handleClick} className="close-button" src="src/assets/logos/cancel.png" alt="close" />
        </div>
    )
};

export default PopUpReservation;
