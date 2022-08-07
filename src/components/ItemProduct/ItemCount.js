import { useState } from 'react'
import './ItemProduct.scss'

const ItemCount = ({stockItem}) => {

    const [contador, setContador] = useState(1)

    let stockLimit = stockItem

    const addNumber = () => {
        if(contador < stockLimit)
            setContador(contador + 1)
    }
    const removeNumber = () => {
        if(contador > 0)
            setContador(contador - 1)
    }

    return(
        <div className='countProd'>
                <button onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
        </div> 
    )
}

export default ItemCount