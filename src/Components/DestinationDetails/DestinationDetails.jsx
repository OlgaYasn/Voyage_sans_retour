import React from 'react'
import './DestinationDetails.css'
import { voyageData } from '../../utils/voyageData'
import DestinationCardDetails from './DestinationCardDetails'

const DestinationDetails = () => {
  return (
    <div>
      {voyageData.map((element) => (
        <div key={element.id_activity}>
          <DestinationCardDetails
            activity={element.name_activity}
            description={element.description}
            age={element.age_recommended}
            guide={element.name_guide}
            image={element.image}
            country={element.country}
            city={element.city}
            price={element.price}
            dangerosity={element.dangerosity}
          />
        </div>
      ))}
    </div>
  )
}

export default DestinationDetails
