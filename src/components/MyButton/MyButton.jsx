import React, { useState } from "react";
import "./mybutton.css";

/*--------------------------------------------------------*/
// function getDataFromDatabase() {
//   console.log('%cdata from database', 'color: lightblue')
// }
/*--------------------------------------------------------*/

const MyButton = (props) => {
  const [colorBtn, setColorBtn] = useState(props.colorBtn);

  // console.log('%cRender del componente', 'color: red');

  // useEffect(
  //  () => {
  //    console.log('Component Mounting')
  //  },
  //  []);

  // function handleClick() {
  //   setColorBtn('grey')
  //   // props.onClick && props.onClick()
  // }

  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: colorBtn }}
      className="btn"
    >
      {props.children}
    </button>
  );
};

export default MyButton;
