import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from "../Context/CartContext"
import Modal from '../Modal/Modal';
import db from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Cart = () => {
    
    const { cartProducts, deleteProduct, clear } = useContext(CartContext)

    let totalCart = 0

    cartProducts.forEach(product => {
        totalCart = totalCart + product.totalPrice
    });
    
    const [success, setSuccess] = useState()
    const [showModal, setShowModal] = useState(false)
    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: '',
                title: '',
                price: '' 
            }
        }),
        buyer: {},
        date: new Date().toLocaleString(),
        total: ''
    }) 

    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email:''
    })

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        if(formData.name !== "" && formData.phone !=="" && formData.email !==""){
            pushData ({...order, buyer: formData, total: totalCart, items: cartProducts.map((product) => {
                return {
                    id: product.id,
                    title: product.title,
                    price: product.totalPrice
                }
            })
        })
        } else{
             Swal.fire('Gasto no guardado', '', 'info')
             Swal.fire({
                icon: 'error',
                title: 'Error de envio',
                text: 'Debes completar todos los campos con tus datos antes de enviar.',
              }) 
        } 
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
    }

    let titulo = success ? 'SU ORDEN SE GENERO CORRECTAMENTE' : 'DATOS DE CONTACTO';

    return(
        <>
        <div className={`title-cart-finish ${showModal ? 'overlay-black' : ''}`}>
           <p> Carrito de checkout</p>
        </div>
        <div className={`cart-finish ${showModal ? 'overlay-black' : ''}`}>
            {cartProducts.map((product) => {
                return(
                    <div className='item-cart-product' key={product.id}>
                        <img src={`/assets/${product.image}`} alt="" />
                        <div className='cart-product__details'>
                            <p>{product.title}</p>
                        </div>
                        <div className='cart-product__details'>
                            {/* <p>$ {product.price}</p> */}
                            <p>$ {product.totalPrice}</p>
                        </div>
                        <div className='cart-product__details'>
                            <p>Unit: {product.quantity}</p>
                        </div>
                        <div className='cart-product__action' >
                            <DeleteIcon onClick={() => deleteProduct(product)}/>
                        </div>
                    </div>
                )
            })}
            <div className ="cart-finish-footer">
                <p className='totalAmount'>Total: $ {totalCart} </p>                   
                <Link to="/"><button onClick={() => clear()} className={"btn-delete-all"}>Clear Cart</button></Link>
                <button onClick={() => setShowModal(true)} className="btn-pay">  PAY  </button>
            </div>
            {showModal &&
                <Modal title= {titulo} close={() => setShowModal()}>
                    {success ? (
                        <>
                            <div className='successOrder'>
                                <div className='id-compra'>
                                    <p>El ID de su compra es el siguiente :</p>
                                    <p>{success}</p>
                                </div>
                                <p>El detalle de su compra:</p>
                                {cartProducts.map((product) => {
                                    return(
                                        <div className='order-product' key={product.id}>
                                            <img src={`/assets/${product.image}`} alt="" />
                                            <div className='order-product__details'>
                                                <p>{product.title}</p>
                                            </div>
                                            <div className='order-product__details'>
                                                <p>$ {product.totalPrice}</p>
                                            </div>
                                            <div className='order-product__details'>
                                                <p>Unit: {product.quantity}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                                <Link to="/"><button onClick={() => clear()} className={"btn-delete-all"}>OK</button></Link>
                            </div>
                        </>
                    ) : (
                        <div className='contactForm'>
                            <form className='form' onSubmit={submitData}>
                                <label>Nombre y Apellido:</label>
                                <input type='text' 
                                    name = 'name' 
                                    placeholder='Ingrese el nombre'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label>Telefono:</label>
                                <input type='number'
                                    name = 'phone'
                                    placeholder='Ingrese el telefono'
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <label>Correo electronico:</label>
                                <input type='email'
                                    name = 'email'
                                    placeholder='Ingrese el mail'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <button type="submit">Enviar</button>
                            </form>
                        </div>    
                    )}
                    
                </Modal>
            }
        </div>
        </>
    )
}

export default Cart