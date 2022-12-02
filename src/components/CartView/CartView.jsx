import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { createOrder } from '../../services/firestore';
import { useNavigate } from 'react-router-dom';
import MyButton from '../MyButton/MyButton';


function CartView() {
  const { cart, removeItem, clear, priceInCart} = useContext(cartContext);
  let navigate = useNavigate();
  
  if (cart.length === 0) return <h1>Carrito Vacio</h1>

 async function handleCheckout(evt) {
  // Crear nuestro objeto "orden de compra"
  const order = {
    buyer: {
      name: "Juan Pablo",
      email: "tuttirodriguez@gmai.com",
      phone: "3442545556"
    },
    items: cart,
    total: 0,
    date: new Date(),
  }
  const orderId =  await createOrder(order);
  
  navigate(`/thankyou/${orderId}`)
  // 
  //1. Hacer un rendering condicional -> guardamos el id en un State
  //2. Sweet Alert/Notificacion -> mostrando el id
  //3 Redirigir al usuario a /thankyou
  //3-b Redirigir al usuario a /thankyou/:orderid (persistencia)

}

  return (
    <div className='cart-container'>
        {
            cart.map( (item) => ( 
            <div key={item.id}>
                <h2>{item.name}</h2>
                <h4>${item.price}</h4>
                <h4>unidades: {item.count}</h4>
                <MyButton onClick={()=>removeItem(item.id)} colorBtn="red">X</MyButton>
            </div>
            ))}
            <MyButton colorBtn="green" onClick={handleCheckout}>Finalizar Compra</MyButton>
            <MyButton>Vaciar Carrito</MyButton>
    </div>
  )
}

export default CartView