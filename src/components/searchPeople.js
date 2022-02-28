import React, { useState } from 'react';
import styled from '@emotion/styled';


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

const SearchPeople = ({saveDato}) => {
  const [addrtype] = useState(["Seleccione su nombre","Miguel Martin", "Jhon Ortega", "Vigilante 3", "Recorredor"])
  const Add = addrtype.map(Add => Add
  )
  const handleAddrTypeChange = (e) => saveDato(((addrtype[e.target.value])))

  return (
    <>
      <NavBarra>
        <Title></Title>
        < SelectGurda
          onChange={e => handleAddrTypeChange(e)} >
          {
            Add.map((address, key) => <option value={key} key={key}>{address}</option>)
          }
        </ SelectGurda >
      </NavBarra>
    </>
      
   );
}
 
export default SearchPeople;