import React from "react";
import PropTypes from 'prop-types'

const Row = ({leftSide, rightSide}) => {
   return (
      <div style={{display: 'flex', marginBottom: '20px'}}>
         { leftSide }
         { rightSide }
      </div>
   )
}

Row.propTypes = {
   leftSide: PropTypes.node,
   rightSide: PropTypes.node
}

export default Row;