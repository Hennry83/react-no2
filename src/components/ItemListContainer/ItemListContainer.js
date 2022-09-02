import { useEffect, useState } from "react"
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
//import products from '../../utils/products.mock'
import { useParams } from "react-router-dom"
//importando firebase
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig"


const ItemListContainer = ({titleSection}) => {

    const [listProducts, setListProducts] = useState([])
    const {categoryName} = useParams();

    const getProducts = async () =>{
        if (categoryName){
            const productCollection = query(collection(db, 'productos'), where("category","==",categoryName))
            const productSnapshot = await getDocs(productCollection)
            const productList = productSnapshot.docs.map( (doc) => {
                let product = doc.data()
                product.id = doc.id
                return product
            })
            return productList
        }else {
            const productCollection = collection(db, 'productos')
            const productSnapshot = await getDocs(productCollection)
            const productList = productSnapshot.docs.map( (doc) => {
                let product = doc.data()
                product.id = doc.id
                return product
            })           
            return productList
        }               
}

    useEffect(() => {
        getProducts()
        .then((res) => {
            setListProducts(res)
        })
    },[categoryName])

    return(
        <>
            <div className='list-products'>
                <h2>{titleSection}</h2>
                <ItemList data={listProducts}/>
            </div>
        </>
    )
}
export default ItemListContainer