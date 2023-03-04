import {
    createHashRouter,
    Navigate
} from "react-router-dom";
import Chat from "../pages/Chat";

export  const router = createHashRouter([
    {
        path: "/",
        element: (<Navigate to="/chat"/>)
    },
    {
        path:"chat",
        element:<Chat/>,
    },

]);