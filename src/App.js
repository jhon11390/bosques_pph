import React, { useState } from 'react';
import { Routes, Route, Link, Router } from "react-router-dom";
import Year_2022 from './components/year_2022';
import Vehiculos from './components/vehiculos';
import Empleadas from './components/empleadas';
import BarraNav from './components/barra_nav'


function App() {

  
  return (
      <>
        <BarraNav />
        <Routes>
          <Route path="/" element={<Year_2022 />} />
          <Route path="vehiculos" element={<Vehiculos />} />
          <Route path="empleadas" element={<Empleadas />} />
        </Routes>
      </>
  );
}

export default App;
