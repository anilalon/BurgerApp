import React, { Component } from "react";
import Aux from "../../hoc/Auxx";

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Aux>
          <div>Burger</div>
          <div>Build control</div>
        </Aux>
      </div>
    );
  }
}

export default BurgerBuilder;
