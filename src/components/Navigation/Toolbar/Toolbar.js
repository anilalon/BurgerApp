import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToggleSideDrawer from "../../SideDrawer/ToggleSideDrawer/ToggleSideDrawer";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <ToggleSideDrawer clicked={props.handleToggle}></ToggleSideDrawer>
    <div className={classes.Logo}>
      <Logo />
    </div>

    <nav className={classes.DesktopOnly}>
      <NavigationItems></NavigationItems>
    </nav>
  </header>
);

export default toolbar;
