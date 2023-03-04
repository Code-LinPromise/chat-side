import React from 'react';
import  s from "./style.module.scss"
import Icon from "../Icon";
const NewChat = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.iconAndFont}>
                <Icon name={"add"} />
                <span className={s.font}>New Chat</span>
            </div>
        </div>
    );
};

export default NewChat;