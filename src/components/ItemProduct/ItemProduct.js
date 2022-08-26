import './ItemProduct.scss'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemProduct = ({data}) => {    
       
    const {title, image, price, stock, id} = data
    
    return(
        <div className="item-product">
            <Link to={`/productos/${id}`}> 
                <img src={`/assets/${image}`} alt="Imagen producto"/>
            </Link>
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount stockItem = {stock}/>
            <Link to={`/productos/${id}`}>
                <button className = "btn-buy">BUY</button>
            </Link>
            <p>Stock: {stock}</p>
        </div> 
    )
}

export default ItemProduct