import React from "react";
import BurgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img
      src={BurgerLogo}
      alt="MyBurger"
      // style={{ height: props.height, marginBottom: props.margin }}
    ></img>
  </div>
);

export default logo;
