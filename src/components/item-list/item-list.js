import React from "react";
import './item-list.css'
import PropTypes from 'prop-types'

const ItemList =(props) => {

   const { dataList, children, onItemSelected } = props

   const showContent = dataList.map((item) => {
         const content = children(item);

         return (
            <li
               className='item'
               key={item.id}
               onClick={() => onItemClick(item.id)}
            >{content}</li>
         )
      }
   )

   const onItemClick = (id) => {
      onItemSelected(id)
   }

   return (
         <div className='list-wrapper'>
            <ul className='list'>
               { showContent }
            </ul>
         </div>
   )
}

ItemList.defaultProps ={
   onItemSelected: () => {}
};

ItemList.propTypes = {
   dataList: PropTypes.arrayOf(PropTypes.object).isRequired,
   children: PropTypes.func.isRequired,
   onItemSelected: PropTypes.func
}


export default ItemList
