import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { connect } from 'react-redux';
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../../store/actions/index";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    // alert("You chose continue");
    // this.setState({ loading: true });


    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      customer: {
        name: "Anil Alon",
        address: {
          street: "Derech Eylot 14",
          zipCode: "5591170",
          country: "Israel",
        },
        email: "anil.alon@test.com",
      },
      deliveryMethod: "fastest",
    };
    // axios
    //   .post("/orders.json", order)
    //   .then((response) => {
    //     this.setState({ loading: false });
    //     this.props.history.push("/");
    //   })
    //   .catch((error) => this.setState({ loading: false }));

    this.props.onOrderBurger(order)
  };
  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="email"
          placeholder="Your Mail"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Postal Code"
        ></input>
        <Button btnType="Success" click={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  onOrderBurger: (orderData) => dispatch(actions.purchaseOrderStart(orderData))
}

export default connect(mapStateToProps)(withErrorHandler(ContactData, axios));
