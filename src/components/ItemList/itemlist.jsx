import React from "react";
import Item from "./Item";

function ItemList({ hamburguesas }) {
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
            discount={item.discount}
          />
        );
      })}
    </div>
    );
}

export default React.memo(ItemList)