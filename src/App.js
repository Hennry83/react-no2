import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    //JSX
    <div className="container" >
      <NavBar />
      <section className='main-container'>
        <ItemListContainer section="Productos en Liquidacion"/>
      </section>
    </div>
  );
}

export default App;