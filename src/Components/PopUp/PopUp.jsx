import React from 'react';
import "./PopUp.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PopUp = ({popUp}) => {
console.log(popUp)

    const [newPopop, setNewPopop] = useState(popUp)
    const handleClick = () => {
        setNewPopop(!newPopop)
    }
    return (
        newPopop && (<div className="popUp">
            <h1>Merci pour votre achat</h1>
            <button onClick={handleClick} className="continuerAchat" type="button">Continuer mes achats</button>
            <Link to="/reservations"><button className="goPanier" type="button">Aller au panier</button></Link> 
        </div>)
    );
}

export default PopUp;
