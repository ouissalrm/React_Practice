import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import { Alert } from 'bootstrap';
import Model from './Model';

function App() {

  const [erreur ,seterreur ]= useState(null)
  const [isVisibles ,setIsVisible] = useState(false)

  const [Form , SetForm] =useState({
    Name : "",
    PhoneNumber:"",
    Age:"",
    Employee : false,
    Salary :"",
  })

  const disabled =
Form.Name === "" ||
Form.Age === "" ||
 Form.Employee === "" || Form.PhoneNumber === "" || Form.Salary === ""

  // const handleSubmit = () => {
  //   if(Form.PhoneNumber.length>11){
  //     alert("nUMBER > 10")
  //   }
  //   else if(Form.Age.length>3){
  //     alert("age >3")
  //   }
  //   else{
  //     alert("form is valid")
  //   }
  // };

 
const submiit = ()=>{

  if(Form.Age>20){
    seterreur("L’âge renseigné n’est pas valide")
  }
  if(Form.PhoneNumber.length>=10 ||Form.PhoneNumber.length<=10){
seterreur("Le numéro de téléphone doit contenir uniquement 10 chiffres")
  }
setIsVisible(true)
 }

const noSubmit =()=>
  {
    if(isVisibles){
      setIsVisible(false)
    }

}


  return (
    <div className="App" onClick={noSubmit}>
  
      <Header />
          <Model isVisible={isVisibles} error={erreur} />
      <form onSubmit={(e)=>{e.preventDefault() ; submiit()}
    } >
        <label>Name  : </label><br></br>
        <input type='text' value={Form.Name} onChange={(e)=>{
          SetForm({...Form,Name:e.target.value})

        }} /><br></br>
        <label>Phone Number : </label><br></br>
        <input type='text'value={Form.PhoneNumber} onChange={(e)=>{
          SetForm({...Form,PhoneNumber:e.target.value})

        }} /><br></br>
        <label>Age : </label><br></br>
        <input type='text' value={Form.Age} onChange={(e)=>{
          SetForm({...Form,Age:e.target.value})

        }}  /><br></br>
        <label>Are you An Employee ? </label><br></br>
        <input type='checkbox' checked={Form.Employee} onChange={(e)=>{
          SetForm({...Form,Employee:e.target.checked})

        }} /><br></br>
        <label>Salary</label><br></br>
        <select value={Form.Salary} onChange={(e)=>{
          SetForm({...Form,Salary:e.target.value})

        }}>
          <option>500$</option>
            <option>100$</option>
              <option>200$</option>
        </select><br></br><br></br>
        <button disabled={disabled}>Submit</button>
      </form>
     
    </div>

  );
}

export default App;
