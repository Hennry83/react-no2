import ItemProduct from "../ItemProduct/ItemProduct"

//const ItemList = ({dataProducts}) =>{
const ItemList = ({dataDetail}) =>{    
    return(
/*         <>
            {dataProducts.map( (product) => {    
                return <ItemProduct key={product.id} data={product}/>
            })}
        </> */
        
        //Desafío: Detalle de Producto (Clase 6)
        <>
        {dataDetail.map( (product) => {    
            return <ItemProduct key={product.id} data={product}/>
        })}
    </>
    )
}

export default ItemList