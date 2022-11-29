import React, { useState, useEffect } from "react";
import Item from "./Item";
import getItems  from "../../services/firestore";
import "./itemlistcontainer.css"

import { useParams } from "react-router-dom"
import Itemlist from "./itemlist";
import Loader from "../Loaders/Loader";

const ItemListContainer = () => {
  const [hamburguesas, setHamburguesas] = useState(null);
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
    return () => {
      console.log('Componente Desmontado')
    }
  }, [idCategory]);

  return <> {
    hamburguesas 
      ? <Itemlist hamburguesas={hamburguesas} /> 
      : <Loader />
  }
  </>
};

export default ItemListContainer;
