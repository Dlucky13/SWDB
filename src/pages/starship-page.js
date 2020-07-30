import React from "react";
import Row from "../components/row/row";
import {StarshipsList} from "../components/sw-components/item-lists";
import StarshipDetails from "../components/sw-components/details/starship-details";

export default class StarshipsPage extends React.Component {
   state = {
      selectedItem: null
   }

   onItemSelected = (itemId) => {
      this.setState({
         selectedItem: itemId
      })
   }

   render () {
      const { selectedItem } = this.state;

      return (
         <Row
            leftSide={<StarshipsList onItemSelected={this.onItemSelected} />}
            rightSide={<StarshipDetails itemId={selectedItem} />}
         />
      )
   }
}