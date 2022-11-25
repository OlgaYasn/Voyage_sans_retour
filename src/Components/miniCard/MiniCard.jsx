/* eslint-disable react/prop-types */
import React from 'react';


const MiniCard = ({country, activity}) => {
    return (
        <div >
            <p>{country}</p>
            <p>{activity}</p>
        </div>
    );
};

export default MiniCard;