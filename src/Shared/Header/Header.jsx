import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../Routes/ActiveLink/ActiveLink';
import useTitle from '../../components/Hooks/useTitle';

const Header = () => {
    useTitle('Header');
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    {/* mobile menu starts */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <ActiveLink
                                    className="btn btn-ghost normal-case text-xl"
                                    to="/"
                                >
                                    Home
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink
                                    className="btn btn-ghost normal-case text-xl"
                                    to="/all-toys"
                                >
                                    All Toys
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink
                                    className="btn btn-ghost normal-case text-xl"
                                    to="/my-toys"
                                >
                                    My Toys
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink
                                    className="btn btn-ghost normal-case text-xl"
                                    to="/add-toy"
                                >
                                    Add A Toy
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink
                                    className="btn btn-ghost normal-case text-xl"
                                    to="/blogs"
                                >
                                    Blogs
                                </ActiveLink>
                            </li>
                        </ul>
                    </div>
                    {/* mobile menu ends */}
                    <a className="normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    {/* main menu starts */}
                    <div className="dropdown dropdown-end  hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <ActiveLink
                                    className="btn btn-ghost normal-case text-xl"
                                    to="/"
                                >
                                    Home
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink
                                    className="btn btn-ghost normal-case text-xl"
                                    to="/all-toys"
                                >
                                    All Toys
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink
                                    className="btn btn-ghost normal-case text-xl"
                                    to="/my-toys"
                                >
                                    My Toys
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink
                                    className="btn btn-ghost normal-case text-xl"
                                    to="/add-toy"
                                >
                                    Add A Toy
                                </ActiveLink>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-ghost normal-case text-xl"
                                    to="/blogs"
                                >
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* main menu ends */}
                    <div className="dropdown dropdown-end">
                        <Link
                            className="btn btn-outline btn-accent"
                            to="/login"
                        >
                            Login
                        </Link>
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;