import React from 'react';
import "./DestinationCardDetails.css";


const DestinationCardDetails = ({ activity, description, age, guide, image, country, city, price, dangerosity }) => {
    return (
        <div className="cardDetail">
            <img className="PictureDetails" src={image} />
            <h1 className="NameActivity">{activity}</h1>
            <img className="Buy" src="./src/assets/logos/valise-white.png" />
            <p className="DescriptionActivity">{description}</p>
            <p className="Guide">Votre guide : {guide}</p>
            <div className="FuckingDangerosity">
                <img className="pictoDead" src="./src/assets/logos/picto-cardDetails.png" />
                <p>Taux de dangerosité : {dangerosity}</p>
            </div>
            <p className="Age">Age recommandé : {age}</p>
            <p className="Price">{price} €</p>
            <p className="Country">{country} {city}</p>

        </div>
    )
}

export default DestinationCardDetails;