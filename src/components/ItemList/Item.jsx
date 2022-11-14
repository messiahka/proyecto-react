import React from 'react'
import MyButton from '../MyButton/MyButton'
import ToggleButton from '../ToggleButton/ToggleButton'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ imgurl, name, price, color, id }) => {
  const urlDetail = `/detail/${id}`
  return (
    <div className='card'>
      <ToggleButton icon="♥" />
        <div className='card-img'>
        <img src={imgurl} alt={name}/>
        </div>
        <div className='card-detail'>
        <h3>{name}</h3>
        <p>${price}</p>
        </div>

        <Link to={urlDetail}>
        <MyButton color={color}>Ver Más</MyButton> 
        </Link>
         
    </div>
  )
}

export default Item