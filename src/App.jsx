import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
    // const [count, setCount] = useState(0);

    return <RouterProvider router={router} />;
}

export default App;
