

import './App.scss'

function App() {
  function Card(){

     return(
    <div className='card'>
     <img src='../iphone_17.jpeg' alt='iphone' />
     <h1 className='title'>Iphone 17 pro max</h1>
     <p className='desc'>The iPhone 17, part of the 2025 iPhone lineup, was released on September 19, 2025. Key features include a larger 6.3-inch ProMotion display, a new A19 chip, a 48MP Dual Fusion camera system, and Apple Intelligence integration via iOS 26. </p>
     <span className='price'>134$</span><br></br>
     <button className='btn'>Buy Now</button>
     </div>
     )
  }
  return (
    <div className="App">

     <Card />
    </div>
  );
}

export default App;
