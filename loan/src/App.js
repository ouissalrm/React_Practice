import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';

function App() {
  

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

  const handleSubmit = () => {
    alert("Form submitted!");
  };
 
// const submiit = ()=>{
//   if(disabled===true){
//     alert("no")
//   }
//   else{
//     "ui"
//   }
// }
  return (
    <div className="App">
  
      <Header />
      <form onSubmit={(e)=>{e.preventDefault();
        handleSubmit()
      }
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
      <div>
       {Form.Name} ==== {Form.PhoneNumber} === {Form.Age} === {Form.Salary}
      </div>
    </div>

  );
}

export default App;
