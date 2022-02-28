import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";


const NavBarra = styled.nav`
  width: 100%;
  height: 60px;
  
  top: 0;
  background-color: white;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
`
const Title = styled.h3`
  padding: 10px;
`
const SelectGurda = styled.select`
  font-weight: 1000;
  width: 50%;
`

const BarraNav = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="logo192.png"  width="50" height="44" alt="imagen bosques 3" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Horarios 2022</Link>
              </li>
              <li className="nav-item">
                <Link to="/vehiculos" className="nav-link" aria-current="page">Vehiculos</Link>
              </li>
              <li className="nav-item">
                <Link to="/empleadas" className="nav-link" aria-current="page">Empleadas</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Seleccione su nombre
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Jhon Ortega</a></li>
                  <li><a className="dropdown-item" href="#">Miguel Martin</a></li>
                  <li><a className="dropdown-item" href="#">Ferney Pinzon</a></li>
                  <li><a className="dropdown-item" href="#">Hermes Parra</a></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
   );
}
 
export default BarraNav;