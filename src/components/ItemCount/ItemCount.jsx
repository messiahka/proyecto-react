import React from "react";
import MyButton from "../MyButton/MyButton";

function ItemCount({stock, onAddToCart}) {
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
      <MyButton onClick={handleResta}>-</MyButton>
      <span>{count}</span>
      <MyButton onClick={handleSuma}>+</MyButton>
      <br />
      {/*3. agregar un onClick con el evento recivido por Props */}
      <MyButton onClick={()=>onAddToCart(count)}>Agregar al Carrito</MyButton>
    </div>
  );
}

export default ItemCount;
