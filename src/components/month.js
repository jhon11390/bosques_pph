import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
`;

const MonthContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  margin: auto;
  font-family: 'Arial', sans-serif;
  position: relative;
`;

const MonthHeader = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  ${props => props.isCurrentMonth && css`
    &::after {
      content: '▶';
      color: #0077ff;
      font-size: 24px;
      animation: ${pulse} 2s infinite;
      display: inline-block;
      transform: rotate(90deg);
    }
  `}
`;

const WeekDaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 10px;
`;

const WeekDay = styled.div`
  text-align: center;
  font-size: 0.9em;
  color: #666;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

const Day = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => {
    if (!props.isCurrentMonth) return '#f5f5f5';
    switch(props.colorPattern) {
      case 'green': return '#90EE90';
      case 'yellow': return '#FFE599';
      case 'blue': return '#ADD8E6';
      default: return '#fff';
    }
  }};
  border-radius: 50%;
  font-size: 0.9em;
  color: ${props => props.isCurrentMonth ? '#333' : '#999'};
  cursor: pointer;
  transition: all 0.2s;
  border: ${props => 
    (props.isSunday || props.hasSpecialBorder) && props.isCurrentMonth 
      ? '3px solid rgba(255, 0, 0, 0.9)' 
      : props.isToday
      ? '3px solid #0077ff'
      : 'none'
  };
  
  ${props => props.isToday && css`
    animation: ${pulse} 2s infinite;
    font-weight: bold;
  `}

  &:hover {
    opacity: 0.8;
  }
`;

const Month = ({ 
  monthName, 
  startDay, 
  totalDays, 
  initialColor, 
  initialDays, 
  specialDays = []
}) => {
  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  
  const getColorPattern = (dayIndex) => {
    // Ajustamos el índice considerando los días iniciales
    const adjustedIndex = dayIndex + initialDays;
    const patternLength = 6; // 2 días por cada color (2*3 colores)
    const position = adjustedIndex % patternLength;
    
    // Determinamos el color inicial
    let colors;
    switch(initialColor) {
      case 'green':
        colors = ['green', 'green', 'yellow', 'yellow', 'blue', 'blue'];
        break;
      case 'yellow':
        colors = ['yellow', 'yellow', 'blue', 'blue', 'green', 'green'];
        break;
      case 'blue':
        colors = ['blue', 'blue', 'green', 'green', 'yellow', 'yellow'];
        break;
      default:
        colors = ['green', 'green', 'yellow', 'yellow', 'blue', 'blue'];
    }
    
    return colors[position];
  };
  
  const isCurrentDate = (day) => {
    const today = new Date();
    const [monthStr, yearStr] = monthName.split(' ');
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentDay = today.getDate();
    
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    return day === currentDay && 
          monthNames[currentMonth] === monthStr && 
          currentYear === parseInt(yearStr);
  };

  const isCurrentMonth = () => {
    const today = new Date();
    const [monthStr, yearStr] = monthName.split(' ');
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return monthNames[today.getMonth()] === monthStr && 
          today.getFullYear() === parseInt(yearStr);
  };

  const generateDays = () => {
    const days = [];
    // Agregar espacios vacíos para el inicio del mes
    for (let i = 0; i < startDay; i++) {
      days.push(<Day key={`empty-${i}`} isCurrentMonth={false} />);
    }
    
    // Agregar los días del mes
    for (let i = 1; i <= totalDays; i++) {
      const isSunday = (i + startDay - 1) % 7 === 0;
      days.push(
        <Day 
          key={i} 
          isCurrentMonth={true}
          colorPattern={getColorPattern(i-1)}
          isSunday={isSunday}
          hasSpecialBorder={specialDays.includes(i)}
          isToday={isCurrentDate(i)}
        >
          {i}
        </Day>
      );
    }
    
    return days;
  };

  return (
    <MonthContainer>
      <MonthHeader isCurrentMonth={isCurrentMonth()}>{monthName}</MonthHeader>
      <WeekDaysGrid>
        {weekDays.map(day => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
      </WeekDaysGrid>
      <DaysGrid>
        {generateDays()}
      </DaysGrid>
    </MonthContainer>
  );
};

export default Month;
