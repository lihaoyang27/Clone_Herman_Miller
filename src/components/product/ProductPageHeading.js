import {Link} from "react-router-dom";
import './productPageHeading.scss'
const ProductPageHeading = ({path,title}) => {

    return(
        <div className='productPageHeadContainer'>

                <div className='nav' >
                    <Link to='/' type='a'>Office</Link> > {path}
                </div>
        </div>
    )
}

export default ProductPageHeading