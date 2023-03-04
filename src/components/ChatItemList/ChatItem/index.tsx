import React from 'react';
import s from "./style.module.scss"
import Icon from "../../Icon";

type Props ={
    title:string
}
const ChatItem = (props:Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.iconAndFont}>
                <span><Icon name="chat"/></span>
                <span className={s.font}>{props.title}</span>
            </div>
        </div>
    );
};

export default ChatItem;