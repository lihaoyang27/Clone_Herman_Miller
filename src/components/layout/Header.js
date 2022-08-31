import {ShoppingCart, Close, Person, Search, Cancel, FormatListBulleted} from "@material-ui/icons";
import "./Header.scss"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductFromLocalStorage} from "../../actions/singleProductAction";
import {AccountReducer} from "../../reducer/accountReducer";
import {getUserDateFromLocalStorage, userLogout} from "../../actions/accountAction";


const Announce = ({close}) => {
    return(
        <div className="announce">
            <span>Enjoy Free Shopping on Office Chairs + 0% Financing Available</span>
            <Close className="closeIcon" fontSize='small' onClick={close}/>
        </div>
    )
}


const Header = () => {

    const [showAnnounce, setShowAnnounce] = useState(true)
    const [showSearchBar, setShowSearchBar] = useState(false)
    const [activeDiv, setActiveDiv] = useState([true,false,false,false,false,false,false,false])
    const [accountHover, setAccountHover] = useState(false)
    const [cartHover, setCartHover] = useState(false)
    const cart = useSelector(state => state?.SingleProductReducer?.productInCart)
    const userData = useSelector(state => state?.AccountReducer?.userData)

    const dispatch = useDispatch()
    const productFromLocalStorage = JSON.parse(localStorage.getItem("cart"))
    const userDateLocalStorage = localStorage.getItem("authData")
    const userTokenLocalStorage = localStorage.getItem("token")
    useEffect(() => {
        getUserDateFromLocalStorage(userDateLocalStorage,userTokenLocalStorage)(dispatch)
        if(!! productFromLocalStorage) {
            getProductFromLocalStorage(productFromLocalStorage)(dispatch)
        }

    },[])


    const clickActiveDiv = (i) => {
        // setActiveDiv(e.target.id)
        // idCurrent = e.target.id
        // // if(e.target.className===activeDiv){
        // //     e.target.className=`${activeDiv} active`
        // // }else{e.target.className=e.target.className}
        // setActiveDiv([false,false,false,false,false,false,false,false])
        let arrTem = [false,false,false,false,false,false,false,false];
        // arrTem[i]=true //另一种方法
        // let newArr = arrTem.splice(i,1,true)  如果把splice给变量赋值，结果是原数组被splice更变的部分，而不是更改后的新数组
        arrTem.splice(i,1,true)
        setActiveDiv(arrTem)
    }

    const closeAnnounce = () => {
        setShowAnnounce(false)
    }
    const showOrNo = () => {
        !showSearchBar ? setShowSearchBar(true) : setShowSearchBar(false)
    }
    // console.log('show?',showAnnounce)
    return (
        <>
            <div className="header">

                {/*{showAnnounce?<Announce close={closeAnnounce}/>:null} 两种写法都可以*/}
                {showAnnounce ? <Announce close={closeAnnounce}/> : undefined}
                <div className="navBar">
                    <div className="navBarContainer">
                        <div className="store">Store</div>
                        <div className="contact">Contact</div>
                        <div className="customerService">
                            <span>CustomerService 888 798 0202</span>
                        </div>
                        <a href='/login' className="myAccount" onMouseEnter={() => {setAccountHover(true)}} onMouseLeave={() => {setAccountHover(false)}}>
                            {/*<div className="myAccount">*/}
                                <span>My Account</span><Person className="headerIcon" fontSize='small'/>
                            <div className={accountHover ? "loginHoverSector active" : "loginHoverSector"}>
                                {!! userData ?
                                    <div className="loginHoverSectorItem" onClick={() => {userLogout()(dispatch)}}>Logout</div>
                                    :<>
                                        <Link to='/login'>
                                            <div className="loginHoverSectorItem" >Login</div>
                                            <div className="loginHoverSectorItem">Register</div>
                                        </Link>
                                    </>
                                }
                            </div>
                            {/*</div>*/}
                        </a>

                        <Link to='/cart'>
                        <div className="cart" onMouseEnter={() => {setCartHover(true)}} onMouseLeave={() => {setCartHover(false)}}>
                            <span>Cart</span><ShoppingCart className="headerIcon" fontSize='small'/>
                            <div className={cartHover ? "hoverShowCart active" : "hoverShowCart"}>
                                <h3>Cart Content</h3>
                                {
                                    !!cart ?
                                        cart?.map((value, index) => {
                                            return (
                                                <div className='cardOfProduct' key={index}>
                                                    <div className='imageOfProduct'><img src={value.image} alt=""/>
                                                    </div>
                                                    <div className='infoOfProduct'>
                                                        <div><h4>{value.name}</h4></div>
                                                        <div>Price:
                                                            ${Number.parseFloat(value.price).toFixed(2)}</div>
                                                        <div>Quantity: {value.count}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : undefined
                                }
                            </div>
                        </div>

                        </Link>
                    </div>
                </div>


                <div className="menu">
                    <div className="menuContainer">
                        <Link to='/'>
                            <picture className="logo">
                                <source media="(min-width:1200px)"
                                        srcSet="http://mfs.mark2win.com/static/media/logo.a567ab07.svg"/>
                                <source media="(max-width:1200px)"
                                        srcSet="http://mfs.mark2win.com/static/media/logo-small.a87100bc.svg"/>
                                <img src="http://mfs.mark2win.com/static/media/logo.a567ab07.svg" alt="logo"/>
                            </picture>
                        </Link>
                        <div className="menuContent">
                            <div id="div1" className={activeDiv[0] ? "active" :undefined} onClick={()=>clickActiveDiv(0)} ><a href="#">Office</a></div>
                            <div id="div2" className={activeDiv[1] ? "active" :undefined} onClick={()=>clickActiveDiv(1)} ><a href="#">Living</a></div>
                            <div id="div3" className={activeDiv[2] ? "active" :undefined} onClick={()=>clickActiveDiv(2)}><a href="#">Dining</a></div>
                            <div id="div4" className={activeDiv[3] ? "active" :undefined} onClick={()=>clickActiveDiv(3)}><a href="#">Bedroom</a></div>
                            <div id="div5" className={activeDiv[4] ? "active" :undefined} onClick={()=>clickActiveDiv(4)}><a href="#">Outdoor</a></div>
                            <div id="div6" className={activeDiv[5] ? "active" :undefined} onClick={()=>clickActiveDiv(5)}><a href="#">Lighting</a></div>
                            <div id="div7" className={activeDiv[6] ? "active" :undefined} onClick={()=>clickActiveDiv(6)}><a href="#">Accessories</a></div>
                            <div id="div8" className={activeDiv[7] ? "active" :undefined} onClick={()=>clickActiveDiv(7)}><a href="#">Gaming</a></div>
                        </div>
                        <div className="ui category search">
                            <div className="ui icon input">
                                <input className="prompt" type="text" placeholder="Search..."/>
                                <i className="search icon"></i>
                            </div>
                            {/*<div className="results"></div>*/}
                        </div>
                        <div className="searchIconHidden">
                            <Search onClick={showOrNo}/>
                        </div>
                    </div>
                </div>

                {showSearchBar &&
                <div className="hiddenSearchBar">
                    <div className="searchBarContainer">
                        <Search/>
                        <div className="ui input">
                            <input type="text" placeholder="Search..."/>
                        </div>
                        <Cancel onClick={() => setShowSearchBar(false)}/>
                    </div>
                </div>
                }
            </div>

            <div className="miniHeader">
                <div className="miniNavBar">
                    <div className="store">Store</div>
                    <div className="contact">Contact</div>
                </div>
                <div className="miniMenu">
                    <div className="miniMenuContainer">
                        <div className="optionsBtn">
                            <input type="checkbox" id="check"/>
                            <label htmlFor="check" className='btnShowMenu'>
                                {/*<div className='btnShowMenu'>*/}
                                    <FormatListBulleted className="miniIcon" fontSize='large'/>
                            </label>
                            <ul className="miniSideMenu">
                                <li>Office</li>
                                <li>Living</li>
                                <li>Dining</li>
                                <li>Bedroom</li>
                                <li>Outdoor</li>
                                <li>Lighting</li>
                                <li>Accessories</li>
                                <li>Gaming</li>
                                <li>Account</li>
                            </ul>
                            {/*<div className="mask"></div>*/}
                        </div>
                        <div className="miniLogo">
                            <img src="http://mfs.mark2win.com/static/media/logo.a567ab07.svg" alt="logo"/>
                        </div>
                        <div className="miniBtnArea">
                            <div className="searchIconHidden">
                                <Search className="miniIcon" fontSize='large' onClick={showOrNo}/>
                            </div>
                            <div className="cart">
                                <ShoppingCart className="miniIcon" fontSize='large'/>
                            </div>
                        </div>
                    </div>
                </div>
                {showSearchBar &&
                <div className="hiddenSearchBar">
                    <div className="searchBarContainer">
                        <Search/>
                        <div className="ui input">
                            <input type="text" placeholder="Search..."/>
                        </div>
                        <Cancel onClick={()=>setShowSearchBar(false)}/>
                    </div>
                </div>
                }
            </div>


        </>
    )
}

export default Header