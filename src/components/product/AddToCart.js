import {useDispatch, useSelector} from "react-redux";
import {LocalShipping} from "@material-ui/icons";
import './addToCart.scss'
import {useEffect, useState} from "react";
import {addToCart} from "../../actions/singleProductAction";
import {useParams} from "react-router-dom";





const AddToCart = ({optionAndPrice,productInfo}) => {
    const id = parseInt(Object.values(useParams())[0])
    const image = productInfo?.media?.split("|")[0]
    const isActive = productInfo?.isActive
    const name = productInfo?.name
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const cart = useSelector(state => state?.SingleProductReducer?.productInCart)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    //input change count value
    // const handleInput = (value) => {
    //     setProductSelectedWithCount({...productSelectedWithCount,count:value})
    // }


    return(
        <div className="addToCart">
            <div className='addToCartLeft'>{productInfo?.name}</div>
            <div className='addToCartRight'>
                <div><LocalShipping style={{marginRight:"6px"}}/>In Stock</div>
                <div>CS$ {Number.parseFloat(optionAndPrice?.price).toFixed(2)}</div>
                <div><input type="number" id='numberOfItem' min="1" defaultValue='1' onChange={(e) => {setCount(e.target.value)}}/></div>
                <div className='btnAdd' onClick={() => {
                    addToCart(optionAndPrice,id,image,isActive,name,count)(dispatch)
                }}>Add to Cart</div>
            </div>
        </div>
    )
}

export default AddToCart