import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Reservation.css";

const Reservation = () => {
  return (
    <div>
      <Navbar />
      <div className="titleBlock">
        <h1 className="reservation__title">
          Prêt(e) pour l'aventure de votre vie?{" "}
        </h1>{" "}
        <h1 className="reservation__title"> Réservez-la ici !</h1>
      </div>
      <div className="intro__reservation">
        <img
          className="purple_cloud"
          src="/src/assets/images/purple.cloud.png"
          alt="purple round"
        />
      </div>
      <div className="general__contact">
        <div className="contact__section1">
          <h3>Adresse</h3>
          <h4>Triangle des Bermudes</h4>
          <h3>Téléphone</h3>
          <h4>06-666-666-66</h4>
          <h3>Ecrivez-nous</h3>
          <h4>Remplissez le formulaire ci-contre</h4>
        </div>
        <div className="page">
          <div className="field field_v1">
            <label htmlFor="first-name" className="ha-screen-reader">
              Votre prénom
            </label>
            <input
              id="first-name"
              className="field__input"
              placeholder="David"
            />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Prénom</span>
            </span>
          </div>
          <div className="field field_v2">
            <label htmlFor="last-name" className="ha-screen-reader">
              Votre nom
            </label>
            <input
              id="last-name"
              className="field__input"
              placeholder="Faure"
            />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Nom</span>
            </span>
          </div>
          <div className="field field_v3">
            <label htmlFor="email" className="ha-screen-reader">
              E-mail
            </label>
            <input
              id="email"
              className="field__input"
              placeholder="jss_love@hotmail.com"
            />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">E-mail</span>
            </span>
          </div>
          <div className="card">
            <div className="content-wrapper">
           
            </div>
            <div className="demo">
              <label className="toggle" htmlFor="uniqueID">
                <input
                  type="checkbox"
                  className="toggle__input"
                  id="uniqueID"
                />
                <span className="toggle-track">
                  <span className="toggle-indicator"></span>
                </span>
                Je confirme avoir bien lu et compris les modalités et conditions
                de la présente transaction.
              </label>
            </div>
          </div>
          <button
            type="button"
            className="btn btn--primary btn--inside uppercase"
          >
            Réservez
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
