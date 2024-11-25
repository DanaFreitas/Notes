import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'









function Notebook(){
  let [Notenumber, setNotenumber] = useState(0);
console.log(Notenumber)
 let Increaseamount = () => {
  setNotenumber( Notenumber+= 1) 
  console.log(setNotenumber)
  console.log(Notenumber)
  }
    

return(
<><form>
<div>Add a note</div>
    <textarea></textarea>
    <button onClick = {Increaseamount}
      >Submit</button>

</form>





<IndividualNote />
</>
)


}

function IndividualNote(data){
  return(
    <div>


    </div>
  )
}





function App() {
return(
<>
<Notebook />
</>
)
}

export default App
