import React from 'react';
import "./Planisphere.css";
import Countries from "../../utils/voyageDetails";


const Planisphere = () => {
    console.log(Countries.name)
    return (
        <div className='planisphere_img'>
            <img src="/src/assets/logos/map.png" alt="" />
            <div>{Countries.map((country) => (
                <img key={country.id} className={country.className} src="src/assets/logos/valise01-black.png" alt={country.name} />))}
            </div>
        </div>
    );
};

export default Planisphere;