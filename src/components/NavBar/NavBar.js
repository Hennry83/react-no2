import './NavBar.css'
import Carrito from './Carrito'

const NavBar = () => {
    return(
        // Fragment
        <div className='navbar'>
            <img src="/assets/header.png" alt="logo no2" />
            <ul>
                <li><button>Cocinas</button></li>
                <li><button>Escritorios</button></li>
                <li><button>Livings</button></li>
                <li><button>Racks</button></li>
            </ul> 
            <Carrito />
        </div>
    )
}

export default NavBar