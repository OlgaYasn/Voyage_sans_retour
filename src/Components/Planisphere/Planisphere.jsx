import React from 'react';
import "./Planisphere.css";
import { voyageDetails } from '../../utils/voyageDetails';


const Planisphere = () => {
    return (
        <div className='planisphere'>
            <img className="planisphere_img" src="/src/assets/logos/map.png" alt="" />
            <div>{voyageDetails.map((country) => (
                <img key={country.id} className={country.className_planisphere} src="src/assets/logos/valise01-black.png" alt={country.name} />))}
            </div>
        </div>
    );
};

export default Planisphere;