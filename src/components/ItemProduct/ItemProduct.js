import './ItemProduct.scss'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemProduct = ({data}) => {    

    const {title, image, price, stock, id} = data
    //const {description,image, price} = data
    
    return(
        <div className="item-product">
            <Link to={`/productos/${id}`}> 
                <img src={`/assets/${image}`} alt="Imagen producto"/>
            </Link>
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount stockItem = {stock}/>
            <button>Comprar</button>
            <p>Stock: {stock}</p>
        </div> 
    )
}

export default ItemProduct