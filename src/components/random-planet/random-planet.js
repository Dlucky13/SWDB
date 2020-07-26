import React from "react";
import planetImage from '../../common/431620344-planeti-rNLK-320x240-MM-100.jpg'
import './random-planet.css'

const planetData = {
   Population: 123123,
   'Rotation Period': 34,
   Diameter: 124
}

export const RandomPlanet = () => {

   const planetDescription = Object.keys(planetData).map( (key) => {
      return (
         <tr className='tableRow'>
            <td className='tableCell'>{key}</td>&nbsp;&nbsp;
            <td className='tableCell'>{planetData[key]}</td>
         </tr>
      )
   })

   return (
      <div className='RandomPlanet'>
            <img src={planetImage}/>
            <div className='descriptionWrapper'>
               <h3>Planet Name</h3>
               <table className='tableDescription'>
                  {planetDescription}
               </table>
         </div>
      </div>
   )
} 