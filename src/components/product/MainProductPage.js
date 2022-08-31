
import {useEffect, useState} from "react";
import './mainProductPage.scss'
import BigPictureBrowser from "./ShowBigPicture";
import ProductInfo from "./ProductInfo";


const MainProductPage = ({productInfo,getProduct}) => {
    const [currentImage, setCurrentImage] = useState('')
    const [showPictureBrowser, setShowPictureBrowser] = useState(false)
    const [media, setMedia] = useState([])


    const arrTem = productInfo?.media?.split("|")
    useEffect(() => {
        setMedia(arrTem)
    }, [])

    const mediaArr = productInfo?.media?.split("|")
    const fiveMedia = mediaArr?.splice(0, 5, '')

    const closePictureBrowser = () => {
        setShowPictureBrowser(false)
    }

    const changePictureInBrowser = (value) => {
        setCurrentImage(value)
    }

    const feature = ['12-Year Warranty', 'Named 100 Best Inventions By Time Magazine In 2019',
        'Auto-Harmonic™ Tilt Mechanism Automatically Adjusts', 'Flexible Frame', 'Continuous And Breathable Seat And Back',
        'One Adjustment For Height', 'Wrap-Top Facilitates Casual Collaboration', 'Available In Three Arm Styles: Fixed, Fully Adjustable, And Leaf',
        'Dipped-In-Color Option', 'Made In Michigan At A 100% Green-Energy Facility', 'For Questions About Lead Times, In-Stock Options Or Delivery Please Give Usa Call At 888.798.0202.']


    return (
        <div className='mainProductContainer'>
            {showPictureBrowser ? <BigPictureBrowser close={closePictureBrowser} media={media} current={currentImage}
                                                      change={changePictureInBrowser}/> : undefined}
            <div className='productInfoAndImage'>
                <ul className='smallImage'>
                    {fiveMedia?.map((value, index) => {
                        return (
                            <li key={index} onClick={() => setCurrentImage(value)}>
                                <img src={value} alt=""/>
                            </li>
                        )
                    })}
                    <li className='moreImage' onClick={() => setShowPictureBrowser(true)}>+2 MORE</li>


                </ul>
                <div className='bigImage'>
                    {!!fiveMedia && fiveMedia.length>0 &&<img src={!!currentImage ? currentImage : fiveMedia[0]} alt=""/>}
                </div>

                <ProductInfo productInfo={productInfo} getProduct={getProduct}/>

            </div>
            <div className='description'>
                <h1>Description</h1>
                <div className='descriptionContainer'>
                    <div className='descriptionLeft'>{productInfo.description}</div>
                    <div className='descriptionRight'>
                        <div>Key Features</div>
                        <ul>
                            {feature.map((value, index) => {
                                return (
                                    <li key={index}>{value}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default MainProductPage