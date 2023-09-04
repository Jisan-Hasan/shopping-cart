import { createBrowserRouter } from "react-router-dom";
import Cart from "../Cart/Cart";
import Products from "../Prodcuts/Products";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Products />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);

export default router;
