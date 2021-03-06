import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
import order from "../../components/Order/Order";

export const purchaseBurgerSuccess = (id, orderData) => {
    return{
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFailed = (error) => {
    return{
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    }
}

export const purchaseOrderStart = (orderData) => {
    return dispatch => {
        axios.post("/orders.json", orderData)
        .then((response) => {
            dispatch(purchaseBurgerSuccess(response.data, orderData))
        })
        .catch((error) => 
        dispatch(purchaseBurgerFailed(error))
        );
    }
}
