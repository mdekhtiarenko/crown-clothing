import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Redirect, Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shoppage/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component";
import {connect} from "react-redux";
import {checkUserSessionIsActive} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import CheckoutPage from "./pages/checkout/checkout-page.component";

class App extends React.Component {

    componentDidMount() {
        const {checkUserSessionIsActive} = this.props;
        checkUserSessionIsActive();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/signin'
                           render={() => this.props.currentUser ? <Redirect to="/"/> : <SignInAndSignUpPage/>}/>
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    checkUserSessionIsActive: () => dispatch(checkUserSessionIsActive())
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
