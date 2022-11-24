import React from 'react';
import Destination from '../../Components/Destination/Destination';
import Navbar from '../../Components/Navbar/Navbar';
import Planisphere from '../../Components/Planisphere/Planisphere';
import "./Home.css";

const Home = () => {
    return (
        <div className='homeStyle'>
            <h1>Voyage sans retour</h1>
            <Navbar />
            <Destination />
            <Planisphere />
        </div>
    );
};

export default Home;