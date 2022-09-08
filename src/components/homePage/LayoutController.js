import {useDispatch, useSelector} from "react-redux";
import './layoutController.scss'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import {useState} from "react";
import {filterProduct, showBigItem, sortProduct} from "../../actions/mainPageAction";

import MiniController from "./MiniController";


const LayoutController = () => {

    const productAfterFilter = useSelector(state => state.ProductReducer.filterProduct)
    const allProduct = useSelector(state => state.ProductReducer.product)
    const dispatch = useDispatch()
    const [price, setPrice] = useState('');
    const [priceOpen, setPriceOpen] = useState(false);
    const [sort, setSort] = useState('')
    const [sortOpen, setSortOpen] = useState(false);


    //Price sort
    const handleChange = (event) => {
        setPrice(event.target.value);
        filterProduct(event.target.value)(dispatch)
    };

    const handlePriceOpenClose = () => {
        setPriceOpen(!priceOpen);
    };


    //Feature sort
    const handleSort = (event) => {
        setSort(event.target.value);
        sortProduct(event.target.value)(dispatch)
    };

    const handleSortOpenClose = () => {
        setSortOpen(!sortOpen);
    };



    return (
        <div className="function">
            <div className="controllerLeft">
                <FormControl sx={{m: 1, minWidth: 120}}>
                    <InputLabel id="price-select-label">Price</InputLabel>
                    <Select
                        labelId="price-select-label"
                        id="price-select"
                        open={priceOpen}
                        onClose={handlePriceOpenClose}
                        onOpen={handlePriceOpenClose}
                        value={price}
                        label="Price"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'500'}>$500 - $1000</MenuItem>
                        <MenuItem value={'1000'}>$1000 - $1500</MenuItem>
                        <MenuItem value={'1500'}>$1500 - $2000</MenuItem>
                        <MenuItem value={'2000'}>Above $2000</MenuItem>
                    </Select>
                </FormControl>

                <div className="sort">
                    <FormControl sx={{m: 1, minWidth: 160}}>
                        <InputLabel id="sort-select-label">Sort</InputLabel>
                        <Select
                            labelId="sort-select-label"
                            id="sort-select"
                            open={sortOpen}
                            onClose={handleSortOpenClose}
                            onOpen={handleSortOpenClose}
                            value={sort}
                            label="Sort"
                            onChange={handleSort}
                        >

                            <MenuItem value={'priceHtoL'}>Price: High to Low</MenuItem>
                            <MenuItem value={'priceLtoH'}>Price: Low to High</MenuItem>
                            <MenuItem value={'nameAtoZ'}>Name: A to Z</MenuItem>
                            <MenuItem value={'nameZtoA'}>Name: Z to A</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="controllerRight">Showing {productAfterFilter.length} of {allProduct.length} items
                <input type="checkbox" id="changeDisplayBtn" onChange={() => showBigItem()(dispatch)}/>
                <label htmlFor="changeDisplayBtn" className="checkBtn"></label>
            </div>


            <MiniController/>
        </div>
    )
}

export default LayoutController