import React,{useState} from 'react';



function Hooks(){


  const [value,setValue]=useState(0);


  return(
  <>
<h1>{value}</h1>

<button onClick={()=>setValue(value+1)}>Inc</button>
<button onClick={()=>setValue(value-1)}>Dec</button>
  
  
  
  </>
  )



}


export default Hooks;