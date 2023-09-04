import { createBrowserRouter } from "react-router-dom";
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
                element: <div>Product Page</div>,
            },
        ],
    },
]);

export default router;
