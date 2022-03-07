import React from 'react';
import { Link } from "react-router-dom";


const BarraNav = () => {

  const contenedorDiv = document.querySelector('#navbarNavDropdown');

  function showDiv () {
    if(contenedorDiv.classList.contains('show')){
      
      contenedorDiv.classList.remove('show');

    }
    
  }
  
  
  return (
    <div style={{position: 'fixed', width: '100%', zIndex: 10}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={() => showDiv()}>
            <img src="logo192.png"  width="60" height="54" alt="imagen bosques 3" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav navbar-nav">
              <li className="nav-item" onClick={() => showDiv()}>
                <Link to="/" className="nav-link active" aria-current="page">Horarios 2022</Link>
              </li>
              <li className="nav-item" onClick={() => showDiv()}>
                <Link to="/vehiculos" className="nav-link" aria-current="page">Vehiculos</Link>
              </li>
              <li className="nav-item" onClick={() => showDiv()}>
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