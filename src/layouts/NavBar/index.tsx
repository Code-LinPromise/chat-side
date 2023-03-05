import React, {useEffect, useState} from 'react';
import  s from "./style.module.scss"
import Icon from "../../components/Icon";
import NewChat from "../../components/NewChat";
import ChatItemList from "../../components/ChatItemList";
import ToolList from "../../components/ToolList";
import {useShowBlack} from "../../store/useShowBlack";

const NavBar = () => {
    const showBlack=useShowBlack(state=>state.showBlack)
    const setShowBlack=useShowBlack(state=>state.setShowBlack)
    const [showDark,setShowDark]=useState(false)
    const updateShow=()=>{
        setShowDark(showDark=>!showDark)
        setShowBlack()
    }
    useEffect(()=>{
        const body =document.getElementById("root")
        if(showDark && body){
            body.className="dark all"
        }
        else{
            if(body){
                body.className="light all"
            }
        }
    },[showDark])
    return (
        <div className={s.wrapper}>
            <NewChat />
            <ChatItemList/>
            <div className={s.line}>
                <span className={s.spanLine}>

                </span>
            </div>
            <ToolList  updateShow={updateShow}/>
        </div>
    );
};

export default NavBar;