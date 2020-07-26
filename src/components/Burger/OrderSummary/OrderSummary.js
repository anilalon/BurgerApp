import React from "react";
import Aux from "../../../hoc/Auxx";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p> Continue to Checkout?</p>
      <Button btnType="Danger" click={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" click={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
