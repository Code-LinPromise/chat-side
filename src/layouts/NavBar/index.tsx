import React from 'react';
import  s from "./style.module.scss"
import Icon from "../../components/Icon";
import NewChat from "../../components/NewChat";
const NavBar = () => {
    return (
        <div className={s.wrapper}>
            <NewChat />
        </div>
    );
};

export default NavBar;