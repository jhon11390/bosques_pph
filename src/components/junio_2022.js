import React from 'react';
import styled from '@emotion/styled';

const Cal = styled.div`
 box-shadow: ${props => props.monthActive ? "30px 30px 30px rgba(255, 0, 0, 0.9)" : "20px 20px 20px rgba(0, 0, 0, 0.75)"};
  -moz-box-shadow: ${props => props.monthActive ? "30px 30px 30px rgba(255, 0, 0, 0.9)" : "20px 20px 20px rgba(0, 0, 0, 0.75)"};
  -webkit-box-shadow: ${props => props.monthActive ? "30px 30px 30px rgba(255, 0, 0, 0.9)" : "20px 20px 20px rgba(0, 0, 0, 0.75)"};
  margin:50px auto; 
  font: 13px/1.5 "Helvetica Neue", Helvatica, Arial, san-serif; 
  display:table;
`

const HeaderCal = styled.div`
  cursor:default; 
  background: #cd310d; 
  background: black; 
  height: 34px; 
  position: relative; 
  color:#fff;
  border-top-left-radius: 5px; 
  border-top-right-radius: 5px; 
  font-weight:bold; 
  text-shadow:0px -1px 0 #87260C; 
  text-transform: uppercase; 
`
const TitleMonth = styled.h6`
  display: flex;
  justify-content: center;
  padding-top: 3%;
`

const TableDays = styled.table`
  background:#fff; 
  font-weight: 1000;
`

const Days = styled.td`
  color:#2b2b2b; 
  width:30px; 
  height:30px; 
  line-height:30px; 
  text-align:center; 
  border:1px solid #e6e6e6; 
  cursor:default; 
  text-transform:uppercase; 
  font-size:80%; 
  color:#9e9e9e; 
`

const CalFrame = styled.div`
  background:#ededed; 
  color:#8c8c8c; 
  box-shadow:1px 1px 0px #fff inset; 
`
const Curr = styled.table`
  float: left;
  background-color: white;
  font-weight: 1000;
`

const DaysNumber = styled.td`
  color:#2b2b2b; 
  width:30px; 
  height:30px; 
  line-height:30px; 
  text-align:center; 
  border:1px solid #e6e6e6; 
  cursor:default; 
  font-size:80%; 
  position:relative; 
`

const DayClound = styled.div`
  background-color: black;
  color: white;
  position: absolute;
  left: 10px;
  width: 65px;
  height: 80px;
  text-align: center;
  border-radius: 5px;
  & h1 {
    font-size: x-large;
    margin-top: 4px;
  };
  & p {
    font-size: x-large;
    font-weight: 900;
  }
`

const Junio = ({guarda, stylesMonths, dayToday, monthToday}) => {
  return ( 
    <Cal monthActive={stylesMonths}>
      <HeaderCal>
        <TitleMonth> Junio 2023 </TitleMonth> 
      </HeaderCal>
      <TableDays>
        <tbody>
          <tr>
            <Days>Dom</Days> 
            <Days>Lun</Days> 
            <Days>Mar</Days> 
            <Days>Mie</Days> 
            <Days>Jue</Days> 
            <Days>Vie</Days> 
            <Days>Sab</Days>
          </tr>
        </tbody>
      </TableDays>
      <CalFrame>
        <Curr> 
          {
            guarda === 'Recorredor' ?
            <tbody> 
              <tr><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>1</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>2</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>3</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'white'}}>4</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>5</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>6</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>7</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>8</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>9</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>10</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'white'}}>11</DaysNumber><DaysNumber style={{border: '2px solid red', backgroundColor: 'white'}}>12</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>13</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>14</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>15</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>16</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>17</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellow'}}>18</DaysNumber><DaysNumber style={{border: '2px solid red', backgroundColor: 'white'}}>19</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>20</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>21</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>22</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>23</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>24</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'white'}}>25</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>26</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>27</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>28</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>29</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>30</DaysNumber><DaysNumber></DaysNumber></tr>
            </tbody> 
            :
            <tbody> 
              <tr><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>1</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>2</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>3</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellowgreen'}}>4</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>5</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>6</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>7</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>8</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>9</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>10</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellowgreen'}}>11</DaysNumber><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellow'}}>12</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>13</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>14</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>15</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>16</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>17</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellow'}}>18</DaysNumber><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellow'}}>19</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>20</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>21</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>22</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>23</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>24</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellow'}}>25</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>26</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>27</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>28</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>29</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>30</DaysNumber><DaysNumber></DaysNumber></tr>
            </tbody> 
          }
          
        </Curr>
      </CalFrame>
      {stylesMonths ? 
        <DayClound>
          <h1>{monthToday}</h1>
          <p>{dayToday}</p>
        </DayClound>  
        : null
      }
    </Cal>
   );
}
 
export default Junio;