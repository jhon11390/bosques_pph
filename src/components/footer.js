import React from 'react';
import styled from '@emotion/styled';

const FooterPages = styled.footer`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0px;
  background-color: white;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  background-color: #6c537e;
`
const ColorsTurnos = styled.div`
  width: 80px;
  height: 40px;
  background-color: yellowgreen;
  color: black;
  text-shadow: 1px 1px 1px black;
  display:flex;
  justify-content: center;
  align-items: center;
`
const ColorsTurnos2 = styled.div`
  width: 80px;
  height: 40px;
  background-color: yellow;
  color: black;
  text-shadow: 1px 1px 1px black;
  display:flex;
  justify-content: center;
  align-items: center;
`
const ColorsTurnos3 = styled.div`
  width: 80px;
  height: 40px;
  background-color: pink;
  color: black;
  text-shadow: 1px 1px 1px blue;
  display:flex;
  justify-content: center;
  align-items: center;
`

const Footer = ({dato}) => {
  
  const prueba = dato
  const days = [];
  if(prueba==="Miguel Martin"){
    days.push("Noche")
    days.push("Descanso")
    days.push("Dia")
  } else if(prueba==="Jhon Ortega"){
    days.push("Descanso")
    days.push("Dia")
    days.push("Noche")
  } else if(prueba==="Jose Matoma"){
    days.push("Dia")
    days.push("Noche")
    days.push("Descanso")
  } else {
    days.push("0")
    days.push("0")
    days.push("0")
  }

  
  return ( 
    <FooterPages>
      <ColorsTurnos>{days[0]}</ColorsTurnos>
      <ColorsTurnos2>{days[1]}</ColorsTurnos2>
      <ColorsTurnos3>{days[2]}</ColorsTurnos3>
    </FooterPages>
   );
}
 
export default Footer;