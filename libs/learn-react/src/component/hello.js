import React from 'react';
import PropTypes from 'prop-types';
import Bye from './bye' 

export default class HelloMessage extends React.Component {
  constructor(){
    super()
    this.name="srinivas"
  }

  render() {
   
    return <div>
      {this.name}
      {this.props.name}
      {this.props.lastname}
    <Bye />
    </div>
  }
}

HelloMessage.defaultProps= {
  name:"K"
}

HelloMessage.propTypes= {
  lastname:PropTypes.string.isRequired
}