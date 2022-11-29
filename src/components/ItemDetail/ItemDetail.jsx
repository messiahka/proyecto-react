import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { cartContext } from "../../context/cartContext"
import MyButton from "../MyButton/MyButton";
import { Link } from "react-router-dom";


function ItemDetail({ hamburguesa }) {
  // 1. declarar un handler al evento
  // 4. recibir por parametro la respuesta de itemCount
  const [isInCart, setIsInCart] = useState(false)
  const { addToCart } = useContext(cartContext)
  function onAddToCart(count) {
    setIsInCart(count)
    addToCart(hamburguesa, count)
  }

  return (
    <div className="card-detail2">
      <div className="card-detail2_img">
        <img src={hamburguesa.imgurl} alt="Hamburguesa img" />
      </div>
      <div className="card-detail2_detail">
        <h2>{hamburguesa.name}</h2>
        <p>{hamburguesa.description}</p>
        <h4 className="priceTag">$ {hamburguesa.price}</h4>
        {/* 2. pasamos como prop el evento al itemcount */}
        {
          isInCart ?
          <Link to="/cart">
            <MyButton>Ir al Carrito</MyButton>
          </Link>
          :
          <ItemCount onAddToCart={onAddToCart} stock={hamburguesa.stock}/>
        }
        
        
      </div>
    </div>
  );
}

export default ItemDetail;
