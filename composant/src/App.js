
import { Children } from 'react';
import './App.css';
import Buttons from './Buttons';
import Card from './Card';
import Cardeur from './Cardeur';
import Header from './Header';
const listes=[
  {title : "Academy",
  numbers : 20,
  para : "academy c'est un centre pour ..."

  },
   {title : "Hello world",
  numbers : null,
  para : "The is the Hello world"

  },
   {title : "post 3",
  numbers : null,
  para :"The is the post 3",

  },
]
const buttonss=[
  {
    title : "btn1",
    Children : "😀😀😀😀😀😀",
  },
    {
    title : "btn2",
    Children : <img style={{width:"100px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGazP8vqpIGtUavvlfNLgF36oMbrCmQcqSo760Rub-LyOnnUXhuo-wqvm5lTo4m9mB0zu2Rk3eq4kaiznaTWrPsnJyLkQJwhsUZuUS2UyZ&s=10' alt='arbre' />,
  },
    {
    title : "btn3",
    Children : "btn23👺👺👺👺👺👺",
  },
]
function App() {
  return (
    <div className="App">
      <Header />
       <section>
      <div className='cards'>
      {listes.map((list,index)=>{
        return(
          <Card key={index} title={list.title}   numbers={list.numbers} para={list.para} />
        )
      })}
         
      </div>
      <Cardeur>
          <div className="buttons">
      
       {buttonss.map((button,index)=>{
        return(
          <Buttons key={index} title={button.title}>
            {button.Children}
          </Buttons>
        )
       })}

             </div>
      </Cardeur>

    </section>
    </div>
   
  );
}

export default App;
