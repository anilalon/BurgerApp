import React, { Component } from "react";
import Aux from "../../../hoc/Auxx/Auxx";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // this could be a functional component, doesn't have to be a class
  componentWillUpdate() {
    console.log("order update");
  }
  render() {
    console.log(this.props.ingredients);
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      (igkey) => {
        return (
          <li key={igkey}>
            <span style={{ textTransform: "capitalize" }}>{igkey}</span>:{" "}
            {this.props.ingredients[igkey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Delicoius Burger with ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p> Continue to Checkout?</p>
        <Button btnType="Danger" click={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" click={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
