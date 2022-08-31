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
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState('')
    const [sortOpen, setSortOpen] = useState(false);


    //Price sort
    const handleChange = (event) => {
        setPrice(event.target.value);
        filterProduct(event.target.value)(dispatch)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    //Feature sort
    const handleSort = (event) => {
        setSort(event.target.value);
        sortProduct(event.target.value)(dispatch)
    };

    const handleSortClose = () => {
        setSortOpen(false);
    };

    const handleSortOpen = () => {
        setSortOpen(true);
    };



    return (
        <div className="function">
            <div className="controllerLeft">
                {/*    <div className="filterPrice">*/}
                {/*        <input type="checkbox" id="checkForPrice"/>*/}
                {/*        <label htmlFor="checkForPrice">*/}
                {/*            <span>Price</span>*/}
                {/*            <i className="fas fa-sort-down"></i>*/}
                {/*        </label>*/}
                {/*    </div>*/}
                {/*    <div className="filterMaterial">*/}
                {/*        <input type="checkbox" id="checkForMaterial"/>*/}
                {/*        <label htmlFor="checkForMaterial">*/}
                {/*            <span>Material</span>*/}
                {/*            <i className="fas fa-sort-down"></i>*/}
                {/*        </label>*/}
                {/*    </div>*/}

                <FormControl sx={{m: 1, minWidth: 120}}>
                    <InputLabel id="demo-controlled-open-select-label">Price</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
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
                        <InputLabel id="demo-controlled-open-select-label">Featured Products</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={sortOpen}
                            onClose={handleSortClose}
                            onOpen={handleSortOpen}
                            value={sort}
                            label="Featured Products"
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

            {/*<div className="miniController">*/}
            {/*    <label htmlFor="filterCheckBox">*/}
            {/*    <div className="miniControllerContent">*/}
            {/*        <div>Filter By</div><div><i className="fas fa-sort-up"></i></div>*/}
            {/*    </div>*/}
            {/*    </label>*/}
            {/*    <input type="checkbox" id="filterCheckBox"/>*/}

            {/*    <div className="miniFilterPrice">*/}
            {/*        <div className="miniPriceContainer">*/}
            {/*            <input type="checkbox" id="priceCheckBox"/>*/}
            {/*            <label htmlFor="priceCheckBox">*/}
            {/*            <div className="miniPriceContent">*/}
            {/*                <div>Price</div><div><i className="fas fa-sort-up"></i></div>*/}
            {/*            </div>*/}
            {/*            </label>*/}
            {/*            <ul>*/}
            {/*                <li onClick={handleMiniPriceChange("")}>none</li>*/}
            {/*                <li onClick={handleMiniPriceChange("500")}>$500 - $1000</li>*/}
            {/*                <li onClick={handleMiniPriceChange("1000")}>$1000 - $1500</li>*/}
            {/*                <li onClick={handleMiniPriceChange("1500")}>$1500 - $2000</li>*/}
            {/*                <li onClick={handleMiniPriceChange("2000")}>Above $2000</li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*        <div className="miniFilterSort">*/}
            {/*            <div className="miniSortContent">*/}
            {/*                <div>Filter By</div><div><i className="fas fa-sort-up"></i></div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}


            {/*<div className="miniController">*/}

            {/*    <Accordion>*/}
            {/*        <AccordionSummary*/}
            {/*            expandIcon={<ExpandMore/>}*/}
            {/*            aria-controls="panel1a-content"*/}
            {/*            id="panel1a-header"*/}
            {/*        >*/}
            {/*            <Typography>Filter & Sort</Typography>*/}
            {/*        </AccordionSummary>*/}

            {/*        <Accordion>*/}
            {/*            <AccordionSummary*/}
            {/*                expandIcon={<ExpandMore/>}*/}
            {/*                aria-controls="panel1a-content"*/}
            {/*                id="panel1a-header"*/}
            {/*            >*/}
            {/*                <Typography>Price Filter</Typography>*/}
            {/*            </AccordionSummary>*/}

            {/*            <AccordionDetails>*/}
            {/*                /!*<FormControl component="fieldset">*!/*/}
            {/*                /!*    <FormLabel component="legend">Gender</FormLabel>*!/*/}
            {/*                /!*    <RadioGroup*!/*/}
            {/*                /!*        aria-label="gender"*!/*/}
            {/*                /!*        defaultValue="female"*!/*/}
            {/*                /!*        name="radio-buttons-group"*!/*/}
            {/*                /!*    >*!/*/}
            {/*                /!*        <FormControlLabel value="female" control={<Radio />} label="Female" />*!/*/}
            {/*                /!*        <FormControlLabel value="male" control={<Radio />} label="Male" />*!/*/}
            {/*                /!*        <FormControlLabel value="other" control={<Radio />} label="Other" />*!/*/}
            {/*                /!*    </RadioGroup>*!/*/}
            {/*                /!*</FormControl>*!/*/}

            {/*                <MenuItem value="">*/}
            {/*                    <em>None</em>*/}
            {/*                </MenuItem>*/}
            {/*            </AccordionDetails>*/}
            {/*            <AccordionDetails>*/}
            {/*                <MenuItem value={'500'}>$500 - $1000</MenuItem>*/}
            {/*            </AccordionDetails>*/}
            {/*            <AccordionDetails>*/}
            {/*                <MenuItem value={'1000'}>$1000 - $1500</MenuItem>*/}
            {/*            </AccordionDetails>*/}
            {/*            <AccordionDetails>*/}
            {/*                <MenuItem value={'1500'}>$1500 - $2000</MenuItem>*/}
            {/*            </AccordionDetails>*/}
            {/*            <AccordionDetails>*/}
            {/*                <MenuItem value={'2000'}>Above $2000</MenuItem>*/}

            {/*            </AccordionDetails>*/}

            {/*        </Accordion>*/}
            {/*        <Accordion>*/}
            {/*            <AccordionSummary*/}
            {/*                expandIcon={<ExpandMore/>}*/}
            {/*                aria-controls="panel2a-content"*/}
            {/*                id="panel2a-header"*/}
            {/*            >*/}
            {/*                <Typography>Accordion 2</Typography>*/}
            {/*            </AccordionSummary>*/}
            {/*            <AccordionDetails>*/}
            {/*                <Typography>*/}
            {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
            {/*                    malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
            {/*                </Typography>*/}
            {/*            </AccordionDetails>*/}
            {/*        </Accordion>*/}

            {/*    </Accordion>*/}
            {/*</div>*/}
        </div>
    )
}

export default LayoutController