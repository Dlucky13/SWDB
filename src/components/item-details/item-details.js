import React from "react";
import './item-details.css'
import {Loader} from "../../common/loader/loader";
import ErrorButton from "../error-button";

const Record = ({item, field, label}) => {
   return (
      <li className='list-group-item'>
         <span>{label}</span>
         <span>{item[field]}</span>
      </li>
   );
};

export {
   Record
};

export default class ItemDetails extends React.Component {

   state = {
      item: null,
      isLoading: false,
      image: null
   }

   componentDidMount() {
      this.updateItem()
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.itemId !== prevProps.itemId) {
         this.updateItem();
      }
   }

   updateItem () {
      const { itemId, getData, getImgUrl } = this.props;
      if (!itemId) return;
      this.setState({isLoading: true})
      // this.swapiService.getPerson(itemId)
         getData(itemId)
            .then ((item) => {
               this.setState({
                  isLoading: false,
                  item,
                  image: getImgUrl(itemId)
               });
            });
   }

   // renderTable (item) {
   //    return Object.keys(item).map( (key) => {
   //       return (
   //          <tr className='table-row' key={key}>
   //             <td className='table-cell'>{ key }</td>
   //             <td className='table-cell'>{ item[key] }</td>
   //          </tr>
   //       )
   //    })
   // }

   renderItem(item) {
debugger
      return (<>
         <img src={this.state.image}
              className='person-image'
              alt='character'/>
         <div className='info-wrapper'>
            <h4>{item.name}</h4>
            {/*<table className='info-table'>*/}
               {/*<tbody>*/}
               {/*{this.renderTable(item)}*/}
               {/*</tbody>*/}
            {/*</table>*/}
            <ul className='list-group list-group-flush'>
               { React.Children.map(this.props.children, (child,idx) => {
                  return React.cloneElement(child, {item})
               }) }
            </ul>
            <ErrorButton />
         </div>
      </>)
   }

   render () {

      const {isLoading, item} = this.state;

         if (item) {
            const itemView = this.renderItem(item);
            return (
               <div className='person-details'>
                  {isLoading ? <Loader/> : itemView }
               </div>
            )
         } return <div>Select a item from a list</div>;
   }

}