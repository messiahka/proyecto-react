import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import IconSVG from './IconSVG'
import { Link } from "react-router-dom";

const CartWidget = () => {
  const miContext = useContext(cartContext)
  const checkItem = miContext.itemsInCart()
  
  
return (
  <>
  <Link to="/cart">
    <IconSVG style={{ marginTop:-10, width:60 }}/>
    { checkItem !== 0 && <span>{checkItem}</span>}
  </Link>
    
    
  </>
  )
}

export default CartWidget