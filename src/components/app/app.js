import React from 'react'
import {Header} from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import './app.css'
import ToggleButton from "../toggle-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import ErrorButton from "../error-button";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";
import ItemDetails, {Record} from "../item-details/item-details";
import Row from "../row/row";

export default class App extends React.Component {

   swapiService = new SwapiService()

   state = {
      randomPlanetShow: true,
      hasError: false
   }

   onToggleClick = () => {
      this.setState(({randomPlanetShow}) => {
         return {randomPlanetShow: !randomPlanetShow}
      } )
   }

   componentDidCatch(error, errorInfo) {
      this.setState({hasError: true})
   }

   render () {

      if (this.state.hasError) {
         return <ErrorIndicator />
      }

      const { randomPlanetShow } = this.state;

      const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService

      const personDetails = (
         <ItemDetails
            itemId={11}
            getData ={getPerson}
            getImgUrl={getPersonImage}
         >
            <Record field='gender' label='Gender: '/>
            <Record field='eyeColor' label='Eye Color: '/>
         </ItemDetails>
      );

      const starshipDetails = (
         <ItemDetails
            itemId={5}
            getData={getStarship}
            getImgUrl={getStarshipImage}
         >
            <Record field='model' label='Modek: '/>
            <Record field='length' label='Length: '/>
            <Record field='costInCredits' label='Cost: '/>
         </ItemDetails>
      );

      return (
         <div className='App'>
            <Header />
            {randomPlanetShow && <RandomPlanet/>}
            {/*<ToggleButton onToggleClick={this.onToggleClick} />*/}
            {/*<ErrorButton />*/}
            {/*<div className='peopleData-wrapper'>*/}
            {/*   <PeoplePage />*/}
            {/*</div>*/}
            <Row
               leftSide={personDetails}
               rightSide={starshipDetails}/>
         </div>
      )
   }
}