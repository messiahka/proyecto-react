import React from "react";
import { useParams } from "react-router-dom";

function ThankYou() {
  const idOrder = useParams().idOrder
  console.log(idOrder)
  return (
    <div>
      <h1>Gracias por tu Compra</h1>
      <h3>
        El id de tu compra es: <strong>{idOrder}</strong>
      </h3>
    </div>
  );
}

export default ThankYou;
