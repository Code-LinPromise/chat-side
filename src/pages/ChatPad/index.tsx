import React from 'react';
import ChatInput from "../../components/ChatInput";
import s from "./style.module.scss"
import ChatPadList from "../../components/ChatPadList";
const ChatPad = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.font}>
                <h1>ChatGPT</h1>
                <div className={s.info}>
                    <ChatPadList IconName="sun" title="Examples"
                                 detailsList={["Explain quantum computing in simple terms"
                                     ,"Explain quantum computing in simple terms",
                                     "Explain quantum computing in simple terms"]}/>
                    <ChatPadList IconName="light" title="Capabilities"
                                 detailsList={["Explain quantum computing in simple terms"
                                     ,"Explain quantum computing in simple terms",
                                     "Explain quantum computing in simple terms"]}/>
                    <ChatPadList IconName="danger" title="Limitations"
                                 detailsList={["Explain quantum computing in simple terms"
                                     ,"Explain quantum computing in simple terms",
                                     "Explain quantum computing in simple terms"]}/>
                </div>


            </div>
            <ChatInput/>
        </div>
    );
};

export default ChatPad;