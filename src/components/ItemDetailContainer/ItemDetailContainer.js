import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemDetailContainer.scss'
import ItemDetail from '../../utils/ItemDetail'


const ItemDetailContainer = () => {

    const [detailProduct, setDetailProduct] = useState([])

    const getDetail = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(ItemDetail)
        }, 1000)
    })

    useEffect(() => {
        getDetail
            .then( (res) => { // Respuesta OK
                //console.log("Detail Product: ", res)
                setDetailProduct(res)
            })
            .catch( (error) => { // Falla la respuesta
                console.log("La llamada fallo")
            })
            .finally( () => { // Siempre que termina por OK o Fallo
            })
    }, [])


    return(
        <div className='detail-products'>
            <h2>Detalle del Producto</h2>
            <ItemList dataDetail={detailProduct}/>
        </div>
    )
}
export default ItemDetailContainer