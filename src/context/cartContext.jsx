// no esta hecho con mayusculas porque NO ES UN COMPONENTE

// 1. importamos e inicializamos el contexto con createContext()
import { createContext, useState } from "react";

export const cartContext = createContext();
const ContextProvider = cartContext.Provider;

//2. Creamos nuestro Context provider

export function CartContextProvider(props) {
  const saludoContext = "Hola Context!";
  
  
  

  const [cart, setCart] = useState([]);


  function addToCart(hamburguesa, count) {
    
    let itemAlreadyInCart = cart.findIndex( 
      (itemInCart) => itemInCart.id === hamburguesa.id
      );
    
    
      let newCart = [...cart];
      console.log("-->", itemAlreadyInCart)

      if (itemAlreadyInCart !== -1) {
        newCart[itemAlreadyInCart].count += count;
        setCart(newCart);
      } else {
        hamburguesa.count = count;
        newCart.push(hamburguesa);
        setCart(newCart);
      }
    }
    
  

   function itemsInCart() {
    /* cart.foreach */
    let total = 0;
    cart.forEach( itemInCart => total = total + itemInCart.count);
    return total;
  }

  // function clear() {
  //   /*vaciar el estado */
  // }

  function removeItem(id) {
    //filter
    console.log("eliminando item. . .")
  }

  function priceInCart() {
    /*Calcular el costo total de la compra */
    let totalPrice = 0;
    cart.forEach((itemInCart) => (totalPrice = totalPrice + (itemInCart.price*itemInCart.count)))
    return totalPrice;
  }
  // function alreadyInCart(id) {
  //   /*return true/false */
  // }

  
  return (
    <ContextProvider value ={ {cart,removeItem, saludoContext, itemsInCart, priceInCart, addToCart} }>
      {props.children}
    </ContextProvider>
  );
}
