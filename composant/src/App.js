
import './App.css';
import Buttons from './Buttons';
import Card from './Card';
import Cardeur from './Cardeur';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
       <section>
      <div className='cards'>
        <Card title ={"Academy"} numbers={"20"} para={"academy c'est un centre pour ..."} />
       <Card title ={"Hello world"} para={"The is the Hello world"} />
        <Card title ={"post 3"} para={"The is the post 3"} />
   
         
      </div>
      <Cardeur>
          <div className="buttons">
        <Buttons title ={"btn1"}>
          😀😀😀😀😀😀
        </Buttons>
         <Buttons title ={"btn2"}>
          <img style={{width:"100px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGazP8vqpIGtUavvlfNLgF36oMbrCmQcqSo760Rub-LyOnnUXhuo-wqvm5lTo4m9mB0zu2Rk3eq4kaiznaTWrPsnJyLkQJwhsUZuUS2UyZ&s=10' alt='arbre' />
         </Buttons>
          <Buttons title ={"btn3"}>
            <h6>btn23👺👺👺👺👺👺</h6>
            
          </Buttons>
          

             </div>
      </Cardeur>

    </section>
    </div>
   
  );
}

export default App;
