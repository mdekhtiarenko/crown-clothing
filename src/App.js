import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component";
import {connect} from "react-redux";
import {checkUserSessionIsActive} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import CheckoutPage from "./pages/checkout/checkout-page.component";
import {
    Routes,
    Route
} from "react-router-dom";
import CollectionOverviewContainer from "./components/collection-overview/collection-overview.container";
import CollectionPageContainer from "./pages/collection/collection-page.container";
class App extends React.Component {

    componentDidMount() {
        const {checkUserSessionIsActive} = this.props;
        checkUserSessionIsActive();
    }

    render() {
        return (
            <div>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<HomePage/>}/>
                    <Route path='/shop' element={<ShopPage/>}>
                        <Route path="" element={<CollectionOverviewContainer/>}/>
                        <Route path={`:collectionId`} element={<CollectionPageContainer/>}/>
                    </Route>
                    <Route exact path='/checkout' element={<CheckoutPage/>}/>
                    <Route exact path='/signin' element={<SignInAndSignUpPage/>}/>
                </Routes>
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
