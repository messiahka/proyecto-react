import React from 'react';

function ItemCount(props) {

  const [count, setCount] = React.useState(props.initialItem);

  function handleSuma() {
    if (count < props.stock) {
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
      <button onClick={ handleResta } >-</button>
      <span>{count}</span>
      <button onClick={ handleSuma } >+</button>
      <br />
      <button>{ props.title }</button>
    </div>
  );
}

export default ItemCount;