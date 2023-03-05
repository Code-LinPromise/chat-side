import React from 'react';
import s from "./style.module.scss"
import ChatItem from "./ChatItem";
import {useAddTitle} from "../../store/userChatListInfo";

const ChatItemList = () => {
    const title=useAddTitle(state=>state.title)
    return (
        <div className={s.wrapper}>
            <ul>
                {
                    title.map((item,index)=>{
                        return <li key={index}><ChatItem title={item} name="chat"/></li>
                    })
                }
            </ul>
        </div>
    );
};

export default ChatItemList;