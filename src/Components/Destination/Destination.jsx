import React from 'react';
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import "./Destination.css";
import { voyageData } from "../../utils/voyageData";

const Destination = () => {
    return (
        <div className='cardList'>
            <h1>Destination</h1> 
            <form className='country_select'>
                <label htmlFor="country_select">

                    <select id="country_select">
                        <option value="">Select your country</option>
                        {voyageData.map((element) => (
                            <option  key={element.id_activity} value={element.id_activity}>{element.country}</option>
                        ))}
                    </select>
                </label>
            </form>
            
        </div>
    );
};

export default Destination;