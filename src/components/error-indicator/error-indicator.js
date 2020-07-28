import React from "react";

const ErrorIndicator = () => {
   return (
      <div style={{textAlign: 'center', fontSize: '25px'}}>
         <div className='badge badge-danger'>  BOOOOOM!!! </div>
         <div className='badge-info'>We are already working on a solution to this situation</div>
      </div>
   )
}

export default ErrorIndicator