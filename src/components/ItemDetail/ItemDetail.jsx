import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({ hamburguesa }) {
  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={hamburguesa.imgurl} alt="Hamburguesa img" />
      </div>
      <div className="card-detail_detail">
        <h2>{hamburguesa.name}</h2>
        <p>{hamburguesa.description}</p>
        <h4 className="priceTag">$ {hamburguesa.price}</h4>
        <ItemCount initialItem={1} title="Agregar al Carrito" stock={50}/>
      </div>
    </div>
  );
}

export default ItemDetail;
