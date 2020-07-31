import React from "react";
import {StarshipsList} from "../components/sw-components/item-lists";
import { withRouter } from 'react-router-dom'

const StarshipsPage = ({history}) => {

      return (
            <StarshipsList onItemSelected={(id) => history.push(id)} />
      )
   }

export default withRouter(StarshipsPage);