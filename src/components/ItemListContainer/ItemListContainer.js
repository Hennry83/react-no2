import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.scss'

const ItemListContainer = ({titleSection}) => {
    return(
        <div className='list-products'>
            <h2>{titleSection}</h2>
            <ItemProduct title="Cocina Modena" price={95000} image={'cocina1.jpg'} stock={5} />
            <ItemProduct title="Deck Exterior" price={37000} image={'deck1.jpg'} stock={7} />
            <ItemProduct title="Organizador Dormitorio" price={49000} image={'dormitorio1.jpg'} stock={3} />
            <ItemProduct title="Escritorio doble" price={85000} image={'escritorio1.jpg'} stock={9} />
            <ItemProduct title="Rack TV" price={41000} image={'rack1.jpg'} stock={8} />
        </div>
    )
}
export default ItemListContainer