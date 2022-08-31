
import {
    ADD_TO_CART,
    CHANGE_PRODUCT_QUANTITY,
    FETCH_SINGLE_PRODUCT,
    GET_PRODUCT_URL,
    HIDE_LOADING, PRODUCT_FROM_LOCAL_STORAGE, REMOVE_PRODUCT,
    SHOW_LOADING
} from "../helper/constant";
import axios from "axios";

export const fetchSingleProduct = (id) => dispatch => {
    dispatch({type: SHOW_LOADING})
    axios.get(GET_PRODUCT_URL
    ).then(result => {
        let singleProduct
        singleProduct = result?.data.data.filter(item => item.id === id)[0]
        dispatch({
            type: FETCH_SINGLE_PRODUCT,
            payload: singleProduct
        })
        dispatch({type: HIDE_LOADING})
    }).catch(e => {
        console.log(e)
        dispatch({type: HIDE_LOADING})
    })
}

export const addToCart = (optionAndPrice,id,image,isActive,name,count) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        optionAndPrice: optionAndPrice,
        id: id,
        image: image,
        isActive: isActive,
        name: name,
        count: count,
    })
}

export const removeProduct = (index) => dispatch => {
    dispatch({
        type: REMOVE_PRODUCT,
        payload: index
    })
}

export const changeProductQuantity = (quantity,index) => dispatch => {
    dispatch({
        type: CHANGE_PRODUCT_QUANTITY,
        quantity: quantity,
        index: index
    })
}

export const getProductFromLocalStorage = localStorage => dispatch => {
    dispatch({
        type: PRODUCT_FROM_LOCAL_STORAGE,
        payload:localStorage
    })
}