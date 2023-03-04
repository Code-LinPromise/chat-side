import React from 'react';
import  s from "./style.module.scss"
import NavBar from "../../layouts/NavBar";
import {useEffect} from "react";
import ChatPad from "../ChatPad";

const Chat = () => {

    return (
        <div className={s.wrapper}>
            <NavBar/>
            <ChatPad/>
        </div>
    );
};

export default Chat;