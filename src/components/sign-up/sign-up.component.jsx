import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import {singUpStart} from "../../redux/user/user.actions";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css"; // optional styles

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        const {signUpStart} = this.props;

        if (password !== confirmPassword) {
            alert("Password dont match!");
            return;
        }

        signUpStart(email, password, displayName, this.successfulSignUp);
    };

    successfulSignUp = () => {
        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });

        toaster.notify("You have successfully registered. Now you can sign in.", {
            duration: 4000
        });
    }

    handleChange = (e) => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    };

    render() {
        return (
            <div className="sign-up col-s-5 col-3">
                <h2>I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Your name" handleChange={this.handleChange} name="displayName" type="text"
                               value={this.state.displayName} required/>
                    <FormInput label="Email" handleChange={this.handleChange} name="email" type="email"
                               value={this.state.email} required/>
                    <FormInput label="Password" handleChange={this.handleChange} name="password" type="password"
                               value={this.state.password} required/>
                    <FormInput label="Confirm password" handleChange={this.handleChange} name="confirmPassword"
                               type="password"
                               value={this.state.confirmPassword} required/>
                    <CustomButton type="submit">Create</CustomButton>
                </form>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName, successfulSignUp) => dispatch(singUpStart(email, password, displayName, successfulSignUp))
})

export default connect(null, mapDispatchToProps)(SignUp);