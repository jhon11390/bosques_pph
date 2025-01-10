import React, { useState, useEffect } from 'react';
import SearchPeople from './searchPeople';
import Month from './month';
import Footer from './footer';


function Year_2022() {
  const [dato, saveDato ] = useState('');
  const diaHoy = new Date()
  let mes = diaHoy.getMonth() * 280

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
        <Month 
          monthName="Enero 2025" 
          startDay={3}
          totalDays={31}
          initialColor="green"
          initialDays={1}
          specialDays={[1, 6]} 
        />
        <Month 
          monthName="Febrero 2025" 
          startDay={6}
          totalDays={28}
          initialColor="yellow"
          initialDays={0}
          specialDays={[]} 
        />
        <Month 
          monthName="Marzo 2025" 
          startDay={6}
          totalDays={31}
          initialColor="green"
          initialDays={0}
          specialDays={[24]} 
        />
        <Month 
          monthName="Abril 2025" 
          startDay={2}
          totalDays={30}
          initialColor="green"
          initialDays={1}
          specialDays={[17, 18]} 
        />
        <Month 
          monthName="Mayo 2025" 
          startDay={4}
          totalDays={31}
          initialColor="green"
          initialDays={1}
          specialDays={[1]} 
        />
        <Month 
          monthName="Junio 2025" 
          startDay={0}
          totalDays={30}
          initialColor="yellow"
          initialDays={0}
          specialDays={[2, 23, 30]} 
        />
        <Month 
          monthName="Julio 2025" 
          startDay={2}
          totalDays={31}
          initialColor="yellow"
          initialDays={0}
          specialDays={[]} 
        />
        <Month 
          monthName="Agosto 2025" 
          startDay={5}
          totalDays={31}
          initialColor="yellow"
          initialDays={1}
          specialDays={[7, 18]} 
        />
        <Month 
          monthName="Septiembre 2025" 
          startDay={1}
          totalDays={30}
          initialColor="blue"
          initialDays={0}
          specialDays={[]} 
        />
        <Month 
          monthName="Octubre 2025" 
          startDay={3}
          totalDays={31}
          initialColor="blue"
          initialDays={0}
          specialDays={[13]} 
        />
        <Month 
          monthName="Noviembre 2025" 
          startDay={6}
          totalDays={30}
          initialColor="blue"
          initialDays={1}
          specialDays={[3, 17]} 
        />
        <Month 
          monthName="Diciembre 2025" 
          startDay={1}
          totalDays={31}
          initialColor="blue"
          initialDays={1}
          specialDays={[8, 25]} 
        />
      </div>
      <Footer dato={dato} monthActual={monthActual}/>
    </>
    
  );
}


const turnos = [{dia: "Pedro Diaz", nocturno: "Miguel Martin"}, {dia: "Jhon Ortega", nocturno: "Pedro Diaz"}, {dia: "Jhon Ortega", nocturno: "Pedro Diaz"}, {dia: "Miguel Martin", nocturno: "Jhon Ortega"}, {dia: "Miguel Martin", nocturno: "Jhon Ortega"}, {dia: "Pedro Diaz", nocturno: "Miguel Martin"}]

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