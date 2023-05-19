import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../Firebase/firebase.config';
import { AuthContext } from '../../Providers/AuthProviders';
import './Registration.css';

const Registration = () => {
    const auth = getAuth(app);
    const { user, createUser, setLoading } = useContext(AuthContext);
    const [error, setError] = useState([]);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo_url = form.photo_url.value;
        console.log(name, photo_url);

        createUser(email, password)
            .then((result) => {
                const registerUser = result.user;
                if (registerUser) {
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photo_url,
                    }).then(() => {
                        setLoading(true);
                        form.reset();
                        navigate("/");
                    });
                }
            })
            .catch((error) => {
                let fireBaseErr = [];
                fireBaseErr.push(error.message);
                setError(fireBaseErr);
                return;
            });
    };

    return (
        <div className="container mx-auto max-w-md mb-4">
            <form onSubmit={handleRegister}>
                <div className="card">
                    <a className="singup">Sign Up</a>
                    <ul>
                        {error.map((err, index) => {
                            return (
                                <li key={index} className="text-red-500">
                                    {err}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="inputBox1">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            required
                        />
                        <span className="user">Email</span>
                    </div>

                    <div className="inputBox">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                            required
                        />
                        <span>Username</span>
                    </div>

                    <div className="inputBox">
                        <input
                            onChange={(e) => setPhoto(e.target.value)}
                            type="text"
                            name="photo_url"
                            required
                        />
                        <span>Photo URL</span>
                    </div>

                    <div className="inputBox">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            required
                        />
                        <span>Password</span>
                    </div>
                    <button type="submit" className="enter">
                        Register
                    </button>
                    <label className="label">
                        <Link
                            to="/login"
                            className="label-text-alt link link-hover mt-0"
                        >
                            Already have an account?
                        </Link>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Registration;