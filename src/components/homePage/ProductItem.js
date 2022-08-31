import {Link} from "react-router-dom";


const ProductItem = ({productInfo}) => {
    const mediaArr = productInfo.media.split("|")
    // console.log(mediaArr)

    // const useStyles = makeStyles({
    //
    // })

    return (
        <>
            <Link to={`product/${productInfo.id}`}>
            <div className="imgContainer">
                <img src={mediaArr[0]} className="imgA"/>
                <img src={mediaArr[1]} className="imgB"/>
            </div>
            <span className="productName">{productInfo.name}</span>
            </Link>
            <span>{productInfo.price}</span>
            <div className="moreColor">
                {productInfo.profileCategories[0].profileItems.map((value, index) => {
                    return(
                        <img src={value.media} key={index}/>
                    )
                })}
            </div>
            {/*<Card sx={{maxWidth:345,boxShadow:0,height:424}}>*/}
            {/*    <CardMedia*/}
            {/*        component="img"*/}
            {/*        alt="product image"*/}
            {/*        height="280"*/}
            {/*        image={mediaArr[0]}*/}


            {/*    />*/}
            {/*    <CardContent sx={{padding:0}}>*/}
            {/*        <Typography variant="subtitle1" component="span" gutterBottom sx={{fontWeight:"bold"}}>*/}
            {/*            {productInfo.name}*/}
            {/*        </Typography>*/}
            {/*        <Typography variant="body2" component="span">*/}
            {/*            {productInfo.price}*/}
            {/*        </Typography>*/}
            {/*        <div className="moreColor">*/}
            {/*            {productInfo.profileCategories[0].profileItems.map((value, index) => {*/}
            {/*                return(*/}
            {/*                    <img src={value.media} key={index}/>*/}
            {/*                )*/}
            {/*            })}*/}
            {/*        </div>*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}
        </>
    )
}

export default ProductItem