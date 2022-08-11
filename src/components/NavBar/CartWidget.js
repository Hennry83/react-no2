import {useState , useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
//import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const { cartProducts, clear, deleteProduct, totalProducts } = useContext(CartContext)

    let totalCart = 0

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    cartProducts.forEach(product => {
        console.log("Productos del cart", product)
        totalCart = totalCart + product.totalPrice
    });

    return(
        <div className='cart-widget' >
            {cartProducts.length !== 0 && <p>{totalProducts}</p>}
            <ShoppingCartIcon 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {cartProducts.map((product) => {
                    return(
                        <div className='item-cart-product' key={product.id}>
                            <img src={`/assets/${product.image}`} alt="" />
                            <div className='cart-product__details'>
                                <p>{product.title}</p>
                            </div>
                            <div className='cart-product__details'>
                                {/* <p>$ {product.price}</p> */}
                                <p>$ {product.totalPrice}</p>
                            </div>
                            <div className='cart-product__details'>
                                <p>Unit: {product.quantity}</p>
                            </div>
                            <div className='cart-product__action' >
                                <DeleteIcon onClick={() => deleteProduct(product)}/>
                            </div>
                        </div>
                    )
                })}
                <p className='totalAmount'>Total: $ {totalCart} </p>
                <button onClick={() => clear()} className={"btn-delete-all"}>Clear Cart</button>
            </Menu>
        </div>
    )
}
export default CartWidget