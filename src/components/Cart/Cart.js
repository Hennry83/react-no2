import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useContext } from "react"
import { CartContext } from "../Context/CartContext"

const Cart = () => {
    //const { cartProducts } = useContext(CartContext)
    const { cartProducts, deleteProduct, clear } = useContext(CartContext)

    let totalCart = 0

    cartProducts.forEach(product => {
        console.log("Productos del cart", product)
        totalCart = totalCart + product.totalPrice
    });

    return(
        <>
        <div className="title-cart-finish">
            Carrito de checkout
        </div>
        <div className='cart-finish' >
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
            <div className ="cart-finish-footer">
                <p className='totalAmount'>Total: $ {totalCart} </p>                   
                <button onClick={() => clear()} className={"btn-delete-all"}>Clear Cart</button>
                <button className="btn-pay">  PAY  </button>
            </div>
        </div>
        </>
    )
}

export default Cart