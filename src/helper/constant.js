import * as yup from 'yup'
export const FETCH_PRODUCT = 'FETCH_PRODUCT'
export const FILTER_PRODUCT = 'FILTER_PRODUCT'
export const SORT_PRODUCT = 'SORT_PRODUCT'
export const DISPLAY_BIG_ITEM = 'DISPLAY_BIG_ITEM'
export const ADD_TO_CART = 'ADD_TO_CART'
export const FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT'
export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'
export const GET_PRODUCT_URL = 'http://api-ecommerce.mark2win.com/product';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const CHANGE_PRODUCT_QUANTITY = 'CHANGE_PRODUCT_QUANTITY'
export const PRODUCT_FROM_LOCAL_STORAGE = 'PRODUCT_FROM_LOCAL_STORAGE'
export const DEFAULT_USERNAME = "markxu@mark2win.com"
export const DEFAULT_PASSWORD = "Mark2win"
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGON_ERROR = 'USER_LOGON_ERROR'
export const USER_LOGOUT = 'USER_LOGOUT'
export const API_URL_LOGIN = "http://api-ecommerce.mark2win.com/auth/login"
export const USER_DATA_FROM_LOCAL_STORAGE = 'USER_DATA_FROM_LOCAL_STORAGE'
export const CHECKOUT_SUCCESS = "CHECKOUT_SUCCESS"
export const API_URL = "http://api-ecommerce.mark2win.com/"
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED'

const MIN_NAME = 2
const MAX_NAME = 30
const MIN_PASSWORD = 6
const MAX_PASSWORD = 30

export const EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const CUSTOMER_VALIDATOR={
    email: yup.string().email().required().trim()
        .matches(new RegExp(EMAIL),"email must be a valid email"),
    password: yup.string().min(MIN_PASSWORD).max(MAX_PASSWORD).required()
}

// export const CUSTOMER_VALIDATOR={
//     name: yup.string().required().trim()
//         .min(MIN_NAME, `name must be at least ${MIN_NAME} characters`)
//         .max(MAX_NAME, `name must be no more than ${MAX_NAME} characters`),
//     age: yup.lazy((value) => value === ''? yup.number():yup.number().positive().integer().typeError('Please input valid age')),
//     email: yup.string().email().required().trim()
//         .matches(new RegExp(EMAIL),"email must be a valid email"),
//     password: yup.string().min(MIN_PASSWORD).max(MAX_PASSWORD).required()
// }