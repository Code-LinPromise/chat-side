import React, {useRef} from 'react';
import s from "./style.module.scss"
import Icon from "../Icon";
import {useNavigate} from "react-router-dom";
import {useAddTitle} from "../../store/userChatListInfo";

const ChatInput = () => {
    const inputRef=useRef<HTMLInputElement>(null)
    const navigate=useNavigate()
    const addTitle =useAddTitle(state=>state.addTitle)
    const submitEvent=(e: { preventDefault: () => void; })=>{
        e.preventDefault()
        if(inputRef.current===null){
            return
        }
        if(inputRef.current.value===""){
            return
        }
        addTitle(inputRef.current.value)
        navigate(`/chat/info/${inputRef.current.value}`)
    }
    return (
        <div className={s.wrapper}>
            <form onSubmit={submitEvent}>
                <input type="text" ref={inputRef}/>
                <button><Icon name="enter"/></button>
            </form>
        </div>
    );
};

export default ChatInput;