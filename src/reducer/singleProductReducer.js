import {
    ADD_TO_CART,
    CHANGE_PRODUCT_QUANTITY, CHECKOUT_SUCCESS,
    FETCH_SINGLE_PRODUCT,
    PRODUCT_FROM_LOCAL_STORAGE,
    REMOVE_PRODUCT
} from "../helper/constant";

const initState = {
    singleProduct: null,
    productInCart: [],

}

export const SingleProductReducer = (state = initState, action) => {
    const {type, payload} = action

    switch (type) {
        case FETCH_SINGLE_PRODUCT:
            return {...state,singleProduct: payload}

        case ADD_TO_CART:
            let productTem =
                {
                    ...action.optionAndPrice,
                    id: action.id,
                    image: action.image,
                    isActive: action.isActive,
                    name: action.name,
                    count: action.count,
                }
            let arrTemReducer = [...state.productInCart]
            let arrTemAction = Object.values(productTem)
            let temp = true
            for (let i = 0; i < arrTemReducer.length; i++) {
                if (
                    Object.values(arrTemReducer[i])[0] === arrTemAction[0] &&
                    Object.values(arrTemReducer[i])[1] === arrTemAction[1] &&
                    Object.values(arrTemReducer[i])[2] === arrTemAction[2] &&
                    Object.values(arrTemReducer[i])[3] === arrTemAction[3] &&
                    Object.values(arrTemReducer[i])[4] === arrTemAction[4] &&
                    Object.values(arrTemReducer[i])[5] === arrTemAction[5] &&
                    Object.values(arrTemReducer[i])[6] === arrTemAction[6] &&
                    Object.values(arrTemReducer[i])[7] === arrTemAction[7]
                ) {
                    arrTemReducer[i].count = parseInt(arrTemReducer[i].count) + parseInt(action.count)
                    temp = false
                    break
                }
            }
            if(temp){
                arrTemReducer.push(productTem)
            }
            return {...state,productInCart: arrTemReducer}


        case REMOVE_PRODUCT:
            let arrTem = [...state.productInCart]
            arrTem.splice(payload,1)
            return {...state,productInCart: arrTem}

        case CHANGE_PRODUCT_QUANTITY:
            let arrTemInCart = [...state.productInCart]
            arrTemInCart[action.index].count = action.quantity
            return {...state, productInCart: arrTemInCart}

        case PRODUCT_FROM_LOCAL_STORAGE:
            let arrTemLocalStorage = []
            arrTemLocalStorage = payload
            return {...state, productInCart: arrTemLocalStorage}

        case CHECKOUT_SUCCESS:
            return {...state, productInCart: []}


        default:
            return state
    }
}