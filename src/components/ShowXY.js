import React , {useState,useEffect} from 'react'

export default function ShowXY() {

  
  const[strXY, changeXY] = useState("0","0") ;

  const dispalyXY=e=>{
    let str= e.pageX + " , " + e.pageY ;
    changeXY(str);
    console.log(str);

  }

  useEffect (()=>{
    window.addEventListener('mousemove' , dispalyXY);
    return ()=>{
      window.removeEventListener('mousemove', dispalyXY)
    }

  })
      return (
        <div className='ShowXY'>
          <h1>{strXY}</h1>
          
        </div>
      
    );
  }


