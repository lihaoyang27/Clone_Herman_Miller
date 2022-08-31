import api from '../helper/api'
import {
    DISPLAY_BIG_ITEM,
    FETCH_PRODUCT,
    FILTER_PRODUCT,
    HIDE_LOADING,
    SHOW_LOADING,
    SORT_PRODUCT
} from "../helper/constant";

export const fetchAllProducts = () => async dispatch => {
    // dispatch({type: SHOW_LOADING})
    try {
        const result = await api.get('product')
        if (result.data) {
            dispatch({type: FETCH_PRODUCT, payload: result.data})
            // dispatch({type: HIDE_LOADING})
        }
    } catch (e) {
        console.log('cant get data')
        // dispatch({type: HIDE_LOADING})
    }
}

export const filterProduct = (value) => dispatch => {
    dispatch({
        type: FILTER_PRODUCT,
        payload: value
    })
}

export const sortProduct = value => dispatch => {
    dispatch({
        type: SORT_PRODUCT,
        payload: value
    })
}

export const showBigItem = () => dispatch => {
    dispatch({
        type: DISPLAY_BIG_ITEM
    })
}



