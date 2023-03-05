import React from 'react';
import  s from "./style.module.scss"
import UserQuestion from "../../components/UserQuestion";
import AiReply from "../../components/AiReply";
const Reply = () => {
    return (
        <div className={s.wrapper}>
            <UserQuestion/>
            <AiReply/>
        </div>
    );
};

export default Reply;