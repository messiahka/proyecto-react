import hamburguesas from "../data/data";

function getItems(idCategoryParam) {
  return new Promise((resolve, reject) => {
    if (idCategoryParam === undefined) {
      setTimeout(() => {
        resolve(hamburguesas);
      }, 1000);
    }
    else {
      setTimeout(() => {
        let itemsRequested = hamburguesas.filter( (item) => item.category === idCategoryParam)
        resolve(itemsRequested);
      }, 1000); 
    }
  });
}

export function getSingleItem(idParam) {
  return new Promise((resolve) => {
    let itemRequested = hamburguesas.find(
      (item) => item.id === Number(idParam)
    );
    setTimeout(() => {
      resolve(itemRequested);
    }, 1000);
  });
}

export default getItems;
