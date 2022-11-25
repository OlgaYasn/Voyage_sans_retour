import React, { useState } from 'react';
import "./DestinationCardDetails.css";


const DestinationCardDetails = ({ activity, description, age, guide, image, country, city, price, dangerosity }) => {
    
    const [cancelButton, setCancelButton] = useState(true);
    
    const handleClick = () => {
        setCancelButton(!cancelButton);
    }
    
    
    return (
        <div className="cardDetail">
                <div>
                     <img className = "cancelButton" onClick={handleClick} src="src/assets/logos/cancel.png" alt="logo" />
            <img className="PictureDetails" src={image} />
            <h1 className="NameActivity">{activity}</h1>
            <img className="Buy" src="./src/assets/logos/valise-white.png" />
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
        
    );
}

export default DestinationCardDetails;