import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"


function ItemDetail({ hamburguesa }) {
  // 1. declarar un handler al evento
  // 4. recibir por parametro la respuesta de itemCount
  const { addToCart } = useContext(cartContext)
  function onAddToCart(count) {
    alert(`Agregaste ${count} items al carrito`)
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
        <ItemCount onAddToCart={onAddToCart} stock={hamburguesa.stock}/>
      </div>
    </div>
  );
}

export default ItemDetail;
