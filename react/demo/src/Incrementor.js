import React, { Component } from 'react';

export default class Incrementor extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      total: this.props.initial
    };
  }
  inc() {
    this.setState({
      total: this.state.total + 1
    });
  }
  render() {
    return (
      <div>
        <h1>Result is : {this.state.total}</h1>
        <p><button onClick={this.inc.bind(this)}>Add</button></p>
      </div>
    );
  }
}
