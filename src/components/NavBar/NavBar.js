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
            <p>Equipamientos Personalizados</p>
            <ul>
                
                <Link to="/"><li><button>Home</button></li></Link>
                <Link to="/productos"><li><button>Products</button></li></Link>
                <Link to="/contacto"><li><button>Contacto</button></li></Link>
                <Link to="/about"><li><button>About</button></li></Link>                
                {/* <li><button>Inicio</button></li>
                <li><button>Contacto</button></li>
                <li><button>Services</button></li>
                <li><button>About Us</button></li> */}
            </ul> 
            <CartWidget />
        </div>
    )
}

export default NavBar