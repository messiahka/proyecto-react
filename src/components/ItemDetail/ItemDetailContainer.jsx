import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [hamburguesa, setHamburguesa] = useState([]);
 const { id } = useParams();

  async function getItemsAsync() {
    try {
      let respuesta = await getSingleItem(id);
      setHamburguesa(respuesta);
    } catch (errorMsg) {
      console.log(errorMsg);
    }
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return (
    // <div className="item-list">
    //   <h3>{hamburguesa.name}</h3>
    //   <img src={hamburguesa.imgurl} />
    // </div>
    <ItemDetail hamburguesa={hamburguesa} />
  );
};

export default ItemDetailContainer;
