import React from 'react';
import "./Planisphere.css";
import { voyageDetails } from '../../utils/voyageDetails';


const Planisphere = () => {
    const handleClickMap = (e) => {
        console.log(e.target)
    }
    return (
        <div className='planisphere'>
            <img className="planisphere_img" src="/src/assets/logos/map.png" alt="" />
            <div>{voyageDetails.map((country) => (
                <img onClick={handleClickMap} key={country.id} className={country.className_planisphere} src="src/assets/logos/valise-white.png" alt={country.name} />))}
            </div>
        </div>
    );
};

export default Planisphere;