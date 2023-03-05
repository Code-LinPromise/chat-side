import React from 'react';
import s from "./style.module.scss"
import Icon from "../Icon";
type Props={
    Reply:string
}
const AiReply = (props:Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <span><Icon name="user"/></span>
                <div className={s.font}>
                    {props.Reply}
                </div>
            </div>
        </div>
    );
};

export default AiReply;