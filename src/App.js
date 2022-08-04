import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Detail from './components/Pages/Detail';
import Checkout from './components/Pages/Checkout';
import About from './components/Pages/About';

//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import React, {useState, useEffect} from 'react';

function App() {
  
  //EJERCICIO PRACTICO DE CONSUMIR API CON FETCH
  /* const [pokemon, setPokemon] = useState([]);
  useEffect( ()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      setPokemon(data.results);
    });
  },[]) */
  
  return (
    //JSX
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/> {/* renderiza ItemDetailContainer */}
          <Route path="/productos" element={<Home />}/> {/* renderiza ItemDetailContainer */}
          <Route path="/productos/:id" element={<Detail />} />
          <Route path="/contacto" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path='/cart' element={<Checkout />}/>
          <Route path="*" element={<h1>ERROR 404 -  Page Not Found</h1>}/>
        </Routes>
    </BrowserRouter>
  );

  //return (
    //JSX
    //<div className="container" >
     // {/* <h1>POKEMONES</h1>
      //{pokemon.map((poke, i)=>{
       // return <p key={i}>{poke.name}</p>;
     // })} */}
     // <NavBar />
      //<section className='main-container'>
       // <ItemListContainer titleSection="Productos en Liquidacion"/>
    //    {/* <ItemDetailContainer /> */}
      //</section>
   // </div>
  //);
}

export default App;