import {
    createHashRouter,
    Navigate
} from "react-router-dom";
import Chat from "../pages/Chat";
import ChatPad from "../pages/ChatPad";
import Reply from "../pages/Reply";
export  const router = createHashRouter([
    {
        path: "/",
        element: (<Navigate to="/chat/new"/>)
    },
    {
        path:"chat",
        element:<Chat/>,
        children:[
            {
                path:"new",
                element:<ChatPad/>
            },
            {
                path:"info/:details",
                element:<Reply/>
            }
        ]
    },

]);