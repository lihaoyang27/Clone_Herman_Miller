import {Link} from "react-router-dom";
import "./footer.scss"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="footerLeft">
                    <div className="footerLogo">
                        <div className="footerLogoImg">
                            <a href="#"><img src="http://mfs.mark2win.com/static/media/logo-footer.22fb1af5.svg" alt=""/></a>
                        </div>
                    </div>
                    <div className="customer">
                        <div className="footerTitle">Customer Service</div>
                        <Link to='/' type='a'>Contact Us</Link>
                        <Link to='/' type='a'>FAQ</Link>
                        <Link to='/' type='a'>Returns and Exchanges</Link>
                        <Link to='/' type='a'>Shipping and Delivery</Link>
                        <Link to='/' type='a'>Warranty and Service</Link>
                        <Link to='/' type='a'>Assembly Instructions</Link>
                        <Link to='/' type='a'>Care and Maintenance</Link>
                        <Link to='/' type='a'>Site Feedback</Link>
                        <Link to='/' type='a'>Track Your Order</Link>
                        <Link to='/' type='a'>Nelson Product Recall</Link>
                        <Link to='/' type='a'>Our Response to COVID-19</Link>
                    </div>
                    <div className="resourcesLocations">
                        <div className="resources">
                            <div className="footerTitle">Resources</div>
                            <Link to='/' type='a'>For Business</Link>
                        </div>
                        <div className="locations">
                            <div className="footerTitle">Locations</div>
                            <Link to='/' type='a'>Find a Retailer</Link>
                            <Link to='/' type='a'>Our New York Store</Link>
                        </div>
                    </div>
                    <div className="about">
                        <div className="footerTitle">About Herman Miller</div>
                        <Link to='/' type='a'>About Us</Link>
                        <Link to='/' type='a'>HermanMiller.com</Link>
                        <Link to='/' type='a'>Our Designers</Link>
                        <Link to='/' type='a'>Request A Catalog</Link>
                        <Link to='/' type='a'>Careers</Link>
                        <Link to='/' type='a'>Accessibility Statement</Link>
                        <Link to='/' type='a'>Terms of Sale</Link>
                        <Link to='/' type='a'>Privacy Notice</Link>
                        <Link to='/' type='a'>Cookie Notice</Link>
                        <Link to='/' type='a'>Do Not Sell My Information</Link>
                        <Link to='/' type='a'>Site Map</Link>
                    </div>
                </div>
                <div className="footerRight">
                    <div className="joinMailingList">
                        <div className="footerTitle">Join our mailing list</div>
                        <div className="ui action input">
                            <input type="text" placeholder="Enter your Email"/>
                            <button className="ui button">Sign Up</button>
                        </div>
                    </div>


                    <div className="footerTitle">Follow Us</div>
                </div>

            </div>
            <div className="copyright">
                <div className="canada">
                    <img src="http://mfs.mark2win.com/static/media/Canada-flag.c9d19c1f.png" alt=""/>
                    <span>Canada</span>
                </div>
                <div className="inc">2020 Herman Miller, Inc.</div>
            </div>
            <div className="footerBottom">A Herman Miller Group Company</div>
        </div>
    )
}

export default Footer