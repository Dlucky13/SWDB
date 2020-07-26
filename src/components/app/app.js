import React from 'react'
import {Header} from "../header/header";
import {ItemList} from "../item-list/item-list";
import {RandomPlanet} from "../random-planet/random-planet";
import {PersonDetails} from "../person-details/person-details";
import './app.css'

export default class App extends React.Component {

   render () {
      return (
         <div className='App'>
            <Header />
            <RandomPlanet />
            <ItemList />
            <PersonDetails />
         </div>
      )
   }
}