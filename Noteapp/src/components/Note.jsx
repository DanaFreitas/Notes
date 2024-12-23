import Form from "./form"
import { useState } from "react";

  
export default function Note({height,width,Legends,Countries, Notecontent,Countryid})  {

  console.log(`${Legends} are the type of legends`)
  console.log(`${Countries} are the type of countries`)
  console.log(`The type of Legends is ${typeof Legends}`)
  console.log(`The type of Countries is ${typeof Countries}`)
 return(
   <ul>
   {Legends.map((Countries) => <li key={Countryid}> {Countries} </li>)}
    </ul>
    
   )



  //  return (    
  // <div>
  //   <div  height={height} width={width}>{Notecontent}</div>
  //  <button  height={height} width={width} type="submit">
  // X
  //  </button>
 
  // </div>
  // );
  console.log(Legends)
  console.log(Countries)
}