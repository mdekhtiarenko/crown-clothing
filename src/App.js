import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";
import HatsPage from "./pages/hatspage/hats-page.component";
import ShopPage from "./pages/shoppage/shop-page.component";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/shop/hats' component={HatsPage}/>
            </Switch>
        </div>
    );
}

export default App;
