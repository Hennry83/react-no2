import './ItemProduct.scss'
import ItemCount from './ItemCount'

//const ItemProduct = ({title, price, image, stock}) => {
const ItemProduct = ({data}) => {    

    return(
        <div className="item-product">
            <img src={`/assets/${data.image}`} alt="Imagen producto"/>
            <p>{data.title}</p>
            <span>$ {data.price}</span>
            <ItemCount stockItem = {data.stock}/>
            <button>Comprar</button>
            <p>Stock: {data.stock}</p>
        </div> 
    )
}

export default ItemProduct