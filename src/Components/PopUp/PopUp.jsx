import React from "react";
import { ReactPropTypes } from "react";
import "./PopUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const PopUp = ({ popUp }) => {
  const [newPopop, setNewPopop] = useState(popUp);
    const [check, setCheck] = useState(false);

  const handleClick = () => {
    setNewPopop(!newPopop)
    setCheck(!check)
  };
  return (
    newPopop && (
      <div className="popUp">
        <img onClick={handleClick} className="close-button" src="src/assets/logos/cancel.png" alt="close" />
        <h1 className="popUpTitle">Voyage ajouté au panier</h1>
        <div className="container-button">
          <button
            onClick={handleClick}
            className="continuerAchat"
            type="button"
          >
            Continuer mes achats
          </button>
          <Link to="/reservations">
            <button className="goPanier" type="button">
              Aller au panier
            </button>
          </Link>
        </div>
      </div>
    )
  );
};

PopUp.propTypes = {
    popUp: ReactPropTypes.func.isRequired,
  }

export default PopUp;
