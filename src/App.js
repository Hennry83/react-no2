import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    //JSX
    <div className="container" >
      <NavBar />
      <section className='main-container'>
        <ItemListContainer titleSection="Productos en Liquidacion"/>
      </section>
    </div>
  );
}

export default App;