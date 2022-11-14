import React from 'react'
import Item from './Item'

const ItemListContainer = () => {
  return (
    <div>
        <h1>Mis Productos</h1>
        <Item 
        title="Camiseta Uruguay" 
        imgurl="https://http2.mlstatic.com/D_NQ_NP_771000-MLA44940928303_022021-W.webp" 
        price={4000}
        />
        <Item 
        title="Camiseta Argentina"
        imgurl="/Imgs/camisetaarg.webp" 
        price={5000}/>
        <Item 
        title="Zapatillas"
        imgurl="https://http2.mlstatic.com/D_NQ_NP_763169-MLA49129517558_022022-W.webp" 
        price={8000}/>

    </div>
  )
}

export default ItemListContainer