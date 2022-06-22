import React, { useState, useEffect } from 'react';
import SearchPeople from './searchPeople';
import Enero from './enero_2022'
import Febrero from './febrero_2022'
import Marzo from './marzo_2022'
import Abril from './abril_2022'
import Mayo from './mayo_2022'
import Junio from './junio_2022'
import Julio from './julio_2022'
import Agosto from './agosto_2022'
import Septiembre from './septiembre_2022'
import Octubre from './octubre_2022'
import Noviembre from './noviembre_2022'
import Diciembre from './diciembre_2022'
import Footer from './footer';


function Year_2022() {
  
  const [stylesMonths] = useState([0,1,2,3,4,5,6,7,8,9,10,11])
  
  const [dato, saveDato ] = useState('');
  const diaHoy = new Date()
  let mes = diaHoy.getMonth() * 280
  let mesActual = diaHoy.getMonth()
  const month = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
  

  // document.addEventListener('DOMContentLoaded', () => {
  //   window.scroll({
  //     top: mes,
  //     left: 100,
  //     behavior: 'smooth'
  //   });
  // })

  useEffect(() => {
    const diaHoy = new Date()
    let mes = diaHoy.getMonth() * 280
    const monthActual2 = () => {
      window.scroll({
        top: mes,
        left: 100,
        behavior: 'smooth'
      });
    }
    monthActual2()
  }, [])

 

  const monthActual = () => {
    window.scroll({
      top: mes,
      left: 100,
      behavior: 'smooth'
    });
  }
  
 
  return (
    <>
      <SearchPeople saveDato = {saveDato}/>
      <div style={{marginTop: '170px', marginBottom: '100px'}}>
        <Enero guarda = {dato} stylesMonths={stylesMonths[0] === mesActual} dayToday={diaHoy.getDate()} monthToday={month[diaHoy.getMonth()]}/>
        <Febrero guarda = {dato} stylesMonths={stylesMonths[1] === mesActual} dayToday={diaHoy.getDate()} monthToday={month[diaHoy.getMonth()]}/>
        <Marzo guarda = {dato} stylesMonths={stylesMonths[2] === mesActual} dayToday={diaHoy.getDate()} monthToday={month[diaHoy.getMonth()]}/>
        <Abril guarda = {dato} stylesMonths={stylesMonths[3] === mesActual} dayToday={diaHoy.getDate()} monthToday={month[diaHoy.getMonth()]}/>
        <Mayo guarda = {dato} stylesMonths={stylesMonths[4] === mesActual} dayToday={diaHoy.getDate()} monthToday={month[diaHoy.getMonth()]}/>
        <Junio guarda = {dato} stylesMonths={stylesMonths[5] === mesActual} dayToday={diaHoy.getDate()} monthToday={month[diaHoy.getMonth()]}/>
        <Julio guarda = {dato} stylesMonths={stylesMonths[6] === mesActual} dayToday={diaHoy.getDate()} monthToday={month[diaHoy.getMonth()]}/>
        <Agosto guarda = {dato} stylesMonths={stylesMonths[7] === mesActual} dayToday={diaHoy.getDate()} monthToday={month[diaHoy.getMonth()]}/>
        <Septiembre guarda = {dato} stylesMonths={stylesMonths[8] === mesActual} dayToday={diaHoy.getDate()} monthToday={month[diaHoy.getMonth()]}/>
        <Octubre guarda = {dato} stylesMonths={stylesMonths[9] === mesActual} dayToday={diaHoy.getDate()} monthToday={month[diaHoy.getMonth()]}/>
        <Noviembre guarda = {dato} stylesMonths={stylesMonths[10] === mesActual} dayToday={diaHoy.getDate()} monthToday={month[diaHoy.getMonth()]}/>
        <Diciembre guarda = {dato} stylesMonths={stylesMonths[11] === mesActual} dayToday={diaHoy.getDate()} monthToday={month[diaHoy.getMonth()]}/>
      </div>
      <Footer dato={dato} monthActual={monthActual}/>
    </>
    
  );
}


const turnos = [{dia: "Hermes Parra", nocturno: "Miguel Martin"}, {dia: "Jhon Ortega", nocturno: "Hermes Parra"}, {dia: "Jhon Ortega", nocturno: "Hermes Parra"}, {dia: "Miguel Martin", nocturno: "Jhon Ortega"}, {dia: "Miguel Martin", nocturno: "Jhon Ortega"}, {dia: "Hermes Parra", nocturno: "Miguel Martin"}]

function dia(numero) {
if(numero <= 6){
  return turnos[numero-1];
}else {
  if(numero % 6 === 0){
    return turnos[(numero - ((Math.trunc(numero/6)-1) * 6)) - 1];
  } else {
    return turnos[(numero - (Math.trunc(numero/6) * 6)) - 1];
  }
}
 
}

function verGuarda(objeto) {
  let hora = 12
  if(hora >= 6 && hora <=17){
    console.log(objeto.dia);
  }else{
    console.log(objeto.nocturno);
  }
}

const prueba = dia(33)

verGuarda(prueba)



export default Year_2022;