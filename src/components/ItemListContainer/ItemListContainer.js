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

   // const filterCategory = products.filter((productos) => productos.category === categoryName);
    
   //usando firebase
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


    // usando base datos local (products.mock)
    /* const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (categoryName){
                resolve(filterCategory);
            }else {
                resolve(products);
            }            
        }, 2000);
    }); */

    useEffect(() => {
        getProducts()
        .then((res) => {
            setListProducts(res)
        })
/*         getProducts
            .then( (res) => { // Respuesta OK
                setListProducts(res)
            })
            .catch( (error) => { // Falla la respuesta
                console.log("la llamada fallo")
            })
            .finally( () => { // Siempre que termina por OK o Fallo    
            }) */
    },[getProducts])


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