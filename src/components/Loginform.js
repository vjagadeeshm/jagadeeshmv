import React from 'react';
import { connect } from "react-redux";
import { login } from "../redux/reducer";
import "../index.css";
import {withRouter} from "react-router-dom";

class Loginform extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    };

    onSubmit = (e) => {
          e.preventDefault();
         let {email, password} = this.state;
         this.props.login(email, password);
            if(email === "hruday@gmail.com" && password === "hruday123"){
            return this.props.history.push("/EmployeeList");
          } else {
            return alert("Invalid email and password");
          }
    };
    
    render(){
        return (
            <React.Fragment>
                <form name="loginForm">
                    <label>UserName:</label>
                    <input type="email" name="email" onChange = {e => this.setState({email: e.target.value})} />
                    <br/>
                    <label>Password:</label>
                    <input type="password" name="password" onChange = {e => this.setState({password: e.target.value})} />
                    
                    <button type="submit" onClick={this.onSubmit} value="Login">Login</button>
                </form>
            </React.Fragment>
        );
    }
};

  
const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Loginform));