import React, {useState} from 'react';
import s from "./style.module.scss"
import Icon from "../Icon";

const ChatInput = () => {

    const submitEvent=()=>{

    }
    return (
        <div className={s.wrapper}>
            <form onSubmit={submitEvent}>
                <input type="text"/>
                <button><Icon name="enter"/></button>
            </form>
        </div>
    );
};

export default ChatInput;