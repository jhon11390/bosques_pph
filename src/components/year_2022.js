import React, { useState } from 'react';
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

  const [dato, saveDato ] = useState('');

  return (
    <>
      <SearchPeople saveDato = {saveDato}/>
      <div style={{marginTop: '170px'}}>
        <Enero guarda = {dato}/>
        <Febrero guarda = {dato}/>
        <Marzo guarda = {dato}/>
        <Abril guarda = {dato}/>
        <Mayo guarda = {dato}/>
        <Junio guarda = {dato}/>
        <Julio guarda = {dato}/>
        <Agosto guarda = {dato}/>
        <Septiembre guarda = {dato}/>
        <Octubre guarda = {dato}/>
        <Noviembre guarda = {dato}/>
        <Diciembre guarda = {dato}/>
      </div>
      <Footer dato={dato}/>
    </>
    
  );
}

export default Year_2022;