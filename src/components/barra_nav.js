import React, { useState } from 'react';
import styled from '@emotion/styled';

const NavBarra = styled.nav`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #300047;
  color: white;
`
const Title = styled.h3`
  padding: 10px;
`
const SelectGurda = styled.select`
  font-weight: 1000;
  width: 50%;
`

const BarraNav = ({saveDato}) => {
  const [addrtype] = useState(["Seleccione su nombre","Miguel Martin", "Jhon Ortega", "Jose Matoma"])
  const Add = addrtype.map(Add => Add
  )
  const handleAddrTypeChange = (e) => saveDato(((addrtype[e.target.value])))

  return ( 
    <NavBarra>
      <Title>Calendario 2021</Title>
      < SelectGurda
        onChange={e => handleAddrTypeChange(e)} >
        {
          Add.map((address, key) => <option value={key} key={key}>{address}</option>)
        }
      </ SelectGurda >
    </NavBarra>
   );
}
 
export default BarraNav;