import React from "react";

const Row = ({leftSide, rightSide}) => {
   return (
      <div style={{display: 'flex', marginBottom: '20px'}}>
         { leftSide }
         { rightSide }
      </div>
   )
}

export default Row;