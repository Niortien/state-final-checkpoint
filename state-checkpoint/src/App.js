import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  
  const [Pupil,setPupil]= useState([
     {
      id:1,
      nom:"Kone",
      classe:"terminale"

    },
     {
      id:2,
      nom:"Kouadio",
      classe:"terminale"

    },
     {
      id:3,
      nom:"Koffi",
      classe:"terminale"

    }
  ])
  const [nom,setNom]=useState("")
  function addstudent(){
    let pupil={
    
      nom:nom,
      classe:"terminal"
    }
    let newPupil=[...Pupil]
    newPupil.push(pupil)
    setPupil(newPupil)
  }
  function typing(e){
    setNom(e.target.value)
  }


  function deletePupil(id){
    let delPupil=[...Pupil]
    let index = delPupil.findIndex(pupil=> pupil.id == id);
    delPupil.splice(index, 1);
    setPupil(delPupil);

    
  }

  
  return (
    
 
  
    <div className="App">
    <div>
    <input type="text" onChange={typing} />
    <button onClick={addstudent}>Add Pupil</button>
    
    </div>
      {Pupil.map(p => {

        
        return <div>
         

          <h1> Nom : {p.nom}</h1>
          <h2>{p.classe}</h2>
          <button onClick={()=>deletePupil(Pupil.id)}>x</button>
          <h1></h1>

          </div>
      })}
    </div>
  );
}

export default App;
