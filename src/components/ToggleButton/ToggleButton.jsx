import React, { useState } from "react";

function ToggleButton(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  let classNameFavBtn = isFavorite ? "card-favicon favorite" : "card-favicon";
  return (
    <button onClick={handleFavorite} className={classNameFavBtn}>
      <div className='large-font text-center top-20'>
        <ion-icon name="heart">
          <div className='red-bg'></div>
        </ion-icon>
      </div>
    </button>
  );
}

export default ToggleButton;