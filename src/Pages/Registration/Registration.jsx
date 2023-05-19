import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    return (
        <div className="container mx-auto max-w-md mb-4">
            <div className="card">
                <a className="singup">Sign Up</a>
                <div className="inputBox1">
                    <input type="text" required="required" />
                    <span className="user">Email</span>
                </div>

                <div className="inputBox">
                    <input type="text" required="required" />
                    <span>Username</span>
                </div>

                <div className="inputBox">
                    <input type="text" required="required" />
                    <span>Photo URL</span>
                </div>

                <div className="inputBox">
                    <input type="password" required="required" />
                    <span>Password</span>
                </div>

                <button className="enter">Enter</button>
                <label className="label">
                    <Link
                        to="/login"
                        className="label-text-alt link link-hover mt-0"
                    >
                        Already have an account?
                    </Link>
                </label>
            </div>
        </div>
    );
};

export default Registration;