import React from 'react'
import MyButton from '../MyButton/MyButton'
import ToggleButton from '../ToggleButton/ToggleButton'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ imgurl, name, price, color, id, discount }) => {
  const urlDetail = `/detail/${id}`
  return (
    <div className='card'>
      <ToggleButton />
        <div className='card-img'>
        <img src={imgurl} alt={name}/>
        </div>
        <div className='card-detail'>
        <h2>{name}</h2>
        <p className='priceTag'>${price}</p>
        { discount && <small>Descuento: {discount}</small>}
        </div>

        <Link to={urlDetail}>
        <MyButton color={color}>Ver Más</MyButton> 
        </Link>
         
    </div>
  )
}

export default Item