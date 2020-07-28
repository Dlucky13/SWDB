import React from "react";
import './item-list.css'
import SwapiService from "../../services/swapi-service";
import {Loader} from "../../common/loader/loader";

export default class ItemList extends React.Component {

   state = {
      dataList: null
   }

   componentDidMount() {
        this.props.getData()
         .then( (dataList) => {
            this.setState({ dataList })
         })
   }

   renderItems (arr) {
      return arr.map((item) => {
         const content = this.props.children(item);

         return (
            <li
               className='item'
               key={item.id}
               onClick={() => this.onItemClick(item.id)}
            >{content}</li>
         )
      })
   }

   onItemClick = (id) => {
      this.props.onItemSelected(id)
   }

   render () {

      const { dataList } = this.state
      const itemsList = dataList  ? this.renderItems(dataList) : <Loader />

      return (
         <div className='list-wrapper'>
            <ul className='list'>
               { itemsList }
            </ul>
         </div>
      )
   }

}

