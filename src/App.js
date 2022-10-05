import './App.css';
import PersonInfo from './components/PersonInfo';
import ShowXY from './components/ShowXY';
import React , {useState} from 'react'


export default function  App() {
 
  const[showData,changeState] = useState(true);
  const btnStyle1={

    backgroundColor: "#282c34",
    width: "100px",
    height: "50px",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "blueviolet"
  }
  

 

  return (
    
    <div className="App">
      <PersonInfo/>
     {showData ? <ShowXY/>: <h1>Nodata</h1>}
    <button style = {btnStyle1} onClick={()=>changeState(!showData)}>Toggle</button>

    </div>
    
  );
}

