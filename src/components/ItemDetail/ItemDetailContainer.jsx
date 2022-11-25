import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./itemdetailcontainer.css"
import Loader from "../Loaders/Loader";

const ItemDetailContainer = () => {
  const [hamburguesa, setHamburguesa] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams();

  async function getItemsAsync() {
    try {
      let respuesta = getSingleItem(id).then( respuesta => {
        setHamburguesa(respuesta);
        setIsLoading(false);
      });
      
    } catch (errorMsg) {
      console.log(errorMsg);
    }
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  if(isLoading)
  return (<Loader />);

  return (
    <ItemDetail hamburguesa={hamburguesa} />
  );
};

export default ItemDetailContainer;
