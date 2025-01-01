import React from 'react';
import { Link } from "react-router-dom";
import styled from '@emotion/styled';

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
`;

const StyledNav = styled.nav`
  padding: 0.5rem 1rem;
  background-color: #ffffff !important;
`;

const NavBrand = styled(Link)`
  padding: 0.5rem;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }

  img {
    width: 45px;
    height: 40px;
    object-fit: contain;
  }
`;

const NavLink = styled(Link)`
  color: #333 !important;
  font-size: 0.9rem;
  padding: 0.5rem 1rem !important;
  transition: all 0.2s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #333;
    transition: width 0.2s ease;
  }

  &:hover:after {
    width: 80%;
  }

  &.active {
    font-weight: 500;
    
    &:after {
      width: 80%;
    }
  }
`;

const ToggleButton = styled.button`
  border: none !important;
  padding: 0.25rem !important;
  background-color: transparent;
  
  &:focus {
    box-shadow: none !important;
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const BarraNav = () => {
  const closeMenu = (e) => {
    e.target.parentElement.parentElement.parentElement.classList.remove("show");
  }

  return (
    <NavContainer>
      <StyledNav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavBrand className="navbar-brand" to="/">
            <img src="logo192.png" alt="imagen bosques 3" />
          </NavBrand>
          
          <ToggleButton 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDropdown" 
            aria-controls="navbarNavDropdown" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </ToggleButton>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav navbar-nav">
              <li className="nav-item" onClick={closeMenu}>
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Horarios 2025
                </NavLink>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <NavLink to="/vehiculos" className="nav-link">
                  Vehiculos
                </NavLink>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <NavLink to="/empleadas" className="nav-link">
                  Empleadas
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </StyledNav>
    </NavContainer>
  );
}
 
export default BarraNav;