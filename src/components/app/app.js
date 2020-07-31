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
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import StarshipDetails from "../sw-components/details/starship-details";
import LoginPage from "../../pages/login-page";
import SecretPage from "../../pages/secret-page";

export default class App extends React.Component {

   state = {
      hasError: false,
      swapiService: new SwapiService(),
      isLoggedIn: false
   }

   onLogin = () => {
      this.setState({
         isLoggedIn: true
      })
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
            <Router>
               <div className='App'>
                  <Header onServiceChange={this.onServiceChange}/>
                  <RandomPlanet/>
                  <Switch>
                     <Route path='/login/'
                            render={() => (
                               <LoginPage
                                  isLoggedIn={this.state.isLoggedIn}
                                  onLogin={this.onLogin}
                               />
                            )}/>
                     <Route path='/secret/'
                            render={() => (
                               <SecretPage isLoggedIn={this.state.isLoggedIn}/>
                            )}/>
                     <Route path='/' exact render={() => <h2>Welcome to Star DB</h2>}/>
                     <Route path='/people/:id?' component={PeoplePage}/>
                     <Route path='/planets' component={PlanetsPage}/>
                     <Route path='/starships' exact component={StarshipsPage}/>
                     <Route path='/starships/:id'
                            render={({match}) => {
                               return <StarshipDetails itemId={match.params.id}/>
                            }}/>
                      <Route render={() => <h2>This page is not exist 404</h2>} />
                  </Switch>

               </div>
            </Router>

         </SwapiServiceProvider>
      )
   }
}