import React from 'react';
import  s from "./style.module.scss"
import Icon from "../../components/Icon";
import NewChat from "../../components/NewChat";
import ChatItemList from "../../components/ChatItemList";
const NavBar = () => {
    return (
        <div className={s.wrapper}>
            <NewChat />
            <ChatItemList/>
            <div className={s.line}>
                <span className={s.spanLine}>

                </span>
            </div>

        </div>
    );
};

export default NavBar;