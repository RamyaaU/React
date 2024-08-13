//class based component

import React  from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    //creation of state 
    this.state = {
        //creation of state object
      count: 0,
    };
  }

  handleAttack() {
    // alert("Attack clicked");
    //increments the count by 1 
    //this.setState({ count: this.state.count + 1 });

    //new syntax for setstate
    this.setState((previousState) => {
        return {
            count : previousState.count + 1,
        }
    })
  }

  handleDefence() {
    // alert("Defence clicked");
    //decrements by 1
    //this.setState({ count: this.state.count - 1 });

    this.setState((previousState) => {
        return {
            count : previousState.count - 1,
        }
    })
  }

  render() {
    return (
      <div className="row text-white">
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleAttack} style={{ width: "200px" }}>
          +1
        </button>
        <button onClick={this.handleDefence} style={{ width: "200px" }}>
          -1
        </button>
      </div>
    );
  }
}