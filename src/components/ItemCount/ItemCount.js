import { useState } from "react"

const ItemCount = ({setQuantitySelected}) => {
    const [countQuantity, setCountQuantity] = useState(1)

    const addQuantity = () => {
        setCountQuantity(countQuantity + 1)
    }
    
    const removeQuantity = () => {
        setCountQuantity(countQuantity - 1)
    }

    const onAdd = () => {
        setQuantitySelected(countQuantity)
    }

    return(
        <>
            <div className="container-count">
                <button onClick={removeQuantity}>-</button>
                <span>{countQuantity}</span>
                <button onClick={addQuantity}>+</button>
            </div>
            <button onClick={onAdd}>AGREGAR AL CARRITO</button>
        </>
    )
}

export default ItemCount