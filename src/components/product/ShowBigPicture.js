import {Close} from "@material-ui/icons";
import './showBigPicture.scss'

const BigPictureBrowser = ({media,current,close,change}) => {

    return(
        <div className='showBigPicture'>
            <ul className='leftSmallPictureContainer' >
                {media.map((value,index)=>{
                    return(
                        <li key={index} className='leftSmallPicture' onClick={()=>change(value)}>
                        <img src={value} alt="" />
                        </li>
                    )
                })}
            </ul>
            <div className='rightBigPictureContainer'>
                <img src={!!current ? current : media[0]} alt=""/>
            </div>
            <div className='closeBtn'><Close fontSize={"large"} onClick={()=>close()}/></div>
        </div>
    )
}

export default BigPictureBrowser