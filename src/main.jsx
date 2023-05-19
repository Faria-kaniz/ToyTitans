import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import AuthProviders from './Providers/AuthProviders.jsx'
import router from './Routes/Routes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
);
