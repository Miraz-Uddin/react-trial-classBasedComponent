import { Component } from "react";
import Button from "./Button";

export default class Count extends Component {
  state = {
    count: 3,
  };

  incrementCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  decrementCount() {
    if (this.state.count > 0) {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1,
        };
      });
    }
  }

  resetCount() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <>
        <p>Count : {this.state.count}</p>
        <p>
          <Button
            btnName="Increment"
            className="btn-primary"
            thisBind={this.incrementCount.bind(this)}
          />
        </p>
        <p>
          <Button
            btnName="Decrement"
            className="btn-warning"
            thisBind={this.decrementCount.bind(this)}
          />
        </p>
        <p>
          <Button
            btnName="Reset"
            className="btn-danger"
            thisBind={this.resetCount.bind(this)}
          />
        </p>
      </>
    );
  }
}
