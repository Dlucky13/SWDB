import React from "react";
import SwapiService from "../../services/swapi-service";
import './random-planet.css';
import {Loader} from "../../common/loader/loader";
import ErrorIndicator from "../error-indicator/error-indicator";
import PropTypes from 'prop-types';


export default class RandomPlanet extends React.Component {

   static defaultProps = {
      updateInterval: 20000,
   }

   static propTypes = {
      updateInterval: PropTypes.number
   };


   state = {
      error: false,
      loading: true,
      id: null,
      name: null,
   }

   swapiService = new SwapiService();



   componentDidMount() {
      this.interval = setInterval(this.updatePlanet, this.props.updateInterval);
   }

   componentWillUnmount() {
      clearInterval(this.interval)
   }

   onPlanetLoaded = (planet) => {
      this.setState({ loading:false , ...planet } );
   }

   onError = (err) => {
      this.setState( {
         error: true
      })
   }

   updatePlanet = () => {
      const id = Math.floor(Math.random()*25) + 2;
      this.swapiService
         .getPlanet(id)
         .then(this.onPlanetLoaded)
         .catch(this.onError);
   }

   render() {
      const { error, loading, ...planet } = this.state;

      if(error) {
         return <ErrorIndicator />
      }
      const content = loading ? <Loader /> : <PlanetView planet = { planet }/>;

      return (
         <div className='RandomPlanet'>
            { content }
         </div>
      )
   }
}


const PlanetView = ({planet}) => {
   const { id, name } = planet
   const planetDescription = Object.keys(planet).map((key) => {
      return (
         <tr className='tableRow' key={key}>
            <td className='tableCell'>{key}</td>
            <td className='tableCell'>{planet[key]}</td>
         </tr>
      )
   })

   return (
      <>
         <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt='planetImg'
         />
         <div className='descriptionWrapper'>
            <h3>{name}</h3>
            <table className='tableDescription'>
               <tbody>
               { planetDescription }
               </tbody>
            </table>
         </div>
      </>
   )
}