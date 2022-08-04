import { useEffect, useState } from "react"
import './ItemDetailContainer.scss'
import ItemDetail from "../ItemDetail/ItemDetail"
import productdetail from '../../utils/productdetail.mock'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [detailProduct, setDetailProduct] = useState({})

    const { id } = useParams()

   /*  const getDetail = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(productDetail)
        }, 1000)
    }) */

  /*   useEffect(() => {
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
    }, []) */

    useEffect( () => {
        filterById()
    }, [id])

    const filterById = () => {
        productdetail.some( (product) => {
            if(product.id == id) {
                console.log("producto filtrado: ", product)
                setDetailProduct(product) 
            }
        }
    )
    }
    
    return(
        <div className='detail-products'>
            <h2>Detalle del Producto</h2>
            <ItemDetail data={detailProduct}/>
        </div>
    )
}
export default ItemDetailContainer