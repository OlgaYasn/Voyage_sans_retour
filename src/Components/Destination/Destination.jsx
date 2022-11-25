import React, { useState } from "react";
import MiniCard from "../miniCard/MiniCard";
import { voyageData } from "../../utils/voyageData";
import { voyageDetails } from "../../utils/voyageDetails";
import "./Destination.css";

const Destination = () => {

  const [selectCountry, setSelectCountry] = useState("");
  const [selectActivity, setSelectActivity] = useState("");

  const handleChange = (e) => {
    setSelectCountry(e.target.value)
  }

  const handleClick = (el) => {
    //setSelectActivity(el.target.value)
    console.log(el.target.innerText
    )
  }

  return (
    <div className="cardList">
      <h1>Destination</h1>
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
              <button type="button" onClick={handleClick}><MiniCard
                activity={element.name_activity}
              /></button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Destination;
