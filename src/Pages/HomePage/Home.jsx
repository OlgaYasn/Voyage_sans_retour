import React from 'react'
import Destination from '../../Components/Destination/Destination'
import Navbar from '../../Components/Navbar/Navbar'
import Planisphere from '../../Components/Planisphere/Planisphere'
import './Home.css'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Destination />
      <Navbar />
      <Planisphere />
    </div>
  )
}

export default Home
