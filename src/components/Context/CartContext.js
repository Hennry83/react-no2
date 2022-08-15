import { createContext, useState } from "react";
const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)


    const addProductToCart = (product) => {        
        let isInCart = cartProducts.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product)
            setTotalProducts(totalProducts + product.quantity)
            return setCartProducts(cartProducts => [...cartProducts, product])
        }
    }

    const deleteProduct = (product) => {
        console.log("Producto a eliminar:", product)
        setCartProducts(cartProducts.filter( (cartProduct) => cartProduct.id !== product.id) )
        setTotalProducts(totalProducts - product.quantity)
    }

    const clear = () => {
        setCartProducts([])
        setTotalProducts(0)
    }

    const data = {
        cartProducts,
        setCartProducts,
        deleteProduct,
        clear,
        addProductToCart,
        totalProducts
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }