import ItemProduct from "../ItemProduct/ItemProduct"

const ItemList = ({data}) =>{
//const ItemList = ({dataDetail}) =>{    
    return(
        <>
            {data.map( (product) => {    
                return <ItemProduct key={product.id} data={product}/>
            })}
        </>
        
        //Desafío: Detalle de Producto (Clase 6)
       /*  <>
        {dataDetail.map( (product) => {    
            return <ItemProduct key={product.id} data={product}/>
        })}
        </> */
    )
}

export default ItemList