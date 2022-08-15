import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useState } from "react"
import { Link } from 'react-router-dom'

const ItemDetail = ({data, setShowModal}) => {    

    const [quantitySelected, setQuantitySelected] = useState(0)
    
    return(
        <>
            <div className="detail-product">
                <p>{data.description}</p>
                <img src={`/assets/${data.image}`} alt="Imagen producto" onClick={() => setShowModal(true)} />
                <p>{data.title}</p>
                <span>$ {data.price}</span>
                {/* <ItemCount stockItem = {data.stock}/> */}
                <p>Stock: {data.stock}</p>
     { 
       quantitySelected > 0 ? <Link to="/cart"><button className="btn-end-buy">BUY END</button></Link> : <ItemCount setQuantitySelected={setQuantitySelected} dataProduct={data}/>
     } 
            </div> 
        </>
    )
}

export default ItemDetail