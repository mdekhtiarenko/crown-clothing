import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";
import HatsPage from "./pages/hatspage/hats-page.component";
import ShopPage from "./pages/shoppage/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/signin' component={SignInAndSignUpPage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/shop/hats' component={HatsPage}/>
            </Switch>
        </div>
    );
}

export default App;
