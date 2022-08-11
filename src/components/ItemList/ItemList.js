import ItemProduct from "../ItemProduct/ItemProduct"

const ItemList = ({data}) =>{ 

    return(
            <>
                {data.map( (product) => {    
                    return <ItemProduct key={product.id} data={product}/>
                })}
            </>
        )
}

export default ItemList