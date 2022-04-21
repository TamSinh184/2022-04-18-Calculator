import { Component } from "react";
import Button from "./Button";
import Input from "./Input";
export class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      operator: "",
      displayValue: 0,
    };
  }

  calculate = (operator) => {
    switch (operator) {
      case "+":
        this.setState({
          displayValue:
            parseFloat(this.state.firstNumber) +
            parseFloat(this.state.secondNumber),
        });
        break;
      case "-":
        this.setState({
          displayValue:
            parseFloat(this.state.firstNumber) -
            parseFloat(this.state.secondNumber),
        });
        break;
      case "*":
        this.setState({
          displayValue:
            parseFloat(this.state.firstNumber) *
            parseFloat(this.state.secondNumber),
        });
        break;
      case "/":
        this.setState({
          displayValue:
            parseFloat(this.state.firstNumber) /
            parseFloat(this.state.secondNumber),
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div class="container">
        <Input
          className="abc"
          onKeyUp={(e) => {
            this.setState({ firstNumber: e.target.value });
          }}
          placeholder="Enter value"
        />

        <Input
          className="abc"
          onKeyUp={(e) => {
            this.setState({ secondNumber: e.target.value });
          }}
          placeholder="Enter value"
        />

        <br></br>
        <h3>{this.state.displayValue}</h3>

        <Button
          className="btn btn-primary"
          onClick={(e) => {
            this.calculate("+");
          }}
          label="+"
        ></Button>
        <Button
          className="btn btn-primary"
          onClick={(e) => {
            this.calculate("-");
          }}
          label="-"
        ></Button>
        <Button
          className="btn btn-primary"
          onClick={(e) => {
            this.calculate("*");
          }}
          label="*"
        ></Button>
        <Button
          className="btn btn-primary"
          onClick={(e) => {
            this.calculate("/");
          }}
          label="/"
        ></Button>
      </div>
    );
  }
}
