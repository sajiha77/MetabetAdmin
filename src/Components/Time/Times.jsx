import React,{useState} from 'react';




function Times(){

  const [time,setTime]=useState();


  function updateIt(){

    let y= new Date().toLocaleTimeString();
    
        setTime(y);
      }


      setInterval(updateIt,1000);


return (   
<>
{time}
</>
)



}


export default Times;