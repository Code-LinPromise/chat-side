import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Chat from "../pages/Chat";

export  const router = createBrowserRouter([
    {
        path: "/",
        element: <Chat/>
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);