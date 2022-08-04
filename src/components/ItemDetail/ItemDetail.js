import './ItemDetail.scss'
import { useState } from "react"
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({data}) => {    

    //const {title, image, price, stock} = data
    //const {description,image, price} = data

    const [quantitySelected, setQuantitySelected] = useState(0)
    
    return(
        <>
            <div className="detail-product">
                <p>{data.description}</p>
                <img src={`/assets/${data.image}`} alt="Imagen producto"/>
                <p>{data.title}</p>
                <span>$ {data.price}</span>
                {/* <ItemCount stockItem = {data.stock}/> */}
                {/* <button>Comprar</button> */}
                <p>Stock: {data.stock}</p>
     { 
       quantitySelected > 0 ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected}/>
     } 
            </div> 
        </>
    )
}

export default ItemDetail