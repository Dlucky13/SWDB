import React from "react";
import withData from "../hocs/with-data";
import ItemList from "../item-list/item-list";
import withSwapiService from "../hocs/with-swapi-service";
import withChildFunction from "../hocs/with-child-function";
import {compose} from "../hocs/compose";



const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({name, model}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapi) => {
   return {
      getData: swapi.getAllPeople
   }
};

const mapPlanetMethodsToProps = (swapi) => {
   return {
      getData: swapi.getAllPlanets
   }
}

const mapStarshipToProps = (swapi) => {
   return {
      getData: swapi.getAllStarships
   }
}


const PersonsList = compose(
                        withSwapiService(mapPersonMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                     )(ItemList)

const PlanetsList = compose(
                        withSwapiService ( mapPlanetMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                     )(ItemList )

const StarshipsList = compose(
                        withSwapiService(mapStarshipToProps),
                        withData,
                        withChildFunction(renderModelAndName)
                     )( ItemList );

export {
   PersonsList,
   PlanetsList,
   StarshipsList
}

