import {Link} from "react-router-dom";
import './cartPageHeading.scss'


const CartPageHeading = ({path}) => {

    return(
        <div className='cartHeadingContainer' >
            <div className='nav' >
                <Link to='/' type='a'>Office</Link> > {path}
            </div>
            <div className='cartTitleAndCustomerService'>
                <div className='title'>My Cart</div>
                <div className='cartCustomerService'>
                    <h3>For orders, questions or concerns:</h3>
                    <span>Please call: 888 798 0202</span>
                </div>
            </div>
        </div>
    )
}

export default CartPageHeading