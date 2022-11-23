import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import IconSVG from './IconSVG'

const CartWidget = () => {
  const miContext = useContext(cartContext)
  
return (
  <>
  <a href="./">
    <IconSVG style={{ marginTop:-10, width:60 }}/>
    <span>{miContext.itemsInCart()}</span>
  </a>
    
    
  </>
  )
}

export default CartWidget