import React, { useState } from 'react';
import styled from '@emotion/styled';

const NavBarra = styled.nav`
  width: 100%;
  height: auto;
  padding: 1rem;
  margin-top: 80px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
  white-space: nowrap;
`;

const SelectGuarda = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #333;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  width: auto;
  min-width: 200px;
  max-width: 100%;
  
  &:hover {
    border-color: #999;
  }
  
  &:focus {
    outline: none;
    border-color: #666;
    box-shadow: 0 0 0 2px rgba(0,0,0,0.05);
  }

  option {
    padding: 0.5rem;
  }
`;

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 2;
  top: 0;
  background-color: #ffffff;
`;

const SearchPeople = ({saveDato}) => {
  const [addrtype] = useState([
    "Seleccione su nombre",
    "Miguel Martin", 
    "Jhon Ortega", 
    "Pedro Diaz", 
    "Recorredor"
  ]);

  const handleAddrTypeChange = (e) => saveDato(addrtype[e.target.value]);
  
  const month = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  const diaHoy = new Date();
    
  return (
    <Container>
      <NavBarra>
        <Title>
          {`${diaHoy.getDate()} de ${month[diaHoy.getMonth()]} del ${diaHoy.getFullYear()}`}
        </Title>
        <SelectGuarda 
          onChange={handleAddrTypeChange}
          defaultValue=""
        >
          {addrtype.map((address, key) => (
            <option value={key} key={key}>
              {address}
            </option>
          ))}
        </SelectGuarda>
      </NavBarra>
    </Container>
  );
}

export default SearchPeople;