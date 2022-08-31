import {useDispatch, useSelector} from "react-redux";
import './cartPage.scss'
import {changeProductQuantity, removeProduct} from "../../actions/singleProductAction";
import {useEffect, useState} from "react";
import Payment from "./Payment";
import {createOrder} from "../../actions/shoppingCartAction";
import {userLogout} from "../../actions/accountAction";
import {Button} from "@material-ui/core";


const CartPage = () => {
    const cart = useSelector(state => state?.SingleProductReducer?.productInCart)
    const dispatch = useDispatch()
    // const userData = useSelector(state => state.AccountReducer.userData)
    const [orderStatus, setOrderStatus] = useState(false)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const onCheckout = (e) =>{
        createOrder(cart)(dispatch).then((result)=>{
            if(!result){
                userLogout()(dispatch)
                window.location.href = '/login'
                // e.history.push("/login")
            }else{
                setOrderStatus(true)
            }
        })

    }


    return (
        <>
            {cart.length > 0 ?
                <div className="cartPageContainer">
                    <div className='cartPageSubtitle'>
                        <div className='productInformationSub'>Product Information</div>
                        <div className='productOptionSub'></div>
                        <div className='availabilitySub'> Availability</div>
                        <div className='priceSub'>Price</div>
                        <div className='quantitySub'>Quantity</div>
                        <div className='totalSub'>Total</div>
                    </div>
                    <div className='cartItemContainer'>
                        {cart.map((value, index) => {
                            return (
                                <div className='cartItem' key={index}>
                                    <div className='productImage'><img src={value.image} alt=""/></div>
                                    <div className='productOption'>
                                        <h3>{value.name}</h3>
                                        {Object.values(value).slice(0, 7).map((item, i) => {
                                            return (
                                                <div key={i}>{item.title} : {item.name}</div>
                                            )
                                        })}
                                        <div><a href={`/product/${value.id}`}
                                                style={{textDecoration: 'underline', color: 'blue'}}>Edit Item</a></div>
                                        <div style={{textDecoration: 'underline', color: 'blue'}}
                                             onClick={() => {
                                                 removeProduct(index)(dispatch)
                                             }}>Remove Item
                                        </div>
                                    </div>
                                    <div className='availability'>{value.isActive ? <span>In Stock</span> :
                                        <span>Out of Stock</span>}</div>
                                    <div className='price'>${Number.parseFloat(value.price).toFixed(2)}</div>
                                    <div className='quantity'><input type="number" min='1'
                                                                     defaultValue={value.count}
                                                                     onChange={(e) => {
                                                                         changeProductQuantity(e.target.value, index)(dispatch)
                                                                     }}/></div>
                                    <div
                                        className='total'>${Number.parseFloat(parseInt(value.price) * parseInt(value.count)).toFixed(2)}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="display-col align-center">
                        {!orderStatus ?
                            <Button onClick={onCheckout} style={{
                                width: "200px",
                                height: "40px",
                                color: "white",
                                backgroundColor: "orangered",
                                margin: "40px"
                            }}>Checkout</Button>
                            : <Payment/>
                        }
                    </div>
                </div>
                :
                <div className='emptyCart' style={{margin: '50px 0'}}>
                    <h1>Your cart is empty, but it doesn’t have to be.</h1>
                    <a href="/" style={{textDecoration: 'underline', color: 'blue'}}>Continue Shopping</a>
                </div>

            }
        </>
    )
}

export default CartPage