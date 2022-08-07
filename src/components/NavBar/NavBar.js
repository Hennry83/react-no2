import './NavBar.scss'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return(
        // Fragment
        <div className='navbar'>
            <Link to="/">
            <img src="/assets/header.png" alt="logo no2"/>
            </Link>
            <div className ="categories">
                <p>Categorias:</p>
                <ul>
                    <li><Link to="/category/cocinas">Cocinas</Link></li>
                    <li><Link to="/category/dormitorios">Dormitorios</Link></li>
                    <li><Link to="/category/racks">Racks</Link></li>
                    <li><Link to="/category/decks">Decks</Link></li>
                    <li><Link to="/category/escritorios">Escritorios</Link></li>
                </ul>
            </div>
            <ul>                
                <Link to="/"><li><button>Home</button></li></Link>
                <Link to="/productos"><li><button>Products</button></li></Link>
                <Link to="/contacto"><li><button>Contacto</button></li></Link>
                <Link to="/about"><li><button>About</button></li></Link>                
            </ul> 
            <CartWidget />
        </div>
    )
}

export default NavBar