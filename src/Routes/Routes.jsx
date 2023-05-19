import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import AddToy from '../components/AddToy/AddToy';
import Toys from '../components/Toys/Toys';
import Blog from '../Pages/Blog/Blog'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/all-toys",
                element: <Toys></Toys>,
            },
            {
                path: "/my-toys",
                element: <Toys></Toys>,
            },
            {
                path: "/add-toy",
                element: <AddToy></AddToy>,
            },
            {
                path: "/blogs",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
        ],
    },
]);
export default router;