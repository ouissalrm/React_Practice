
import { useEffect, useState } from 'react';
import './App.css';
import Product from './Product';

function App() {
  const [product,setproduct] =useState([]);

  const getProduct =()=>fetch('/Product.json')
  .then(Response=>Response.json())
  .then(data => setproduct(data))



 useEffect(()=>{
   getProduct();
  },[])

  const resultat = product.map((index , key) =>(
    <Product product={index} key={key} />
  )
  )

  return (
    <div className="App">
     <h1> Products </h1>
   <div>
    {resultat}
   </div>
     
    </div>
  );
}

export default App;
