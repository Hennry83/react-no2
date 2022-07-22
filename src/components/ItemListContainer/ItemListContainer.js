import ItemProduct from "../ItemProduct/ItemProduct"

const ItemListContainer = ({section}) => {
    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemProduct title="Cocina Modena" price={95000} image={'cocina1.jpg'}/>
            <ItemProduct title="Deck Exterior" price={37000} image={'deck1.jpg'}/>
            <ItemProduct title="Organizador Dormitorio" price={49000} image={'dormitorio1.jpg'}/>
            <ItemProduct title="Escritorio doble" price={85000} image={'escritorio1.jpg'}/>
            <ItemProduct title="Rack TV" price={41000} image={'rack1.jpg'}/>
        </div>
    )
}
export default ItemListContainer