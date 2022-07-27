import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import products from '../../utils/products.mock'


const ItemListContainer = ({titleSection}) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getProducts
            .then( (res) => { // Respuesta OK
                //console.log("Productos: ", res)
                setListProducts(res)
            })
            .catch( (error) => { // Falla la respuesta
                console.log("la llamada fallo")
            })
            .finally( () => { // Siempre que termina por OK o Fallo
            })
    }, [])


    return(
        <div className='list-products'>
            <h2>{titleSection}</h2>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}
export default ItemListContainer