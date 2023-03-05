import React from 'react';
import  s from "./style.module.scss"
import UserQuestion from "../../components/UserQuestion";
import AiReply from "../../components/AiReply";
import ChatInput from "../../components/ChatInput";
const Reply = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.font}>
                <UserQuestion/>
                <AiReply/>
                <ChatInput/>
            </div>
        </div>
    );
};

export default Reply;