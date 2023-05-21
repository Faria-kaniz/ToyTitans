import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
    return (
        <div id="subscribe-form" className="custom-container">
            <h1 className="text-center lg:text-5xl font-bold my-8">
                Subscribe
            </h1>
            <div className="container">
                <input type="text" placeholder="Name" name="name" required />
                <input
                    type="text"
                    placeholder="Email address"
                    name="mail"
                    required
                />
            </div>
            <div className="container">
                <input type="submit" value="Subscribe" />
            </div>
        </div>
    );
};

export default Subscribe;
