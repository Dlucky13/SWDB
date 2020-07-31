import React from "react";
import {PersonsList} from "../components/sw-components/item-lists";
import PersonDetails from "../components/sw-components/details/person-details";
import Row from "../components/row/row";
import { withRouter } from 'react-router-dom';

const PeoplePage = ({history, match}) => {
      return (
         <Row
            leftSide={<PersonsList onItemSelected={(id) => {history.push(id)}}/>}
            rightSide={<PersonDetails itemId={match.params.id} />}
         />
      )
}

export default withRouter(PeoplePage)