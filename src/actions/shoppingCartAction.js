import {API_URL, CHECKOUT_SUCCESS, CREATE_ORDER_FAILED, CREATE_ORDER_SUCCESS} from "../helper/constant";
import axios from "axios";

export const createOrder = (cart) => dispatch =>{
    let patch = {}
    patch.taxRate = 1.13;
    patch.isActive = true;
    patch.isDelete = false;
    patch.orderItems = []
    cart.map((item, index) => {
        patch.orderItems.push({
            quantity: parseInt(item.count),
            product:item.id,
            profileItems: [],
        })
        // for(let i=0;i<item.selection.length;i++){
        //     patch.orderItems[index].profileItems.push(item.detail.profileCategories[i].profileItems[item.selection[i]].id)
        // }
    })
    const token = localStorage.getItem("token")



    return(
        axios.post(`${API_URL}order`,patch,{headers:{"Authorization":`bearer ${token}`}}).then(res => {
            console.log(`${CREATE_ORDER_SUCCESS}`,res.data.data.id)
            dispatch({
                type:CREATE_ORDER_SUCCESS,
                // payload:res
            })
            // localStorage.setItem("cart",JSON.stringify(res.data.data.id))
            return true
        }).catch(error =>{
            console.log(`${CREATE_ORDER_FAILED}`,error.response)
            dispatch({
                type: CREATE_ORDER_FAILED,
                payload:error.response
            })
            return false
        })
    )
}

export const actPayment = (res, order) => {
    console.log("payment results", res);
    let data = {};
    data.order = []
    //data.order = [1]
    data.order[0] = JSON.parse(localStorage.getItem("cart"))
    data.gateway = res.payer.payment_method;
    data.status = res.state;
    data.transactionId = res.id;
    data.amount = parseFloat(res.transactions.map(a=>a.amount.total))
    data.notes = "placeholder"
    const token = localStorage.getItem("token")

    return (dispatch) => {

        axios.post(`${API_URL}payment`,data,
            {headers:{"Authorization":`bearer ${token}`}})
            .then(res => {
                //routerHistory.push("/")
                dispatch({
                    type:CHECKOUT_SUCCESS,

                })
            }).catch(error => {
            console.log(error.response)
        })
    }

}
