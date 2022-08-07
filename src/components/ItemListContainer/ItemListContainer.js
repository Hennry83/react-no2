import { useEffect, useState } from "react"
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
import products from '../../utils/products.mock'
import { useParams } from "react-router-dom"


const ItemListContainer = ({titleSection}) => {

    const [listProducts, setListProducts] = useState([])
    const {categoryName} = useParams();

    const filterCategory = products.filter((productos) => productos.category === categoryName);
      
    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (categoryName){
                resolve(filterCategory);
            }else {
                resolve(products);
            }            
        }, 2000);
    });

    useEffect(() => {
        getProducts
            .then( (res) => { // Respuesta OK
                setListProducts(res)
            })
            .catch( (error) => { // Falla la respuesta
                console.log("la llamada fallo")
            })
            .finally( () => { // Siempre que termina por OK o Fallo    
            })
    },[getProducts])


/*     useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await getProducts();
                setListProducts (res);
            } catch (error){
                console.log(error);
            }
        };
        getProduct();
    }); */

    return(
        <div className='list-products'>
            <h2>{titleSection}</h2>
            <ItemList data={listProducts}/>
        </div>
    )
}
export default ItemListContainer