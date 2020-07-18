import React from 'react';
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {startSignInWithEmail, startSignInWithGoogle} from "../../redux/user/user.actions";
import {connect} from "react-redux";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        const {startSignInWithEmail} = this.props;

        startSignInWithEmail(email, password);
    };

    handleChange = (e) => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    };

    render() {
        const {startSignInWithGoogle} = this.props;
        return (
            <div className="sign-in col-s-5 col-3">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput label="Email" handleChange={this.handleChange} name="email" type="email"
                               value={this.state.email} required/>
                    <FormInput label="Password" handleChange={this.handleChange} name="password" type="password"
                               value={this.state.password} required/>

                    {this.state.error && <span>{this.state.error}</span>}

                    <div className="sign-in-group">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button"
                                      onClick={startSignInWithGoogle}
                                      isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}


const mapDispatchToProps = dispatch => ({
    startSignInWithGoogle: () => dispatch(startSignInWithGoogle()),
    startSignInWithEmail: (email, password) => dispatch(startSignInWithEmail(email, password))
})

export default connect(null, mapDispatchToProps)(SignIn);