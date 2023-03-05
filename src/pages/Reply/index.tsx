import React, {useEffect, useState} from 'react';
import  s from "./style.module.scss"
import UserQuestion from "../../components/UserQuestion";
import AiReply from "../../components/AiReply";
import ChatInput from "../../components/ChatInput";
import axios from "axios";
import {useParams} from "react-router-dom";

const Reply = () => {
    const [aiReply,setAiReply]=useState("")
    const {details}=useParams()
    useEffect(()=>{
        console.log(details)
        const getData=axios.post("http://127.0.0.1:5000/",{
                question:`${details}`
            }
        )
            .then((res)=>{setAiReply(res.data)
                console.log(res.data)
            })
            .catch((err)=>console.log(err))
    },[details])
    return (
        <div className={s.wrapper}>
            <div className={s.font}>
                <UserQuestion/>
                <AiReply Reply={aiReply}/>
                <ChatInput/>
            </div>
        </div>
    );
};

export default Reply;