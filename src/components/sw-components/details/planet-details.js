import ItemDetails, {Record} from "../../item-details/item-details";
import React from "react";
import withSwapiService from "../../hocs/with-swapi-service";

const PlanetDetails = (props) => {
   return (
      <ItemDetails {...props} >
         <Record field='name' label='Planet Name: '/>
         <Record field='Diameter' label='Diameter: '/>
      </ItemDetails>
   )
}

const mapMethodsToProps = (swapi) => {
   return {
      getData: swapi.getPlanet,
      getImgUrl: swapi.getPlanetImage
   }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);