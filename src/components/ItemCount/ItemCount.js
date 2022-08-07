import { useState } from "react"

const ItemCount = ({setQuantitySelected, dataProduct}) => {
   
    const [countQuantity, setCountQuantity] = useState(1)

    let stockLimit = dataProduct.stock

    const addQuantity = () => {
        if (countQuantity < stockLimit)
           setCountQuantity(countQuantity + 1)
    }
    
    const removeQuantity = () => {
        if (setQuantitySelected > 0)
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