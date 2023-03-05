import React from 'react';
import  s from "./style.module.scss"
import Icon from "../Icon";
import {useNavigate} from "react-router-dom";

const NewChat = () => {
    const navigate=useNavigate()
    const newPage=()=>{
        navigate("/chat/new")
    }
    return (
        <div className={s.wrapper}>
            <div className={s.iconAndFont} onClick={newPage}>
                <Icon name={"add"} />
                <span className={s.font}>New Chat</span>
            </div>
        </div>
    );
};

export default NewChat;