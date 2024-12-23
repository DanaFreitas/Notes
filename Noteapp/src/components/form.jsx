import Note from "../components/note";
import { useState } from "react";

export default function Form () {

  const [Notecontent, setNotecontent] = useState("");
  const [Noteid, setNoteid] = useState(0);
 // const [showNote, setShowNote] = useState(false); // Control visibility

const handleChange = (e) => {
  setNotecontent(e.target.value)

}

const handleSubmit =  (e) => {
  console.log(`${Noteid} is the original id`)
  setNoteid(Noteid + 1)
  console.log(`${Noteid} is the new id`)
 // setShowNote(true); // Trigger the Note rendering
  e.preventDefault()



//note={{Notecontent:Notecontent , Noteid:Noteid}}

}

const Countries = ["Atlantis", "Mu", "Lemuria"]
const Countryid= [0,1,2]
return (
    <div>
       {
        <form id="form">
          <div>Add a note</div>
          <label>
            Add a note
          </label>

            <textarea
              id={Noteid}
              name="text"
              onChange={handleChange}
              value={Notecontent}
            ></textarea>
          <button onClick={handleSubmit}>Submit</button>
        </form>
       }
       


<Note 
height={1000}
width={1000}
//Notecontent={`Note Content: ${Notecontent}`}
Noteid={`Note ID: ${Noteid}`}
//Testitem={Notecontent}
Legends={Countries}
Countryid={Countryid}
/>

    </div>

);
}


