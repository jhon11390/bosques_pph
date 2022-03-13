import React, { useState } from 'react';
import styled from '@emotion/styled';


const NavBarra = styled.nav`
  width: 100%;
  height: 60px;
  padding-top: 120px;
  padding-bottom: 40px;
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
  width: 60%;
`

const SearchPeople = ({saveDato}) => {
  const [addrtype] = useState(["Seleccione su nombre","Miguel Martin", "Jhon Ortega", "Hermes Parra", "Recorredor"])
  const Add = addrtype.map(Add => Add
  )
  const handleAddrTypeChange = (e) => saveDato(((addrtype[e.target.value])))

  return (
    <div style={{position: 'fixed', width: '100%', zIndex: 2, top: 0}}>
      <NavBarra>
        <Title></Title>
        < SelectGurda className="form-select form-select-sm" aria-label=".form-select-sm example"
          onChange={e => handleAddrTypeChange(e)} >
          {
            Add.map((address, key) => <option value={key} key={key}>{address}</option>)
          }
        </ SelectGurda >
      </NavBarra>
    </div>
      
   );
}
 
export default SearchPeople;