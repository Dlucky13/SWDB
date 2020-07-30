import React from 'react'
import {Header} from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import './app.css'
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi-service";
import PlanetsPage from "../../pages/planets-page";
import StarshipsPage from "../../pages/starship-page";
import PeoplePage from "../../pages/people-page";

export default class App extends React.Component {

   state = {
      hasError: false,
      swapiService: new SwapiService()
   }


   onServiceChange = () => {
      this.setState(({swapiService}) => {
         const Service = swapiService instanceof SwapiService
            ? DummySwapiService
            : SwapiService;

         return {
            swapiService: new Service()
         };
      });
   };

   componentDidCatch(error, errorInfo) {
      this.setState({hasError: true})
   }

   render() {

      if (this.state.hasError) {
         return <ErrorIndicator/>
      }


      return (
         <SwapiServiceProvider value={this.state.swapiService}>
            <div className='App'>
               <Header onServiceChange={this.onServiceChange}/>
               <RandomPlanet />
               <PeoplePage/>
               <PlanetsPage/>
               <StarshipsPage/>
            </div>

         </SwapiServiceProvider>
      )
   }
}