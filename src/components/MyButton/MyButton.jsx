import React, { useState, useEffect } from 'react'
import "./mybutton.css"

/*--------------------------------------------------------*/
function getDataFromDatabase() {
  console.log('%cdata from database', 'color: lightblue')
}
/*--------------------------------------------------------*/

const MyButton = (props) => {

const [ colorBtn, setColorBtn ] = useState(props.color);

console.log('%cRender del componente', 'color: red');

useEffect(
 () => {
   console.log('Component Mounting')
 },
 []);



function handleClick() {
  setColorBtn('grey')
}

const styleButton = { backgroundColor: colorBtn }

  return (
    <button onClick={ () => handleClick() } style={ styleButton } className='btn'>{ props.children }</button>
  )
}

export default MyButton