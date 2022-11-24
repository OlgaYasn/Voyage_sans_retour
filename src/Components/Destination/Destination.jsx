import React from 'react';
import MiniCard from '../miniCard/MiniCard';
import { voyageData } from "../../utils/voyageData";
import { voyageDetails } from "../../utils/voyageDetails";
import "./Destination.css";

const Destination = () => {
    return (
        <div className='cardList'>
            <h1>Destination</h1> 
            <form className='country_select'>
                <label htmlFor="country_select">

                    <select id="country_select">
                        <option value="">Select your country</option>
                        {voyageDetails.map((element) => (
                            <option  key={element.id} value={element.id}>{element.name}</option>
                        ))}
                    </select>
                </label>
            </form>
            <ul className='country_data'>
                {voyageData.map((element) => (
                    <li key={element.id_activity} className="country_details">
                        <MiniCard country={element.country} activity={element.name_activity} />

                    </li>
                ))}

            </ul>
            
        </div>
    );
};

export default Destination;