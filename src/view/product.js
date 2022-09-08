import Header from "../components/layout/Header";
import ProductPageHeading from "../components/product/ProductPageHeading";
import MainProductPage from "../components/product/MainProductPage";
import Footer from "../components/layout/Footer";
import AddToCart from "../components/product/AddToCart";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchSingleProduct} from "../actions/singleProductAction";
import Loading from "../components/layout/Loading";



const ProductView = () => {
    const id = parseInt(Object.values(useParams())[0])

    const dispatch = useDispatch()
    // //fetch single product
    useEffect(() => {
            fetchSingleProduct(id)(dispatch)
    },[])


    const productInfo = useSelector(state => state?.SingleProductReducer?.singleProduct)
    const loading = useSelector( state => state.ProductReducer.showLoading)


    const [optionAndPrice, setOptionAndPrice] = useState(null)
    let getProduct = (product,price) => {
        setOptionAndPrice({...product,price:price})
    }
    useEffect(()=>{
        console.log(optionAndPrice)
    },[optionAndPrice])
    return(
        <>
            {
                !!productInfo ?
                    <>
                        <Header/>
                        { loading ? <Loading/>
                            :
                            <>
                                <ProductPageHeading path="Office Chairs" title={productInfo?.name}/>
                                <MainProductPage productInfo={productInfo} getProduct={getProduct}/>
                                <Footer/>
                                <AddToCart optionAndPrice={optionAndPrice} productInfo={productInfo}/>
                            </>
                        }
                    </>
                    :undefined
            }
        </>
    )
}

export default ProductView