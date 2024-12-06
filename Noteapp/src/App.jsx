import { useState } from "react";
import { createRoot } from 'react-dom/client';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Indexnumber, setIndexnumber] = useState(0);
  const [Notecontent, setNotecontent] = useState('');
  const [Notelist, setNotelist] = useState([])
  const container = document.getElementById('form');

 

  const handleChange = (event) => {
  setNotecontent(event.target.value);
  };



const Notecreate = (e, Notecontent) => {  
e.preventDefault();

    setIndexnumber((prevIndexnumber) => {
        const newindex = prevIndexnumber + 1;
    return prevIndexnumber + newindex;});


    setNotelist ((Notecontent) => [ ...Notelist, {id:Indexnumber, name:Notecontent} ],
    //return Notecontent
    //console.log(`${Notelist} is the notelist`)
)}; 

  return (
    <>
      {
        <form onSubmit={Notecreate} id="form">
          <div>Add a note</div>
          <label>
            Add a note
            <textarea
              id="text"
              name="text"
              value={Notecontent}
              onChange={handleChange}
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      }
      

      <IndividualNote />
    </>
  );
}

 function IndividualNote(Notecontent) {
   return <div>{}</div>;
 }

export default App;
