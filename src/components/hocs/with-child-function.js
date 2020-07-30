import React from "react";

const withChildFunction = (fn) => (Wrapped) => (props) => {
   return  (
      <Wrapped {...props}>
         { fn }
      </Wrapped>
   )
}

export default withChildFunction;