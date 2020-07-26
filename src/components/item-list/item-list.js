import React from "react";
import './item-list.css'

const personsData = [
   'Luke Skywalker', 'Dart Vader', 'R2-D2', 'Palpatin', 'Obivan Kenobi'
]

export const ItemList = () => {

   const personsList = personsData.map( person => {
      return (
         <li className='list-item'>{person}</li>
      )
   })

   return (
      <div className='list-wrapper'>
         <ul className='person-list'>
            { personsList }
         </ul>
      </div>
   )
}