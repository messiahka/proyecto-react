import React from 'react'
import CartWidget from './CartWidget'
import './navbar.css'


const NavBar = () => {
  return (
   <> <nav>
            <div>
                <a href="./">
                    <img src="./Imgs/logo2.png" alt="" />
                </a>
            </div>
            <ul>
              <li>
                <a href="./">Menu</a> 
              </li>
              <li>
                <a href="./">Locales</a> 
              </li>
              <li>
                <a href="./">Contacto</a> 
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
   </nav></>
   
  )
}

export default NavBar