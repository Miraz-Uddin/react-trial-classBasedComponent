import { Component } from "react";

export default class Button extends Component {
  render() {
    const { className, btnName, thisBind } = this.props;
    return (
      <>
        <button className={`btn ${className} btn-sm`} onClick={thisBind}>
          {btnName}
        </button>
      </>
    );
  }
}
