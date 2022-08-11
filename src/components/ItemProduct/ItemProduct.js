import './ItemProduct.scss'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
//import { useState, useEffect, useContext } from 'react'
//import { CartContext } from '../Context/CartContext'

const ItemProduct = ({data}) => {    
    
    //const { handleClick, name } = useContext(CartContext)
    
    const {title, image, price, stock, id} = data

    /* const addToCart = (e) => {
        console.log("click Producto", e)
        e.preventDefault();
    } */
    
    return(
        <div className="item-product">
            <Link to={`/productos/${id}`}> 
                <img src={`/assets/${image}`} alt="Imagen producto"/>
            </Link>
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount stockItem = {stock}/>
            <Link to={`/productos/${id}`}>
                <button className = "btn-buy">Comprar</button>
            </Link>
            <p>Stock: {stock}</p>
        </div> 
    )
}

export default ItemProduct