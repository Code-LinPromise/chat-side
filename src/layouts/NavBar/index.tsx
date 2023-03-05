import React, {useEffect, useState} from 'react';
import  s from "./style.module.scss"
import Icon from "../../components/Icon";
import NewChat from "../../components/NewChat";
import ChatItemList from "../../components/ChatItemList";
import ToolList from "../../components/ToolList";
import {useShowBlack} from "../../store/useShowBlack";
import {useShiftModel} from "../../store/useShiftModel";

const NavBar = () => {
    const shiftModel=useShiftModel(state=>state.shiftModel)
    const setShift =useShiftModel(state=>state.setShift)
    const showBlack=useShowBlack(state=>state.showBlack)
    const setShowBlack=useShowBlack(state=>state.setShowBlack)

    const updateShow=()=>{
        setShift()
        setShowBlack()
    }
    useEffect(()=>{
        const body =document.getElementById("root")
        if(shiftModel && body){
            body.className="dark"
        }
        else{
            if(body){
                body.className="light"
            }
        }
    },[shiftModel])
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