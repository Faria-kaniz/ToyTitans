import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import "./Login.css";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([]);
    const handleLogin = (event) => {
        event.preventDefault();
        if ((email, password)) {
            signIn(email, password)
                .then((result) => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    navigate("/");
                })
                .catch((error) => {
                    navigate("/login");
                    let fireBaseErr = [];
                    fireBaseErr.push(error.message);
                    setError(fireBaseErr);
                    return;
                });
        }
    };

    const handleGoogleLogin = (event) => {
        event.preventDefault();
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                console.log("google", loggedUser);
                navigate("/");
            })
            .catch((error) => {
                navigate("/login");
                let fireBaseErr = [];
                fireBaseErr.push(error.message);
                setError(fireBaseErr);
                return;
            });
    };
    return (
        <div className="login-box">
            <p>Login</p>
            <div className="mx-8 mt-4">
                <ul>
                    {error.map((err, index) => {
                        return (
                            <li key={index} className="text-red-500">
                                {err}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <form>
                <div className="user-box">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="email"
                        name="email"
                        required
                    />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="password"
                        name="password"
                        required
                    />
                    <label>Password</label>
                </div>
                <Link onClick={handleLogin}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login
                </Link>
                <br />
                <button className="button" onClick={handleGoogleLogin}>
                    Continue With Google
                    <div></div>
                </button>
                <br />
                <br />
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
