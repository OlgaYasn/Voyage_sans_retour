import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Intro from "./Pages/IntroPage/Intro";
import Reservation from "./Components/Reservation/Reservation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservations" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
