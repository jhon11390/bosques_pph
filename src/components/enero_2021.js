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

const Enero = () => {
  return ( 
    <Cal>
      <HeaderCal>
        <TitleMonth> Enero 2021 </TitleMonth> 
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
            <tr><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber></DaysNumber><DaysNumber style={{border: '2px solid red', backgroundColor: "yellow"}}>1</DaysNumber><DaysNumber style={{backgroundColor: "yellow"}}>2</DaysNumber></tr> 
            <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'pink'}}>3</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>4</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>5</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>6</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>7</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>8</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>9</DaysNumber></tr> 
            <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'pink'}}>10</DaysNumber><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellowgreen'}}>11</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>12</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>13</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>14</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>15</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>16</DaysNumber></tr> 
            <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellowgreen'}}>17</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>18</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>19</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>20</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>21</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>22</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>23</DaysNumber></tr> 
            <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellowgreen'}}>24</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>25</DaysNumber><DaysNumber style={{backgroundColor: 'yellow'}}>26</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>27</DaysNumber><DaysNumber style={{backgroundColor: 'pink'}}>28</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>29</DaysNumber><DaysNumber style={{backgroundColor: 'yellowgreen'}}>30</DaysNumber></tr>
            <tr><DaysNumber style={{border: '2px solid red', backgroundColor: 'yellow'}}>31</DaysNumber></tr>
          </tbody> 
        </Curr>
      </CalFrame>
    </Cal>
   );
}
 
export default Enero;