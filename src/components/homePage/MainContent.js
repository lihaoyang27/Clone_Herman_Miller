import {useDispatch, useSelector} from "react-redux";
// import {ProductReducer} from "../../reducer";
import {useEffect} from "react";
import {fetchAllProducts, filterProduct} from "../../actions/mainPageAction";
import ProductItem from "./ProductItem";
import './MainContent.scss'
import LayoutController from "./LayoutController";
import PageHeading from "../layout/PageHeading";


const MainContent = () => {
    const allProduct = useSelector(state => state.ProductReducer.product)
    const productAfterFilter = useSelector(state => state.ProductReducer.filterProduct)
    const showBigItem = useSelector(state => state.ProductReducer.displayBigItem)
    const dispatch = useDispatch()
    useEffect(() => {
        fetchAllProducts()(dispatch)
    }, [])
    useEffect(() => {
        filterProduct()(dispatch)
    }, [allProduct])

    // console.log('filterProduct from MainContent-->',filterProduct)

    return (
        <>
            <PageHeading path="Office" title="Office Chairs"/>
            <LayoutController/>
            <div className="mainContentContainer">
                {productAfterFilter.map((value, index) => {
                    return (
                        <div key={index} className={showBigItem?"productItemBig":"productItem"}>
                            <ProductItem productInfo={value}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MainContent