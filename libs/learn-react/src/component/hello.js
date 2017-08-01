import React from 'react';
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
    <Bye />
    </div>
  }
}
