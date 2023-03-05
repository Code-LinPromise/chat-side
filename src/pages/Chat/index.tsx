import React, {useEffect} from 'react';
import  s from "./style.module.scss"
import NavBar from "../../layouts/NavBar";
import {Outlet} from "react-router-dom";
import axios from "axios";

const Chat = () => {

    return (
        <div className={s.wrapper}>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Chat;