import React from 'react'
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary/error-boundary";
import Row from "../row/row";


export default class PeoplePage extends React.Component{

   swapi = new SwapiService();

   state = {
      selectedItem: null,
   }

   getData = () => {
     return this.swapi.getAllPeople()
   }

   onItemSelected =(id) => {
      this.setState({
         selectedItem: id
      })
   }

   render () {

      const itemList = (
         <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.getData}
         >
            { (item) => `${item.name} (${item.birthYear})` }
         </ItemList >
      );

      const itemDetails = (
         <ErrorBoundary>
            <ItemDetails itemId={this.state.selectedItem}/>
         </ErrorBoundary>
      );

      return (
            <Row leftSide={itemList} rightSide={itemDetails}/>
      )
   }
}

