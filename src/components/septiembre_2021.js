import React from 'react';
import styled from '@emotion/styled';

const Cal = styled.div`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  -moz-box-shadow:0px 3px 3px rgba(0, 0, 0, 0.25); 
  -webkit-box-shadow:0px 3px 3px rgba(0, 0, 0, 0.25); 
  margin:50px auto; 
  font: 13px/1.5 "Helvetica Neue", Helvatica, Arial, san-serif; 
  display:table;
`

const HeaderCal = styled.div`
  cursor:default; 
  background: #cd310d; 
  background: linear-gradient(top, #b32b0c, #cd310d); 
  height: 34px; 
  position: relative; 
  color:#fff;
  border-top-left-radius: 5px; 
  border-top-right-radius: 5px; 
  font-weight:bold; 
  text-shadow:0px -1px 0 #87260C; 
  text-transform: uppercase; 
`
const TitleMonth = styled.h3`
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

const Septiembre = () => {
  return ( 
    <Cal>
      <HeaderCal>
        <TitleMonth> Septiembre 2021 </TitleMonth> 
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
          <tbody> 
            <tr><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>1</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>2</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>3</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>4</DaysNumber></tr> 
            <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellow'}}>5</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>6</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>7</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>8</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>9</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>10</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>11</DaysNumber></tr> 
            <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'pink'}}>12</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>13</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>14</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>15</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>16</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>17</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>18</DaysNumber></tr> 
            <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'pink'}}>19</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>20</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>21</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>22</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>23</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>24</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>25</DaysNumber></tr> 
            <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellowgreen'}}>26</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>27</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>28</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>29</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>30</DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber></tr>
          </tbody> 
        </Curr>
      </CalFrame>
    </Cal>
   );
}
 
export default Septiembre;