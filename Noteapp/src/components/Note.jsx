import Form from "./form"
import { useState } from "react";

  
export default function Note(props)
  // height,width,Notecontent
  {

const Countries = props.Countries


return(


  <div>
  
  {Countries.map((vvvvv) => (


<div key={vvvvv.id}>
<p>
  Country Name: <span>{vvvvv.name}</span>
</p>
<p>
  Capital: <span>{vvvvv.capital}</span>
</p>
<p>Population: <span>{vvvvv.population}</span>
</p>
</div>  



  ))}
  
  
  
  </div>
)







//   console.log(`${Legends} are the type of legends`)
//   console.log(`${Countries} are the type of countries`)
//   console.log(`The type of Legends is ${typeof Legends}`)
//   console.log(`The type of Countries is ${typeof Countries}`)
//  return(
//    <ul>
//    {Legends.map((Countries) => <li key={Countryid}> {Countries} </li>)}
//     </ul>
    
//    )



  //   return (    
  //  <div style={{ backgroundColor: 'blue', textAlign: 'center' }}>
  //    <div  height={height} width={width}>{Notecontent}</div>
  //   <button  height={height} width={width} type="submit">
  //  X
  //   </button>
 
  //  </div>
  //  );




  }