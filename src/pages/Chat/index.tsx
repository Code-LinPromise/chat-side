import React from 'react';
import  s from "./style.module.scss"
import NavBar from "../../layouts/NavBar";
import {useEffect} from "react";
import ChatPad from "../ChatPad";
import {Outlet} from "react-router-dom";

const Chat = () => {

    return (
        <div className={s.wrapper}>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Chat;