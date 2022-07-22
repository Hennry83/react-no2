import './NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        // Fragment
        <div className='navbar'>
            <img src="/assets/header.png" alt="logo no2" className="img-header"/>
            <ul>
                <li><button>Cocinas</button></li>
                <li><button>Escritorios</button></li>
                <li><button>Livings</button></li>
                <li><button>Racks</button></li>
                <li><button>Decks</button></li>
            </ul> 
            <CartWidget />
        </div>
    )
}

export default NavBar