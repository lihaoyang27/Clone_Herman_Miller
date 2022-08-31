import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CartPage from "../components/cart/CartPage";
import CartPageHeading from "../components/cart/CartPageHeading";



const CartView = () => {
    // const dispatch = useDispatch()
    // const productFromLocalStorage = JSON.parse(localStorage.getItem("cart"))
    // useEffect(() => {
    //     getProductFromLocalStorage(productFromLocalStorage)(dispatch)
    // },[])
    return(
        <>
            <Header/>
            <CartPageHeading path='cart'/>
            <CartPage/>
            <Footer/>
        </>
    )
}

export default CartView