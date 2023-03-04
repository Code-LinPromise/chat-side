import React from 'react';
import s from "./style.module.scss"
import Icon from "../Icon";

const ChatInput = () => {
    return (
        <div className={s.wrapper}>
            <input type="text"/>
            <span><Icon name="enter"/></span>
        </div>
    );
};

export default ChatInput;