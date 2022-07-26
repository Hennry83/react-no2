import './ItemProduct.scss'
import ItemCount from './ItemCount'

const ItemProduct = ({title, price, image, stock}) => {

    return(
        <div className="item-product">
            <img src={`/assets/${image}`} alt="Imagen producto"/>
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount stockItem = {stock}/>
            <button>Comprar</button>
            <p>Stock: {stock}</p>
        </div> 
    )
}

export default ItemProduct