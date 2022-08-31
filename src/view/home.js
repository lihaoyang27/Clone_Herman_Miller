import Header from "../components/layout/Header";

import MainContent from "../components/homePage/MainContent";
import Footer from "../components/layout/Footer";

import {useDispatch} from "react-redux";

import {useEffect} from "react";
import {fetchAllProducts} from "../actions/mainPageAction";


const HomeView = () => {
    // const loading = useSelector(state => state.ProductReducer.showLoading)
    // const product = useSelector( state => state.ProductReducer.product)
    const dispatch = useDispatch()
    useEffect(() => {
        fetchAllProducts()(dispatch)
    }, [])
    return (
        <>

                <div className='homePage'>
                    <Header/>
                    <MainContent/>
                    <Footer/>
                </div>


        </>
    )
}

export default HomeView