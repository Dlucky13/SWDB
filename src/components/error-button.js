import React, {useState} from "react";

const ErrorButton = () => {

   const [errorStatus, setErrorStatus] = useState(false)

   if (errorStatus){
         this.foo.bar = 0
      }

   return (
      <button
         onClick={() => setErrorStatus(true)}
      >Throw Error</button>
   )
}

export default ErrorButton