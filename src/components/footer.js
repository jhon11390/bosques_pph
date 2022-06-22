import React from 'react';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";


const FooterPages = styled.footer`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0px;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  background-color: rgba(33, 37, 41, 0.98);
`
const ColorsTurnos = styled.div`
  width: 110px;
  height: 40px;
  background-color: yellowgreen;
  color: black;
  text-shadow: 1px 1px 1px black;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
`
const ColorsTurnos2 = styled.div`
  width: 110px;
  height: 40px;
  background-color: yellow;
  color: black;
  text-shadow: 1px 1px 1px black;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
`
const ColorsTurnos3 = styled.div`
  width: 110px;
  height: 40px;
  background-color: pink;
  color: black;
  text-shadow: 1px 1px 1px black;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
`

const MonthActive = styled.div`
  position: absolute;
  top: -70%;
  right: 5%;
`

const CarActive = styled.div`
  position: absolute;
  top: -150%;
  right: 5%;
`

const MaidActive = styled.div`
  position: absolute;
  top: -230%;
  right: 5%;
`


const Footer = ({dato, monthActual}) => {
  
  const prueba = dato
  const days = [];
  if(prueba==="Miguel Martin"){
    days.push({imagen: "moon.png", texto: "Noche"})
    days.push({imagen: "resting.png", texto: "Descanso"})
    days.push({imagen: "sun.png", texto: "Dia"})
  } else if(prueba==="Jhon Ortega"){
    days.push({imagen: "resting.png", texto: "Descanso"})
    days.push({imagen: "sun.png", texto: "Dia"})
    days.push({imagen: "moon.png", texto: "Noche"})
  } else if(prueba==="Hermes Parra"){
    days.push({imagen: "sun.png", texto: "Dia"})
    days.push({imagen: "moon.png", texto: "Noche"})
    days.push({imagen: "resting.png", texto: "Descanso"})
  } else if(prueba==="Recorredor"){
    days.push({imagen: "user.png", texto: ""})
    days.push({imagen: "resting.png", texto: "Descanso"})
    days.push({imagen: "user.png", texto: ""})
  }else {
    days.push({imagen: "user.png", texto: ""})
    days.push({imagen: "user.png", texto: ""})
    days.push({imagen: "user.png", texto: ""})
  }

  

  
  return ( 
    <FooterPages>
      <MonthActive type="button" className="btn btn-dark" onClick={monthActual}>
        <img src="planning.png" width="25" style={{filter: "invert(100%)"}} alt="imagen de boton"/>
      </MonthActive>
      <CarActive type="button" className="btn btn-dark" >
        <Link to="/vehiculos">
          <img src="car.png" width="25" style={{filter: "invert(100%)"}} alt="imagen de boton"/>
        </Link>  
      </CarActive>
      <MaidActive type="button" className="btn btn-dark">
        <Link to="/empleadas">
          <img src="cleaning-lady.png" width="25" style={{filter: "invert(100%)"}} alt="imagen de boton"/>
        </Link>
      </MaidActive>
      <ColorsTurnos>
        <img src={`${days[0].imagen}`} width="25" alt="imagen user" style={{paddingRight: "4px"}}/>
        {days[0].texto}
      </ColorsTurnos>
      <ColorsTurnos2>
        <img src={`${days[1].imagen}`} width="25" alt="imagen user" style={{paddingRight: "4px"}}/>
        {days[1].texto}
      </ColorsTurnos2>
      <ColorsTurnos3>
        <img src={`${days[2].imagen}`} width="25" alt="imagen user" style={{paddingRight: "4px"}}/>
        {days[2].texto}
      </ColorsTurnos3>
    </FooterPages>
   );
}
 
export default Footer;