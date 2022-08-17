import { useEffect, useState } from "react"
import './ItemDetailContainer.scss'
import ItemDetail from "../ItemDetail/ItemDetail"
//import productdetail from '../../utils/productdetail.mock'
import { useParams } from 'react-router-dom'
import Modal from '../Modal/Modal'
//firebase
import db from "../../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"
//import { async } from "@firebase/util"


const ItemDetailContainer = () => {

    const [detailProduct, setDetailProduct] = useState({})
    const [showModal, setShowModal] = useState(false)
    const { id } = useParams()

    useEffect( () => {
        //filterById()
        getProduct()
        .then( (res) => {
            setDetailProduct(res)
        })
    }, [id])

    /* const filterById = () => {
        productdetail.some( (product) => {
            if(product.id == id) {
                console.log("producto filtrado: ", product)
                setDetailProduct(product) 
            }
        }
    )
    } */

    //usando firebase
    const getProduct = async () => {
         const docRef = doc(db,'productos',id)
         const docSnapshot = await getDoc(docRef)
         let product = docSnapshot.data()
         product.id = docSnapshot.id
         return product
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