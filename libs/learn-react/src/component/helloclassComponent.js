import React from 'react';
import PropTypes from 'prop-types';
import Bye from './bye';
import Welcome from './functionalComponent';

export default class HelloMessage extends React.Component {
  constructor(){
    super()
    this.name="srinivas"
  }

  render() {
   
    return <div>
      <Welcome/>
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