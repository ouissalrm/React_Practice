import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [calcul ,setcalcul] = useState("")
  const calculat = ()=>{
const age=document.getElementById('age').value;
const year = new Date().getFullYear()
setcalcul({
  hégirien: `Âge en années hégiriennes : ${age * 1.03}` ,
  grégorien : `Âge en années grégoriennes : GI${year-age}`
})
document.getElementById('age').value = '';

  }
  const supprimer=()=>{
    setcalcul("");
  }

  return (
    <div className="App">
     <h1>Calcul de l’année de naissance</h1>
     <input type='text' id='age' />
     <button onClick={calculat}>calcul </button>
       <button onClick={supprimer}>Supprimer</button>
       <p>{calcul.hégirien}</p>
   <p> {calcul.grégorien} </p>
    </div>
  );
}

export default App;
