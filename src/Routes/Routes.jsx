import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Blog from '../Pages/Blog/Blog';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import AddToy from '../components/AddToy/AddToy';
import EditToy from '../components/EditToy/EditToy';
import MyToys from '../components/MyToys/MyToys';
import ToyDetails from "../components/ToyDetails/ToyDetails";
import Toys from '../components/Toys/Toys';
import { fetchToys } from '../loaders/CustomLoaders';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetchToys(),
            },
            {
                path: "/all-toys",
                element: <Toys></Toys>,
            },
            {
                path: "/my-toys",
                element: (
                    <PrivateRoute>
                        <MyToys />
                    </PrivateRoute>
                ),
            },
            {
                path: "/toy/:id",
                element: (
                    <PrivateRoute>
                        <ToyDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `${import.meta.env.VITE_API_BASE_URL}toy/${params.id}`
                    ),
            },
            {
                path: "/toy/update/:id",
                element: (
                    <PrivateRoute>
                        <EditToy />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `${import.meta.env.VITE_API_BASE_URL}toy/${params.id}`
                    ),
            },
            {
                path: "/add-toy",
                element: (
                    <PrivateRoute>
                        <AddToy />
                    </PrivateRoute>
                ),
            },
            {
                path: "/blogs",
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
        ],
    },
]);
export default router;