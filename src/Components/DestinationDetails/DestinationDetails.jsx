import React from 'react';
import "./DestinationDetails.css";

const DestinationDetails = () => {
    return (
        <div className="cardDetail">
            <img className="PictureDetails" src="./src/assets/images/plongé.png" />
            <h1 className="NameActivity">Titre</h1>
            <img className="Buy" src="./src/assets/logos/valise01-black.png" />
            <p className="DescriptionActivity">Description</p>
            <p className="Guide">Guide</p>
            <div className="FuckingDangerosity">
                <img className="pictoDead" src="./src/assets/logos/picto-cardDetails.png" />
                <p>Dangerosité</p>
            </div>
            <p className="Age">age reco</p>
            <p className="Price">prix</p>
            <p className="Country">pays + ville</p>
        </div>
    );
};

export default DestinationDetails;