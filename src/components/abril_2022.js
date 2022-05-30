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

const Abril = ({guarda, stylesMonths, dayToday, monthToday}) => {
  return ( 
    <Cal monthActive={stylesMonths}>
      <HeaderCal>
        <TitleMonth> Abril 2022 </TitleMonth> 
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
              <tr><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber style={{backgroundColor: "white"}}>1</DaysNumber><DaysNumber style={{backgroundColor: "white"}}>2</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'white'}}>3</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>4</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>5</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>6</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>7</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>8</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>9</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'white'}}>10</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>11</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>12</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>13</DaysNumber><DaysNumber style={{border: '2px solid red', backgroundColor: 'white'}}>14</DaysNumber><DaysNumber style={{border: '2px solid red', backgroundColor: 'white'}}>15</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>16</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'white'}}>17</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>18</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>19</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>20</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>21</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>22</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>23</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellow'}}>24</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>25</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>26</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>27</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>28</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>29</DaysNumber><DaysNumber style={{backgroundColor: 'white'}}>30</DaysNumber></tr>
            </tbody> 
            :
            <tbody> 
              <tr><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber style={{backgroundColor: "yellowgreen"}}>1</DaysNumber><DaysNumber style={{backgroundColor: "yellow"}}>2</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellow'}}>3</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>4</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>5</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>6</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>7</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>8</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>9</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'pink'}}>10</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>11</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>12</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>13</DaysNumber><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellow'}}>14</DaysNumber><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellow'}}>15</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>16</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'pink'}}>17</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>18</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>19</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>20</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>21</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>22</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>23</DaysNumber></tr> 
              <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellowgreen'}}>24</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>25</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>26</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>27</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>28</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>29</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>30</DaysNumber></tr>
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
 
export default Abril;