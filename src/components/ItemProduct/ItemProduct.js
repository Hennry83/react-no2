import './ItemProduct.scss'
import ItemCount from './ItemCount'

const ItemProduct = ({data}) => {    

    //const {title, image, price, stock} = data
    const {description,image, price} = data
    
    return(
        <div className="item-product">
            <p>{description}</p>
            <img src={`/assets/${image}`} alt="Imagen producto"/>
            {/* <p>{title}</p> */}
            <span>$ {price}</span>
            {/* <ItemCount stockItem = {stock}/> */}
            {/* <button>Comprar</button> */}
            {/* <p>Stock: {stock}</p> */}
        </div> 
    )
}

export default ItemProduct