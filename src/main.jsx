import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CardContainer from "./components/CardContainer";
import Mens from "./Pages/Mens.jsx";
import Women from "./Pages/Women.jsx";
import Kids from "./Pages/Kids.jsx";
import {Provider} from "react-redux";
import store from "./Store/store.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <CardContainer/>,
            },
            {
                path: "/mens",
                element: <Mens/>,
            },
            {
                path: "/women",
                element: <Women/>,
            },
            {
                path: "/kids",
                element: <Kids/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
