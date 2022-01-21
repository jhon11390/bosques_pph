import React, { useState } from 'react';
import BarraNav from './components/barra_nav'
import Enero from './components/enero_2022'
import Febrero from './components/febrero_2022'
import Marzo from './components/marzo_2022'
import Abril from './components/abril_2022'
import Mayo from './components/mayo_2022'
import Junio from './components/junio_2022'
import Julio from './components/julio_2022'
import Agosto from './components/agosto_2022'
import Septiembre from './components/septiembre_2022'
import Octubre from './components/octubre_2022'
import Noviembre from './components/noviembre_2022'
import Diciembre from './components/diciembre_2022'
import Footer from './components/footer'


function App() {

  const [dato, saveDato ] = useState('');

  return (
    <>
      <BarraNav saveDato = {saveDato}/>
      <div>
        <Enero />
        <Febrero />
        <Marzo />
        <Abril />
        <Mayo />
        <Junio />
        <Julio />
        <Agosto />
        <Septiembre />
        <Octubre />
        <Noviembre />
        <Diciembre />
      </div>
      <Footer dato={dato}/>
    </>
  );
}

export default App;
