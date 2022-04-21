import { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        onKeyUp={this.props.onKeyUp}
        placeholder={this.props.placeholder}
      ></input>
    );
  }
}
