
import {Check, CheckCircle, RadioButtonUnchecked, Star, StarOutline} from "@material-ui/icons";
import {useEffect, useState} from "react";
import './productInfo.scss'
import {useSelector} from "react-redux";

const ProductInfo = ({getProduct}) => {
    const [frameCheck, setFrameCheck] = useState([])
    const [sizeCheck, setSizeCheck] = useState([])
    const [backSupportCheck, setBackSupportCheck] = useState([])
    const [tiltCheck, setTiltCheck] = useState([])
    const [armsCheck, setArmsCheck] = useState([])
    const [armpadCheck, setArmpadCheck] = useState([])
    const [casterCheck, setCasterCheck] = useState([])
    const productInfo = useSelector(state => state.SingleProductReducer.singleProduct)


    const [productSelected, setProductSelected] = useState({
        frame:{},
        size:{},
        backSupport:{},
        tilt:{},
        arms:{},
        armpad:{},
        caster:{},
    })


    const [productPrice ,setProductPrice] = useState(0)


    // const productProfile = productInfo?.profileCategories?.length>0?productInfo?.profileCategories[0]?.profileItems:null
    // const productProfileSize =productInfo?.profileCategories?.length>0? productInfo?.profileCategories[1]?.profileItems: null
    // const productProfileBackSupport =productInfo?.profileCategories?.length>0? productInfo?.profileCategories[2]?.profileItems:null
    // const productProfileTilt = productInfo?.profileCategories?.length>0?productInfo?.profileCategories[3]?.profileItems:null
    // const productProfileArms = productInfo?.profileCategories?.length>0?productInfo?.profileCategories[4]?.profileItems:null
    // const productProfileArmpad =productInfo?.profileCategories?.length>0? productInfo?.profileCategories[5]?.profileItems:null
    // const productProfileCaster =productInfo?.profileCategories?.length>0? productInfo?.profileCategories[6]?.profileItems:null
    const productProfile = productInfo?.profileCategories[0]?.profileItems
    const productProfileSize = productInfo?.profileCategories[1]?.profileItems
    const productProfileBackSupport = productInfo?.profileCategories[2]?.profileItems
    const productProfileTilt = productInfo?.profileCategories[3]?.profileItems
    const productProfileArms = productInfo?.profileCategories[4]?.profileItems
    const productProfileArmpad = productInfo?.profileCategories[5]?.profileItems
    const productProfileCaster = productInfo?.profileCategories[6]?.profileItems




// //get the total price,and set product selected
//     useEffect(()=>{
//         let totalPrice = 0
//         totalPrice = parseInt(productInfo.price) + parseInt(Object.values(productSelected).reduce((sum,item) => sum + parseInt(item.price), 0))
//         setProductPrice(parseInt(totalPrice))
//
//     },[])

    //transfer the total price and the product selected to the parent component
    useEffect(() => {

        let totalPrice = 0
        totalPrice = parseInt(productInfo.price) + parseInt(Object.values(productSelected).reduce((sum,item) => sum + parseInt(item.price), 0))
        setProductPrice(parseInt(totalPrice))
        getProduct(productSelected,parseInt(totalPrice))
    },[productSelected])




    //push the default checked to the state
    useEffect(()=>{

        //frame/base
        let saveCheckedToState = []
        for (let i = 0; i < productProfile?.length; i++){
            saveCheckedToState.push(productProfile[i].checked)
            if(productProfile[i].checked === true){

                setProductSelected(prevState => ({...prevState,
                    frame:{price:productProfile[i].price,name:productProfile[i].name,title: productInfo.profileCategories[0].name}}))
            }

        }
        setFrameCheck(saveCheckedToState)


        //size
        let saveCheckedToStateSize = []
        for (let i = 0; i < productProfileSize?.length; i++){
            saveCheckedToStateSize.push(productProfileSize[i].checked)
            if(productProfileSize[i].checked === true){
                setProductSelected(prevState => ({...prevState,
                    size:{price:productProfileSize[i].price,name:productProfileSize[i].name,title: productInfo.profileCategories[1].name}}))
            }
        }
        setSizeCheck(saveCheckedToStateSize)

        //back support
        let saveCheckedToStateBack = []
        for (let i = 0; i < productProfileBackSupport?.length; i++){
            saveCheckedToStateBack.push(productProfileBackSupport[i].checked)
            if(productProfileBackSupport[i].checked === true){
                setProductSelected(prevState => ({...prevState,
                    backSupport:{price:productProfileBackSupport[i].price,name:productProfileBackSupport[i].name,title: productInfo.profileCategories[2].name}}))
            }
        }
        setBackSupportCheck(saveCheckedToStateBack)
        //tilt
        let saveCheckedToStateTilt = []
        for (let i = 0; i < productProfileTilt?.length; i++){
            saveCheckedToStateTilt.push(productProfileTilt[i].checked)
            if(productProfileTilt[i].checked === true){
                setProductSelected(prevState => ({...prevState,
                    tilt:{price:productProfileTilt[i].price,name:productProfileTilt[i].name,title: productInfo.profileCategories[3].name}}))
            }
        }
        setTiltCheck(saveCheckedToStateTilt)
        //Arms
        let saveCheckedToStateArms = []
        for (let i = 0; i < productProfileArms?.length; i++){
            saveCheckedToStateArms.push(productProfileArms[i].checked)
            if(productProfileArms[i].checked === true){
                setProductSelected(prevState => ({...prevState,
                    arms:{price:productProfileArms[i].price,name:productProfileArms[i].name,title: productInfo.profileCategories[4].name}}))
            }
        }
        setArmsCheck(saveCheckedToStateArms)

        //Armpad
        let saveCheckedToStateArmpad = []
        for (let i = 0; i < productProfileArmpad?.length; i++){
            saveCheckedToStateArmpad.push(productProfileArmpad[i].checked)
            if(productProfileArmpad[i].checked === true){
                setProductSelected(prevState => ({...prevState,
                    armpad:{price:productProfileArmpad[i].price,name:productProfileArmpad[i].name,title: productInfo.profileCategories[5].name}}))
            }
        }
        setArmpadCheck(saveCheckedToStateArmpad)

        //Caster
        let saveCheckedToStateCaster = []
        for (let i = 0; i < productProfileCaster?.length; i++){
            saveCheckedToStateCaster.push(productProfileCaster[i].checked)
            if(productProfileCaster[i].checked === true){
                setProductSelected(prevState => ({...prevState,
                    caster:{price:productProfileCaster[i].price,name:productProfileCaster[i].name,title: productInfo.profileCategories[6].name}}))
            }
        }
        setCasterCheck(saveCheckedToStateCaster)

        let totalPrice = 0
        totalPrice = parseInt(productInfo.price) + parseInt(Object.values(productSelected).reduce((sum,item) => sum + parseInt(item.price), 0))
        setProductPrice(parseInt(totalPrice))
    },[])

                //这里和动态修改className思路相同，先重置数组内此项的状态，然后修改被点击项的状态。
                //但是store里面的数据二次修改之后，没办法render出来，所以我把这块数据存入了组件的state里面，通过组件的state去决定class
                //需要拿的东西，比如说price、checked都从onclick回调函数里面拿

    //callback functions
    //dynamically change the icon and get the price.
    const frameOnClick = (index) => {
        productProfile.map( item => item.checked = false)
        productProfile[index].checked = true
        setProductSelected({...productSelected,
            frame:{price:productProfile[index].price,name:productProfile[index].name,title: productInfo.profileCategories[0].name}})

        let saveCheckedToState = []
        for (let i = 0; i < productProfile.length; i++){
            saveCheckedToState.push(productProfile[i].checked)
        }
        setFrameCheck(saveCheckedToState)
    }

//size callback
    const sizeOnClick = (index) => {
        productProfileSize.map( item => item.checked = false)
        productProfileSize[index].checked = true
        setProductSelected({...productSelected,
            size:{price:productProfileSize[index].price,name:productProfileSize[index].name,title: productInfo.profileCategories[1].name}})
        let saveCheckedToState = []
        for (let i = 0; i < productProfileSize.length; i++){
            saveCheckedToState.push(productProfileSize[i].checked)
        }
        setSizeCheck(saveCheckedToState)
    }

//backSupport callback
    const backSupportOnClick = (index) => {
        productProfileBackSupport.map( item => item.checked = false)
        productProfileBackSupport[index].checked = true
        setProductSelected({...productSelected,
            backSupport:{price:productProfileBackSupport[index].price,name:productProfileBackSupport[index].name,title: productInfo.profileCategories[2].name}})
        let saveCheckedToState = []
        for (let i = 0; i < productProfileBackSupport.length; i++){
            saveCheckedToState.push(productProfileBackSupport[i].checked)
        }
        setBackSupportCheck(saveCheckedToState)
    }

    //tilt callback
    const tiltOnClick = (index) => {
        productProfileTilt.map( item => item.checked = false)
        productProfileTilt[index].checked = true
        setProductSelected({...productSelected,
            tilt:{price:productProfileTilt[index].price,name:productProfileTilt[index].name,title: productInfo.profileCategories[3].name}})
        let saveCheckedToState = []
        for (let i = 0; i < productProfileTilt.length; i++){
            saveCheckedToState.push(productProfileTilt[i].checked)
        }
        setTiltCheck(saveCheckedToState)
    }

    //arms callback
    const armsOnClick = (index) => {
        productProfileArms.map( item => item.checked = false)

        productProfileArms[index].checked = true
        setProductSelected({...productSelected,
            arms:{price:productProfileArms[index].price,name:productProfileArms[index].name,title: productInfo.profileCategories[4].name}})
        let saveCheckedToState = []
        for (let i = 0; i < productProfileArms.length; i++){
            saveCheckedToState.push(productProfileArms[i].checked)
        }
        setArmsCheck(saveCheckedToState)
    }

    //armpad callback
    const armpadOnClick = (index) => {
        productProfileArmpad.map( item => item.checked = false)

        productProfileArmpad[index].checked = true
        setProductSelected({...productSelected,
            armpad:{price:productProfileArmpad[index].price,name:productProfileArmpad[index].name,title: productInfo.profileCategories[5].name}})
        let saveCheckedToState = []
        for (let i = 0; i < productProfileArmpad.length; i++){
            saveCheckedToState.push(productProfileArmpad[i].checked)
        }
        setArmpadCheck(saveCheckedToState)
    }

    //caster callback
    const casterOnClick = (index) => {
        productProfileCaster.map( item => item.checked = false)

        productProfileCaster[index].checked = true
        setProductSelected({...productSelected,
            caster:{price:productProfileCaster[index].price,name:productProfileCaster[index].name,title: productInfo.profileCategories[6].name}})
        let saveCheckedToState = []
        for (let i = 0; i < productProfileCaster.length; i++){
            saveCheckedToState.push(productProfileCaster[i].checked)
        }
        setCasterCheck(saveCheckedToState)
    }


    return(
        <div className='productInfo'>
            <div className='title'>
                <h1>{productInfo.name}</h1>
                <span>Designed by Don Chadwick and Bill Stumpf</span>
                <div className='rating'><Star /><Star/><Star/><Star/><StarOutline/></div>
                <div className='totalPrice'>CS${Number.parseFloat(productPrice).toFixed(2)}</div>
                <div className='warrantyInfo'>
                    <div><Check style={{color:'orangered'}}/><a href="#">12-Year Warranty</a></div>
                    <div><Check style={{color:'orangered'}}/><a href="#">Free Standard Shipping</a></div>
                    <div><Check style={{color:'orangered'}}/><a href="#">30-Day No Hassle Return</a></div>
                </div>
                <div className='freeShipping'>Free Shipping</div>
            </div>
            <div className='frameAndBase'>
                <h2>{ productInfo?.profileCategories?.length>0 && productInfo?.profileCategories[0]?.name}</h2>
                <ul>
                    {productInfo?.profileCategories?.length>0 && productInfo?.profileCategories[0]?.profileItems?.map((value,index) => {
                    return(
                        <li key={index} onClick={() => frameOnClick(index)}>
                            {frameCheck[index]?<CheckCircle  style={{color:'lightgreen'}}/>:<RadioButtonUnchecked/>}<div>{value.name}</div>
                        </li>
                    )
                    })}
                </ul>
            </div>
            <div className='size'>
                <h2>{productInfo?.profileCategories?.length>0 &&productInfo.profileCategories[1].name}</h2>
                <ul>
                    {productInfo?.profileCategories?.length>0 &&productInfo.profileCategories[1].profileItems.map((value,index) => {
                        return(
                            <li key={index} onClick={() => sizeOnClick(index)}>
                                {sizeCheck[index]?<CheckCircle  style={{color:'lightgreen'}}/>:<RadioButtonUnchecked/>}<div>{value.name}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='backSupport'>
                <h2>{productInfo?.profileCategories?.length>0 &&productInfo.profileCategories[2].name}</h2>
                <ul>
                    {productInfo?.profileCategories?.length>0 &&productInfo.profileCategories[2].profileItems.map((value,index) => {
                        return(
                            <li key={index} onClick={() => backSupportOnClick(index)}>
                                {backSupportCheck[index]?<CheckCircle  style={{color:'lightgreen'}}/>:<RadioButtonUnchecked/>}<div>{value.name}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='tilt'>
                <h2>{productInfo?.profileCategories?.length>0 &&productInfo.profileCategories[3].name}</h2>
                <ul>
                    {productInfo?.profileCategories?.length>0 &&productInfo.profileCategories[3].profileItems.map((value,index) => {
                        return(
                            <li key={index} onClick={() => tiltOnClick(index)}>
                                {tiltCheck[index]?<CheckCircle  style={{color:'lightgreen'}}/>:<RadioButtonUnchecked/>}<div>{value.name}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='arms'>
                <h2>{productInfo?.profileCategories?.length>0 &&productInfo.profileCategories[4].name}</h2>
                <ul>
                    {productInfo?.profileCategories?.length>0 &&productInfo.profileCategories[4].profileItems.map((value,index) => {
                        return(
                            <li key={index} onClick={() => armsOnClick(index)}>
                                {armsCheck[index]?<CheckCircle  style={{color:'lightgreen'}}/>:<RadioButtonUnchecked/>}<div>{value.name}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='armpad'>
                <h2>{productInfo?.profileCategories?.length>0 &&productInfo.profileCategories[5].name}</h2>
                <ul>
                    {productInfo?.profileCategories?.length>0 &&productInfo.profileCategories[5].profileItems.map((value,index) => {
                        return(
                            <li key={index} onClick={() => armpadOnClick(index)}>
                                {armpadCheck[index]?<CheckCircle  style={{color:'lightgreen'}}/>:<RadioButtonUnchecked/>}<div>{value.name}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='caster'>
                <h2>{productInfo?.profileCategories?.length>0 && productInfo.profileCategories[6].name}</h2>
                <ul>
                    {productInfo?.profileCategories?.length>0 && productInfo.profileCategories[6].profileItems.map((value,index) => {
                        return(
                            <li key={index} onClick={() => casterOnClick(index)}>
                                {casterCheck[index]?<CheckCircle style={{color:'lightgreen'}}/>:<RadioButtonUnchecked/>}<div>{value.name}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ProductInfo