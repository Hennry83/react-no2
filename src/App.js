import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Detail from './components/Pages/Detail';
import Checkout from './components/Pages/Checkout';
import About from './components/Pages/About';
import CartProvider from './components/Context/CartContext';

function App() {
  
  return (
    //JSX
    <CartProvider >
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/productos" element={<Home />}/>
          <Route path="/category/:categoryName" element={<Home />}/>
          <Route path="/productos/:id" element={<Detail />} />
          <Route path="/contacto" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path='/cart' element={<Checkout />}/>
          <Route path="*" element={<h1>ERROR 404 -  Page Not Found</h1>}/>
        </Routes>
    </BrowserRouter>
    </CartProvider>
  );

}

export default App;