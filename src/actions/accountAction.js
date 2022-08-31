import {
    API_URL_LOGIN,
    USER_DATA_FROM_LOCAL_STORAGE,
    USER_LOGIN,
    USER_LOGON_ERROR,
    USER_LOGOUT
} from "../helper/constant";
import axios from "axios";

export const userLogin = (formValues) => dispatch => {
        axios.post(API_URL_LOGIN,formValues)
            .then(result => {
                dispatch({
                    type: USER_LOGIN,
                    user: result.data.data.user,
                    token: result.data.data.token
                })
                window.history.go(-1)
            }).catch (e => {
        console.log(e)
        dispatch({
            type:USER_LOGON_ERROR,
        })
    })
}

export const getUserDateFromLocalStorage = (userData,userToken) => dispatch => {
    dispatch({
        type:USER_DATA_FROM_LOCAL_STORAGE,
        userData: userData,
        userToken: userToken,
    })
}

export const userLogout = () => dispatch => {
    dispatch({
        type: USER_LOGOUT
    })
}