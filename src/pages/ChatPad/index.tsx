import React from 'react';
import ChatInput from "../../components/ChatInput";
import s from "./style.module.scss"
import ChatPadList from "../../components/ChatPadList";
const ChatPad = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.font}>
                <h1>ChatGPT</h1>

            </div>
            <ChatInput/>
        </div>
    );
};

export default ChatPad;