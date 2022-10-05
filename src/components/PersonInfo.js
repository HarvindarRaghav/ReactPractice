import React ,{useState} from 'react'


export default function PersonInfo() {
let cnt=0;
const[sobj,setcount] = useState({
  cnt:0,
  mflag:true
});



const cntHandler=(op) =>{
  let tC=sobj.cnt;
  if(op === '+'){
    tC++;
    setcount({...sobj,cnt:tC})
  } if(op === '-'){
   tC--;
   setcount({...sobj,cnt:tC})
  }
  if(op === '*'){
   tC= (tC*tC);
    setcount({...sobj,cnt:tC})
  } if(op === '/'){
    tC= (tC/tC);
    setcount({...sobj,cnt:tC})
  }
  

}

const btnStyle={

  backgroundColor: "#282c34",
  width: "100px",
  height: "50px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "blueviolet"
}


return (
  
  <div className="PersonInfo">
    <h1>Counter: {sobj.cnt}</h1>
    <button className="btcs" onClick={() =>cntHandler('+')}>increment</button>
    <button style = {btnStyle} onClick={() =>cntHandler('-')}>decrement</button>
    <button style = {btnStyle} onClick={() =>cntHandler('*')}>multiply</button>
    <button style = {btnStyle} onClick={() =>cntHandler('/')}>divide</button>
    <h1>{sobj.mflag.toString()}</h1>
    <h1>{JSON.stringify(sobj)}</h1>
    <button style = {btnStyle} onClick={() =>setcount({...sobj,mflag: !sobj.mflag})}>toggle</button>

  </div>
);
}

