import React, { useState, useEffect } from "react";
import Item from "./Item";
import getItems, { getItemsByCategory }  from "../../services/firestore";
import "./itemlistcontainer.css"

import { useParams } from "react-router-dom"
import Itemlist from "./itemlist";
import Loader from "../Loaders/Loader";

const ItemListContainer = () => {
  const [hamburguesas, setHamburguesas] = useState(null);
  const { idCategory } = useParams()

  

  async function getItemsAsync() {
    if ( !idCategory ) {
      let respuesta = await getItems();
      setHamburguesas(respuesta)
    } 
    else {
      let respuesta = await getItemsByCategory(idCategory)
      setHamburguesas(respuesta)
    }
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return <> {
    hamburguesas 
      ? <Itemlist hamburguesas={hamburguesas} /> 
      : <Loader />
  }
  </>
};

export default ItemListContainer;
