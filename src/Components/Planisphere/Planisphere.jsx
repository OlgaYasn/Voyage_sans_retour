import React from 'react';
import "./Planisphere.css"

const Planisphere = () => {
    return (
        <div className='planisphere_img'>
            <img src="/src/assets/logos/map.png" alt="" />
            <img className="argentina" src="src/assets/logos/valise01-black.png" alt="Argentine" />
        </div>
    );
};

export default Planisphere;