import { createBrowserRouter } from "react-router-dom";
import Products from "../Prodcuts/Products";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <p>Home page</p>,
            },
            {
                path: "/products",
                element: <Products />,
            },
        ],
    },
]);

export default router;
