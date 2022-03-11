import React, {useEffect} from 'react';
import "./sign-in-sign-up-page.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

const SignInAndSignUpPage = ({currentUser}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!!currentUser){
            navigate("/")
        }
    }, [currentUser, navigate])

    return (
        <div className="sign-in-sign-up-group">
            <SignIn/>
            <SignUp/>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(SignInAndSignUpPage);
