import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch, Redirect} from "react-router-dom";
import HatsPage from "./pages/hatspage/hats-page.component";
import ShopPage from "./pages/shoppage/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component";
import {auth, createUserProfileInFirebase} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";

class App extends React.Component {
    unsubscribeFromAuth = null;


    componentDidMount() {
        const {setCurrentUserAction} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) { // null on sign out case
                let userRef = await createUserProfileInFirebase(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUserAction({
                        id: snapshot.id,
                        ...snapshot.data()

                    });
                });
            } else {
                setCurrentUserAction(userAuth);
            }
        });

    }

    componentWillUnmount() {
        if (this.unsubscribeFromAuth != null) {
            this.unsubscribeFromAuth();
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/shop/hats' component={HatsPage}/>
                    <Route exact path='/signin'
                           render={() => this.props.currentUser ? <Redirect to="/"/> : <SignInAndSignUpPage/>}/>
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUserAction: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
