import React from "react";
import Aux from "../../../hoc/Auxx";

const orderSummary = (props) => {
  console.log(props.ingredients);
  const ingredientsSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>:{" "}
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicoius Burger with ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p> Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
