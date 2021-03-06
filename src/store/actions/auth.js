import * as actionTypes     from "./actionTypes";
import axios from "axios";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return{
        type: actionTypes.AUTH_SUCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}

export const auth = (email, password, isSignUp ) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC8-9tWU1g1ig0D__1ipyqz9FOz0-09p_E";
        if (!isSignUp){
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8-9tWU1g1ig0D__1ipyqz9FOz0-09p_E";
        }
        axios.post(url,
        authData)
        .then( response => {
            console.log(response);
            console.log(response.data.expirationTime);
            dispatch(authSuccess(response.data.idToken, response.data.localId))
            dispatch(checkAuthTimeout(response.data.expirationTime))
        })
        .catch(err => {
            console.log(err)
            dispatch(authFail(err))
        })
    }

}