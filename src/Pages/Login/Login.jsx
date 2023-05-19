import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-box">
            <p>Login</p>
            <form>
                <div className="user-box">
                    <input required="" name="" type="text" />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input required="" name="" type="password" />
                    <label>Password</label>
                </div>
                <div className="button">
                    Continue With Google
                    <div></div>
                </div>
                <br />
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login
                </a>
            </form>
            <p>
                Don't have an account?{" "}
                <a href="" className="a2">
                    Sign up!
                </a>
            </p>
        </div>
    );
};

export default Login;