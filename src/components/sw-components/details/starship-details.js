import ItemDetails, {Record} from "../../item-details/item-details";
import React from "react";
import withSwapiService from "../../hocs/with-swapi-service";

const StarshipDetails = (props) => {
   return (
                  <ItemDetails {...props}>
                     <Record field='model' label='Model: '/>
                     <Record field='costInCredits' label='Cost: '/>
                  </ItemDetails>
   )
}

const mapMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getStarship,
      getImgUrl: swapiService.getStarshipImage
   }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
