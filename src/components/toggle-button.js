import React from "react";

const ToggleButton = ({onToggleClick}) => {

   const onButtonClick = () => {
      onToggleClick();
   }

   return (
      <button onClick={onButtonClick}>Toggle planet show</button>
   )
}

export default ToggleButton