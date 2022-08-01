import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import React, {useState, useEffect} from 'react';

function App() {
  
  //Ejercicio practico de consumir API con fetch
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
    <div className="container" >
      {/* <h1>POKEMONES</h1>
      {pokemon.map((poke, i)=>{
        return <p key={i}>{poke.name}</p>;
      })} */}
      <NavBar />
      <section className='main-container'>
        {/* <ItemListContainer titleSection="Productos en Liquidacion"/> */}
        <ItemDetailContainer />
      </section>
    </div>
  );
}

export default App;