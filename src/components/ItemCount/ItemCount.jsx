import React from "react";
import MyButton from "../MyButton/MyButton";
import "./itemcount.css"

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = React.useState(1);

  function handleSuma() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function handleResta() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <div className="itemcount_container">
        <MyButton onClick={handleResta}>-</MyButton>
        <span>{count}</span>
        <MyButton onClick={handleSuma}>+</MyButton>
      </div>

      {/*3. agregar un onClick con el evento recivido por Props */}
      <div className="itemcount_btn">
        <MyButton onClick={() => onAddToCart(count)}>
          Agregar al Carrito
        </MyButton>
      </div>
    </div>
  );
}

export default ItemCount;
