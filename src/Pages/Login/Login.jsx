import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login-box">
            <p>Login</p>
            <form>
                <div className="user-box">
                    <input required="" name="email" type="text" />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input required="" name="password" type="password" />
                    <label>Password</label>
                </div>
                <div className="button">
                    Continue With Google
                    <div></div>
                </div>
                <br />
                <Link href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login
                </Link>
            </form>
            <p>
                Don't have an account?{" "}
                <Link to="/registration" className="a2">
                    Sign up!
                </Link>
            </p>
        </div>
    );
};

export default Login;