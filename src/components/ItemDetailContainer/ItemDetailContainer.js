import { useEffect, useState } from "react"
import './ItemDetailContainer.scss'
import ItemDetail from "../ItemDetail/ItemDetail"
import productdetail from '../../utils/productdetail.mock'
import { useParams } from 'react-router-dom'
import Modal from '../Modal/Modal'


const ItemDetailContainer = () => {

    const [detailProduct, setDetailProduct] = useState({})
    const [showModal, setShowModal] = useState(false)
    const { id } = useParams()

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
        <div className={`detail-products ${showModal ? 'overlay-black' : ''}`}>    
            <h2>Product Detail</h2>
            <ItemDetail data={detailProduct} setShowModal={setShowModal}/>
            {showModal && (
                <Modal title="Imagen Producto" close={setShowModal}>
                    <img src={`/assets/${detailProduct.image}`} />
                </Modal>
            )}
        </div>
    )
}
export default ItemDetailContainer