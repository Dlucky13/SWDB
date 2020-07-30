import React from "react";
import {PersonsList} from "../components/sw-components/item-lists";
import PersonDetails from "../components/sw-components/details/person-details";
import Row from "../components/row/row";

export default class PeoplePage extends React.Component {
   state = {
      selectedItem: null
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
            leftSide={<PersonsList onItemSelected={this.onItemSelected}/>}
            rightSide={<PersonDetails itemId={selectedItem} />}
         />
      )
   }
}