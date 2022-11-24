import React from 'react'
import Destination from '../../Components/Destination/Destination'
import DestinationDetails from '../../Components/DestinationDetails/DestinationDetails'
import Navbar from '../../Components/Navbar/Navbar'
import Planisphere from '../../Components/Planisphere/Planisphere'
import './Home.css'

const Home = () => {
  return (
    <div>
          <Navbar />
            <div className='main_section'>
            <Planisphere />
              <Destination />
            </div>
          <DestinationDetails />
    </div>
  )
}

export default Home
