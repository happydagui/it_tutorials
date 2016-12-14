import React, { Component } from 'react';

export class HelloTime extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>现在的时间是：{this.props.date.toTimeString()}</div>
    );
  }
}


export default HelloTime;
/*
一定要export default, 否则 Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined.
*/