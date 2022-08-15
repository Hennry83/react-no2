import { useState, useContext } from "react"
import { CartContext } from "../Context/CartContext"

const ItemCount = ({setQuantitySelected, dataProduct}) => {
   
    const { addProductToCart } = useContext(CartContext)
    
    const [countQuantity, setCountQuantity] = useState(1)

    let stockLimit = dataProduct.stock

    const addQuantity = () => {
        if (countQuantity < stockLimit)
           setCountQuantity(countQuantity + 1)
    }
    
    const removeQuantity = () => {
        if (countQuantity > 0)
          setCountQuantity(countQuantity - 1)
    }

    const onAdd = () => {
        console.log("Agregar al carrito: ", dataProduct)
        dataProduct.quantity = countQuantity
        dataProduct.totalPrice = dataProduct.price * dataProduct.quantity 
        addProductToCart(dataProduct)
        setQuantitySelected(countQuantity)
    }

    return(
        <>
            <div className="container-count">
                <button onClick={removeQuantity}>-</button>
                <span>{countQuantity}</span>
                <button onClick={addQuantity}>+</button>
            </div>
            <button className="btn-add-cart" onClick={onAdd}>ADD TO CART</button>
        </>
    )
}

export default ItemCount