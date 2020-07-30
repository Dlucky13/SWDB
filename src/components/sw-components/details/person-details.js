import ItemDetails, {Record} from "../../item-details/item-details";
import React from "react";
import withSwapiService from "../../hocs/with-swapi-service";

const PersonDetails = (props) => {
   return (
            <ItemDetails {...props} >
               <Record field='gender' label='Gender: '/>
               <Record field='eyeColor' label='Eye Color: '/>
            </ItemDetails>
   )
}

const mapMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getPerson,
      getImgUrl: swapiService.getPersonImage
   }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);