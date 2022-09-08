import {Link} from "react-router-dom";


const ProductItem = ({productInfo}) => {
    const mediaArr = productInfo.media.split("|")


    return (
        <>
            <Link to={`product/${productInfo.id}`}>
            <div className="imgContainer">
                <img src={mediaArr[0]} className="imgA"/>
                <img src={mediaArr[1]} className="imgB"/>
            </div>
            <div className="productName">{productInfo.name}</div>
            </Link>
            <span>{productInfo.price}</span>
            <div className="moreColor">
                {productInfo.profileCategories[0].profileItems.map((value, index) => {
                    return(
                        <img src={value.media} key={index}/>
                    )
                })}
            </div>
        </>
    )
}

export default ProductItem