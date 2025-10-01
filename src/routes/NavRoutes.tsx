import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Products } from "../pages/prod/Products";
import { Cart } from "../pages/cart/Cart";
import { Details } from "../pages/det/Details";

const RouteList = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Products />
            },
            {
                path: "/:id",
                element: <Details />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
]);

export const NavRoutes = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RouteList} />
        </React.Fragment>
    );
};



