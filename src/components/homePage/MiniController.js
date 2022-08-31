import {filterProduct} from "../../actions/mainPageAction";
import {useDispatch} from "react-redux";

const MiniController = () => {
    const dispatch = useDispatch()
    //Mini controller price filter
    const handleMiniPriceChange = (value) => {
        if (value === "500") {
            filterProduct("500")(dispatch)
        } else if (value === "1000") {
            filterProduct("1000")(dispatch)
        } else if (value === "1500") {
            filterProduct("1500")(dispatch)
        } else if (value === "2000") {
            filterProduct("2000")(dispatch)
        } else {
            filterProduct("")(dispatch)
        }
    }
    return (

        <div className="miniController">
            <label htmlFor="filterCheckBox">
                <div className="miniControllerContent">
                    <div>Filter By</div>
                    <div><i className="fas fa-sort-up"></i></div>
                </div>
            </label>
            <input type="checkbox" id="filterCheckBox"/>

            <div className="priceAndSort">
                <div className="miniFilterPrice">
                    <div className="miniPriceContainer">
                        <input type="checkbox" id="priceCheckBox"/>
                        <label htmlFor="priceCheckBox">
                            <div className="miniPriceContent">
                                <div>Price</div>
                                <div><i className="fas fa-sort-up"></i></div>
                            </div>
                        </label>
                        <ul>
                            {/*<li onClick={handleMiniPriceChange("")}>none</li>*/}
                            {/*<li onClick={handleMiniPriceChange("500")}>$500 - $1000</li>*/}
                            {/*<li onClick={handleMiniPriceChange("1000")}>$1000 - $1500</li>*/}
                            {/*<li onClick={handleMiniPriceChange("1500")}>$1500 - $2000</li>*/}
                            {/*<li onClick={handleMiniPriceChange("2000")}>Above $2000</li>*/}
                            <li>$500 - $1000</li>
                            <li>$1000 - $1500</li>
                            <li>$1500 - $2000</li>
                            <li>Above $2000</li>
                        </ul>
                    </div>
                </div>

                <div className="miniFilterSort">
                    <div className="miniSortContainer">
                        <input type="checkbox" id="sortCheckBox"/>
                        <label htmlFor="sortCheckBox">
                            <div className="miniSortContent">
                                <div>Sort</div>
                                <div><i className="fas fa-sort-up"></i></div>
                            </div>
                        </label>
                        <ul>
                            <li>Price High to Low</li>
                            <li>Price Low to High</li>
                            <li>Name A to Z</li>
                            <li>Name Z to A</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default MiniController