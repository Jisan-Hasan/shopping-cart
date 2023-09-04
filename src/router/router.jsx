import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home Path</div>,
    },
    {
        path: "/products",
        element: <div>Product Page</div>,
    },
]);

export default router;
