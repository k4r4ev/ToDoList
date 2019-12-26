import React from 'react';
import {Link} from "react-router-dom";
import '../app.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nickname: "", password: "", link: ""};
    }

    handleChangeNickname = (event) => {
        this.setState({nickname: event.target.value});
    };

    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    };

    getLink = () => {
        if (this.state.nickname === "admin" && this.state.password === "admin") {
            return "/app";
        }
    };

    render() {
        return (
            <div className="login">
                <p>Authorization</p>
                <input type="input" onChange={this.handleChangeNickname} placeholder="nickname"/>
                <input type="input" onChange={this.handleChangePassword} placeholder="password"/>
                <Link className="login_link" to={this.getLink}>Enter</Link>
            </div>
        )
    }
}

export default Login;
