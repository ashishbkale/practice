import React from 'react';

export default class Timer extends React.Component {
  constructor() {
    super(props);
    this.state = {
      secondsElapsed: 0,
    };
  }

  render() {
    return (
      <div>Seconds </div>
    );
  }
}
