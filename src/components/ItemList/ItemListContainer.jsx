import React, { useState, useEffect } from "react";
import Item from "./Item";
import getItems from "../../services/mockService";
import "./itemlistcontainer.css"

import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const [hamburguesas, setHamburguesas] = useState([]);
  const { idCategory } = useParams()

  async function getItemsAsync() {
    try {
      let respuesta = await getItems(idCategory);
      setHamburguesas(respuesta);
    } catch (errorMsg) {
      console.log(errorMsg);
    }
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return (
    <div className="item-list">
      {hamburguesas.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            imgurl={item.imgurl}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default ItemListContainer;
