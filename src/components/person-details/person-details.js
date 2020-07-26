import React from "react";
import r2d2 from '../../../src/common/download.jpeg'
import './person-details.css'

const r2d2Data = {
   Gender: 'male',
   'Birth Year': 234,
   'Eye color': 'red'
}

export const PersonDetails = () => {

   const tableData = Object.keys(r2d2Data).map( (key) => {
      return (
         <tr className='table-row'>
            <td className='table-cell'>{ key }</td>&nbsp;&nbsp;
            <td className='table-cell'>{ r2d2Data[key] }</td>
         </tr>
      )
   })

   return (
      <div className='person-details'>
         <img src={r2d2} className='person-image'/>
         <div className='info-wrapper'>
            <h4>R2-D2</h4>
            <table className='info-table'>
               { tableData }
            </table>
         </div>
      </div>
   )
}