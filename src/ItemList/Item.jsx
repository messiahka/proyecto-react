import React from 'react'
import MyButton from '../components/MyButton'
import './item.css'

const Item = (props) => {
  return (
    <div className='card'>
        <div className='card-img'>
        <img src={props.imgurl} alt={props.title}/>
        </div>
        <div className='card-detail'>
        <h3>{props.title}</h3>
        <p>${props.price}</p>
        </div>
        <MyButton>Ver Más</MyButton> // en este caso cuando el texto esta entre los componentes 
        se lo llama a traves de props.children
    </div>
  )
}

export default Item