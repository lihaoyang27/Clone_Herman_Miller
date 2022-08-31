import {
    DISPLAY_BIG_ITEM,
    FETCH_PRODUCT,
    FILTER_PRODUCT, HIDE_LOADING,
    SHOW_LOADING,
    SORT_PRODUCT
} from "../helper/constant";


const initState = {
    product:[],
    filterProduct:[],
    displayBigItem:false,
    cart:[],
    showLoading:false
}

export const ProductReducer = (state = initState, action) => {
    const {type, payload} = action

    switch(type){
        case FETCH_PRODUCT:
            console.log('reducer--product->',payload.data)
            return {...state,product:payload.data}

        case FILTER_PRODUCT:
            let filterProductByPrice = [...state.product]
            if( payload === '500'){
                filterProductByPrice = filterProductByPrice.filter(item => item.price <= 1000)
            }else if(payload === '1000'){
                filterProductByPrice = filterProductByPrice.filter(item => item.price >= 1000 && item.price <= 1500)
            }else if(payload === '1500'){
                filterProductByPrice = filterProductByPrice.filter(item => item.price >= 1500 && item.price <= 2000)
            }else if(payload === '2000') {
                filterProductByPrice = filterProductByPrice.filter(item => item.price >= 2000)
            }else{filterProductByPrice = [...state.product]}
            console.log('reducer--filter-->',filterProductByPrice)
            return {...state,filterProduct: filterProductByPrice}

        case SORT_PRODUCT:
            let sortProduct = [...state.filterProduct]
            //function for SORT
            let compare = function (prop) {
                return function (obj1, obj2) {
                    let val1 = obj1[prop];
                    let val2 = obj2[prop];
                    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                        val1 = Number(val1);
                        val2 = Number(val2);
                    }
                    if (val1 < val2) {
                        return -1;
                    } else if (val1 > val2) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }
            if( payload === "nameAtoZ"){
                sortProduct = sortProduct.sort(compare("name"))
            }else if(payload === "nameZtoA"){
                sortProduct = sortProduct.sort(compare("name"))
                sortProduct = sortProduct.reverse()
            }else if(payload === "priceLtoH"){
                sortProduct = sortProduct.sort(compare("price"))
            }else if(payload === "priceHtoL"){
                sortProduct = sortProduct.sort(compare("price"))
                sortProduct = sortProduct.reverse()
            }
            return{...state,filterProduct: sortProduct}

        case DISPLAY_BIG_ITEM:
            // let show = {...state.displayBigItem}
            let show = state.displayBigItem
            show = !show
            // show ? show = false : show = true
            console.log("showBIG--",show)
            return {...state,displayBigItem: show}

        case SHOW_LOADING:
            return {...state, showLoading:true}

        case HIDE_LOADING:
            return {...state, showLoading:false}

        // case ADD_TO_CART:
        //     newCart = [...state.cart]
        //     itemIdx = newCart.findIndex(item=>item.id === payload.id)
        //     if(itemIdx === -1){
        //         newCart.push(payload)
        //     }else{
        //         newCart[itemIdx].count ++
        //     }
        //     return{...state, cart:newCart}






        default:
            return state
    }
}