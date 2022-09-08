import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import HomeView from "./view/home";
import ProductView from "./view/product";
import CartView from "./view/cart";
import LoginRegisterView from "./view/LoginAndRegister";

function App() {
    // let year = 2022
    // let badThings = ["bug","worry"]
    //
    // if(year === 2022)
    // { let badThingsIn2022 = badThings.map(badThing => badThing = null)
    //     console.log('Bad things',badThingsIn2022)}

    return (
        <div className="App">

            <BrowserRouter>

                <Route path='/' exact component={HomeView}></Route>
                <Route path='/product/:id' exact component={ProductView}></Route>
                <Route path='/cart' exact component={CartView}></Route>
                <Route path='/login' exact component={LoginRegisterView}></Route>

            </BrowserRouter>

        </div>
    );
}

export default App;
