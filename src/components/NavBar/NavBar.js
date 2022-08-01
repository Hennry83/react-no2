import './NavBar.scss'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        // Fragment
        <div className='navbar'>
            <img src="/assets/header.png" alt="logo no2"/>
            <p>Equipamientos Personalizados</p>
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Contacto</button></li>
                <li><button>Services</button></li>
                <li><button>About Us</button></li>
            </ul> 
            <CartWidget />
        </div>
    )
}

export default NavBar