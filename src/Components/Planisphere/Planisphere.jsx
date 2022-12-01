import React from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "./Planisphere.css";

const Planisphere = () => {
    return (
      <div className="planisphere">
      <ComposableMap>
      <Geographies geography="../../utils/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>
    );
};

export default Planisphere;