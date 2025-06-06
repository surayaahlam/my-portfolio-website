import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
                loader: () => fetch('../projects.json'),
            }
        ],
    },
    {
        path: "*",
        element: <></>,
    }
]);

export { router };