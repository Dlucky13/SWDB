import React from "react";
import Row from "../components/row/row";
import {PlanetsList} from "../components/sw-components/item-lists";
import PlanetDetails from "../components/sw-components/details/planet-details";

export default class PlanetsPage extends React.Component {
   state = {
      selectedItem: null,
   }

   onItemSelected = (itemId) => {
      this.setState({
         selectedItem: itemId
      })
   }

   render() {
      const { selectedItem } = this.state;

      return (
         <Row
            leftSide={<PlanetsList onItemSelected ={this.onItemSelected}/>}
            rightSide={<PlanetDetails itemId={selectedItem} />}
         />
      )
   }
}