import React, { useState } from "react";
import MiniCard from "../miniCard/MiniCard";
import { voyageData } from "../../utils/voyageData";
import { voyageDetails } from "../../utils/voyageDetails";
import "./Destination.css";

const Destination = () => {

  const [selectCountry, setSelectCountry] = useState("");
  

  const handleChange = (e) => {
    setSelectCountry(e.target.value)
  }

  return (
    <div className="cardList">
      <h1>💥 DESTINATIONS 💥</h1>
      <form className="country_select">
        <label htmlFor="country_select">
          <select id="country_select" onChange={handleChange}>
            <option value="">---</option>
            {voyageDetails.map((element) => (
              <option key={element.id} value={element.name}>
                {element.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="country_data">
        {voyageData.filter((element) =>
          selectCountry === "" || selectCountry === element.country
        )

          .map((element) => (
            <li key={element.id_activity} className="country_details">
                      <MiniCard
                          activity={element.name_activity}
                          country={element.country}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Destination;
